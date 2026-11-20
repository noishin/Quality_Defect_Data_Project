(function () {
  "use strict";

  const stages = [
    "Deposition",
    "Lithography",
    "Etching",
    "Oxidation",
    "CMP"
  ];

  const metrics = [
    { key: "temperature_c", label: "Temperature" },
    { key: "pressure_torr", label: "Pressure" },
    { key: "gas_flow_sccm", label: "Gas Flow" },
    { key: "etch_rate_nm_min", label: "Etch Rate" },
    { key: "voltage_v", label: "Voltage" },
    { key: "current_ma", label: "Current" }
  ];

  function getValues(records, key) {
    return records
      .map(row => Number(row[key]))
      .filter(Number.isFinite)
      .sort((a, b) => a - b);
  }

  function getBounds(values) {
    if (values.length < 4) return null;

    const q1 = values[Math.floor((values.length - 1) * 0.25)];
    const q3 = values[Math.floor((values.length - 1) * 0.75)];
    const iqr = q3 - q1;

    return {
      low: q1 - 1.5 * iqr,
      high: q3 + 1.5 * iqr
    };
  }

  function analyze(records) {
    const bounds = {};

    metrics.forEach(metric => {
      bounds[metric.key] = getBounds(
        getValues(records, metric.key)
      );
    });

    const results = stages.map(stage => {
      const group = records.filter(
        row => row.process_step === stage
      );

      const flagged = new Set();
      let anomalyCount = 0;

      group.forEach(row => {
        metrics.forEach(metric => {
          const range = bounds[metric.key];
          const value = Number(row[metric.key]);

          if (
            range &&
            Number.isFinite(value) &&
            (value < range.low || value > range.high)
          ) {
            flagged.add(row.wafer_id);
            anomalyCount++;
          }
        });
      });

      const rate = group.length
        ? (flagged.size / group.length) * 100
        : 0;

      let level = "Low";

      if (rate >= 15) {
        level = "Elevated";
      } else if (rate >= 5) {
        level = "Moderate";
      }

      return {
        stage,
        total: group.length,
        flagged: flagged.size,
        anomalyCount,
        rate,
        level
      };
    });

    return results;
  }

  function createElement(tag, text) {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function render(records) {
    const old = document.getElementById("qualityRiskPanel");
    if (old) old.remove();

    if (!Array.isArray(records) || !records.length) return;

    const results = analyze(records);

    const panel = createElement("section");
    panel.id = "qualityRiskPanel";

    panel.style.cssText = `
      margin: 25px 0;
      padding: 24px;
      background: #ffffff;
      color: #243247;
      border-radius: 14px;
      box-shadow: 0 4px 18px rgba(0,0,0,.08);
      overflow-x: auto;
    `;

    const title = createElement("h2", "Quality Risk Detection");
    panel.appendChild(title);

    panel.appendChild(createElement(
      "p",
      "Statistical screening of unusual wafer measurements."
    ));

    const totalFlagged = results.reduce(
      (sum, item) => sum + item.flagged,
      0
    );

    const summary = createElement("div");

    summary.style.cssText = `
      padding: 16px;
      margin: 18px 0;
      background: #f1f5f9;
      border-radius: 10px;
    `;

    summary.appendChild(createElement(
      "h3",
      "Risk Overview"
    ));

    summary.appendChild(createElement(
      "p",
      "Filtered wafers analyzed: " + records.length
    ));

    summary.appendChild(createElement(
      "p",
      "Stage-level flagged wafer counts (not unique across stages): " +
      totalFlagged
    ));

    panel.appendChild(summary);

    const table = createElement("table");

    table.style.cssText = `
      width: 100%;
      min-width: 600px;
      border-collapse: collapse;
      margin-top: 15px;
    `;

    const headers = [
      "Process Stage",
      "Wafers",
      "Flagged Wafers",
      "Anomaly Rate",
      "Risk Level"
    ];

    const thead = createElement("thead");
    const headerRow = createElement("tr");

    headers.forEach(label => {
      const th = createElement("th", label);

      th.style.cssText = `
        padding: 12px;
        text-align: left;
        border-bottom: 2px solid #dbe3ed;
      `;

      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = createElement("tbody");

    results.forEach(item => {
      const row = createElement("tr");

      const values = [
        item.stage,
        item.total,
        item.flagged,
        item.rate.toFixed(1) + "%",
        item.level
      ];

      values.forEach((value, index) => {
        const td = createElement("td", String(value));

        td.style.cssText = `
          padding: 12px;
          border-bottom: 1px solid #e5eaf0;
        `;

        if (index === 4) {
          td.style.fontWeight = "bold";
        }

        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    panel.appendChild(table);

    const report = createElement("div");

    report.style.cssText = `
      margin-top: 20px;
      padding: 16px;
      background: #f8fafc;
      border-radius: 10px;
    `;

    report.appendChild(createElement(
      "h3",
      "Automatic Risk Report"
    ));

    const elevated = results.filter(
      item => item.level === "Elevated"
    );

    const moderate = results.filter(
      item => item.level === "Moderate"
    );

    const low = results.filter(
      item => item.level === "Low"
    );

    report.appendChild(createElement(
      "p",
      "Elevated: " +
      (elevated.map(item => item.stage).join(", ") || "None")
    ));

    report.appendChild(createElement(
      "p",
      "Moderate: " +
      (moderate.map(item => item.stage).join(", ") || "None")
    ));

    report.appendChild(createElement(
      "p",
      "Low: " +
      (low.map(item => item.stage).join(", ") || "None")
    ));

    panel.appendChild(report);

    const note = createElement(
      "p",
      "Important: Risk levels are screening indicators based on the IQR method and selected thresholds. They do not confirm actual wafer defects or predict manufacturing failures."
    );

    note.style.cssText = `
      margin-top: 18px;
      font-size: 13px;
      color: #64748b;
      line-height: 1.6;
    `;

    panel.appendChild(note);

    const copyButton = createElement(
      "button",
      "Copy Risk Report"
    );

    copyButton.type = "button";

    copyButton.style.cssText = `
      margin-top: 12px;
      padding: 11px 18px;
      border: none;
      border-radius: 8px;
      background: #2563eb;
      color: white;
      cursor: pointer;
    `;

    copyButton.addEventListener("click", async function () {
      const text = [
        "QUALITY RISK DETECTION REPORT",
        "Filtered wafers: " + records.length,
        "",
        ...results.map(item =>
          item.stage +
          ": " + item.flagged +
          "/" + item.total +
          " flagged (" + item.rate.toFixed(1) +
          "%) - " + item.level
        ),
        "",
        "Statistical screening only. Not confirmed defects."
      ].join("\n");

      try {
        await navigator.clipboard.writeText(text);
        copyButton.textContent = "Report Copied!";
      } catch (error) {
        copyButton.textContent = "Copy unavailable";
      }
    });

    panel.appendChild(copyButton);

    const previous = document.getElementById(
      "processInsightsPanel"
    );

    const tableContainer = document.getElementById(
      "tableContainer"
    );

    if (previous && previous.parentNode) {
      previous.parentNode.insertBefore(
        panel,
        previous.nextSibling
      );
    } else if (tableContainer && tableContainer.parentNode) {
      tableContainer.parentNode.insertBefore(
        panel,
        tableContainer.nextSibling
      );
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    render(window.filteredData || window.data || []);

    document.addEventListener(
      "dashboardDataFiltered",
      function (event) {
        render(event.detail.records);
      }
    );
  });

})();
