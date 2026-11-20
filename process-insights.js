(function () {
  "use strict";

  const metrics = [
    {
      key: "temperature_c",
      label: "Temperature",
      unit: "°C"
    },
    {
      key: "pressure_torr",
      label: "Pressure",
      unit: "Torr"
    },
    {
      key: "etch_rate_nm_min",
      label: "Etch Rate",
      unit: "nm/min"
    }
  ];

  const steps = [
    "Deposition",
    "Lithography",
    "Etching",
    "Oxidation",
    "CMP"
  ];

  function average(records, key) {
    const values = records
      .map(row => Number(row[key]))
      .filter(Number.isFinite);

    if (!values.length) return null;

    return values.reduce((a, b) => a + b, 0) / values.length;
  }

  function outlierCount(records, key) {
    const values = records
      .map(row => Number(row[key]))
      .filter(Number.isFinite)
      .sort((a, b) => a - b);

    if (values.length < 4) return 0;

    const q1 = values[Math.floor((values.length - 1) * 0.25)];
    const q3 = values[Math.floor((values.length - 1) * 0.75)];
    const iqr = q3 - q1;

    const low = q1 - 1.5 * iqr;
    const high = q3 + 1.5 * iqr;

    return values.filter(v => v < low || v > high).length;
  }

  function render(records) {
    const oldPanel = document.getElementById("processInsightsPanel");
    if (oldPanel) oldPanel.remove();

    if (!Array.isArray(records) || !records.length) return;

    const panel = document.createElement("section");
    panel.id = "processInsightsPanel";

    panel.style.cssText = `
      margin: 25px 0;
      padding: 24px;
      border-radius: 14px;
      background: #ffffff;
      color: #243247;
      box-shadow: 0 4px 18px rgba(0,0,0,.08);
      overflow-x: auto;
    `;

    const title = document.createElement("h2");
    title.textContent = "Process Stage Intelligence";
    panel.appendChild(title);

    const description = document.createElement("p");
    description.textContent =
      "Statistical comparison of production stages based on the currently filtered records.";
    panel.appendChild(description);

    const table = document.createElement("table");

    table.style.cssText = `
      width: 100%;
      border-collapse: collapse;
      min-width: 650px;
      margin-top: 18px;
    `;

    const headers = [
      "Process Stage",
      "Wafer Count",
      ...metrics.map(m => m.label),
      "Potential Outliers"
    ];

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    headers.forEach(text => {
      const th = document.createElement("th");
      th.textContent = text;
      th.style.cssText =
        "padding: 12px; text-align: left; border-bottom: 2px solid #dbe3ed;";
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    steps.forEach(step => {
      const group = records.filter(
        row => String(row.process_step).toLowerCase() === step.toLowerCase()
      );

      const tr = document.createElement("tr");

      const cells = [
        step,
        group.length,
        ...metrics.map(metric => {
          const avg = average(group, metric.key);
          return avg === null
            ? "—"
            : avg.toFixed(2) + " " + metric.unit;
        }),
        metrics.reduce(
          (sum, metric) => sum + outlierCount(group, metric.key),
          0
        )
      ];

      cells.forEach(value => {
        const td = document.createElement("td");
        td.textContent = value;
        td.style.cssText =
          "padding: 12px; border-bottom: 1px solid #e5eaf0;";
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    panel.appendChild(table);

    const note = document.createElement("p");
    note.style.cssText =
      "margin-top: 16px; font-size: 13px; color: #64748b;";
    note.textContent =
      "Note: Outliers are statistical observations, not confirmed manufacturing defects. Higher or lower averages do not automatically indicate better quality.";
    panel.appendChild(note);

    const summary = document.createElement("div");
    summary.style.cssText =
      "margin-top: 18px; padding: 15px; background: #f1f5f9; border-radius: 10px;";

    const summaryTitle = document.createElement("h3");
    summaryTitle.textContent = "Automatic Analysis";
    summary.appendChild(summaryTitle);

    const total = document.createElement("p");
    total.textContent =
      "Total filtered wafers: " + records.length;
    summary.appendChild(total);

    metrics.forEach(metric => {
      const best = steps
        .map(step => ({
          step,
          value: average(
            records.filter(r => r.process_step === step),
            metric.key
          )
        }))
        .filter(item => item.value !== null)
        .sort((a, b) => a.value - b.value);

      if (!best.length) return;

      const p = document.createElement("p");
      p.textContent =
        metric.label +
        " — lowest average: " +
        best[0].step +
        " (" +
        best[0].value.toFixed(2) +
        " " +
        metric.unit +
        ").";

      summary.appendChild(p);
    });

    panel.appendChild(summary);

    const anchor =
      document.getElementById("processInsightsPanel") ||
      document.getElementById("tableContainer");

    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(panel, anchor.nextSibling);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    render(window.filteredData || window.data || []);

    document.addEventListener("dashboardDataFiltered", function (event) {
      render(event.detail.records);
    });
  });
})();
