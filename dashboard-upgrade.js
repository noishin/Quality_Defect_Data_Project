/* Quality Dashboard Upgrade
   Adds a Pearson correlation matrix, live summary statistics, and CSV export.
*/
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const fields = [
    { key: "temperature_c", label: "Temperature", unit: "°C" },
    { key: "pressure_torr", label: "Pressure", unit: "Torr" },
    { key: "gas_flow_sccm", label: "Gas Flow", unit: "sccm" },
    { key: "etch_rate_nm_min", label: "Etch Rate", unit: "nm/min" },
    { key: "voltage_v", label: "Voltage", unit: "V" },
    { key: "current_ma", label: "Current", unit: "mA" }
  ];

  let activeRecords = Array.isArray(window.filteredData)
    ? window.filteredData.slice()
    : (Array.isArray(window.data) ? window.data.slice() : []);

  const tableSection = document.getElementById("tableContainer")?.closest("section");
  const searchControls = document.querySelector(".search-controls");

  const style = document.createElement("style");
  style.textContent = `
    .upgrade-panel{margin:24px 0;padding:22px;border:1px solid var(--border,rgba(115,153,194,.2));border-radius:16px;background:var(--surface,rgba(16,31,51,.88));color:var(--text,#edf6ff)}
    .upgrade-panel h2{margin:0 0 8px;font-size:1.25rem}
    .upgrade-muted{color:var(--text-muted,#9bb0c9);font-size:.92rem;line-height:1.5}
    .upgrade-summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin:16px 0}
    .upgrade-stat{padding:14px;border-radius:12px;background:var(--surface-soft,#12243a);border:1px solid var(--border,rgba(115,153,194,.2))}
    .upgrade-stat strong{display:block;font-size:1.35rem;margin-top:6px}
    .upgrade-table-wrap{overflow-x:auto;margin-top:14px}
    .upgrade-table{width:100%;border-collapse:collapse;min-width:520px}
    .upgrade-table th,.upgrade-table td{padding:10px 12px;border:1px solid var(--border,rgba(115,153,194,.2));text-align:center}
    .upgrade-table th{font-size:.85rem}
    .upgrade-table td{font-variant-numeric:tabular-nums}
    .upgrade-export{padding:11px 16px;border:0;border-radius:10px;background:var(--primary,#35d6e8);color:#07111f;font-weight:700;cursor:pointer}
    @media(max-width:600px){.upgrade-panel{padding:15px}.upgrade-summary{grid-template-columns:repeat(2,minmax(0,1fr))}}
  `;
  document.head.appendChild(style);

  function exportCSV() {
    const columns = [
      ["wafer_id", "Wafer ID"],
      ...fields.map(f => [f.key, `${f.label} (${f.unit})`]),
      ["process_step", "Process Step"]
    ];
    const quote = value => `"${String(value ?? "").replace(/"/g, '""')}"`;
    const rows = [
      columns.map(c => quote(c[1])).join(","),
      ...activeRecords.map(record => columns.map(c => quote(record[c[0]])).join(","))
    ];
    const blob = new Blob(["\uFEFF" + rows.join("\r\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "wafer-quality-filtered-data.csv";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  if (searchControls) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "upgrade-export";
    button.textContent = "Download filtered CSV";
    button.addEventListener("click", exportCSV);
    searchControls.appendChild(button);
  }

  const panel = document.createElement("section");
  panel.className = "upgrade-panel";
  panel.innerHTML = `
    <h2>Advanced Data Insights</h2>
    <p class="upgrade-muted">Live statistics and Pearson correlation coefficients for the currently selected records.</p>
    <div class="upgrade-summary" id="upgradeSummary"></div>
    <h3>Parameter Correlation Matrix</h3>
    <p class="upgrade-muted">Values range from -1 (negative linear relationship) to +1 (positive linear relationship). Correlation does not prove causation.</p>
    <div class="upgrade-table-wrap" id="correlationMatrix"></div>
  `;
  if (tableSection?.parentNode) {
    tableSection.parentNode.insertBefore(panel, tableSection);
  } else {
    document.querySelector(".container")?.appendChild(panel);
  }
    function valuesFor(key) {
    return activeRecords.map(r => Number(r[key])).filter(Number.isFinite);
  }

  function mean(values) {
    return values.length ? values.reduce((a, b) => a + b, 0) / values.length : null;
  }

  function sd(values) {
    if (values.length < 2) return null;
    const m = mean(values);
    return Math.sqrt(values.reduce((s, v) => s + (v - m) ** 2, 0) / (values.length - 1));
  }

  function pearson(xKey, yKey) {
    const pairs = activeRecords.map(r => [Number(r[xKey]), Number(r[yKey])])
      .filter(p => Number.isFinite(p[0]) && Number.isFinite(p[1]));

    if (pairs.length < 2) return null;

    const xs = pairs.map(p => p[0]), ys = pairs.map(p => p[1]);
    const mx = mean(xs), my = mean(ys);

    const numerator = pairs.reduce((s, p) => s + (p[0] - mx) * (p[1] - my), 0);
    const dx = Math.sqrt(xs.reduce((s, v) => s + (v - mx) ** 2, 0));
    const dy = Math.sqrt(ys.reduce((s, v) => s + (v - my) ** 2, 0));

    return dx && dy ? numerator / (dx * dy) : null;
  }

  function fmt(value, digits = 2) {
    return value === null || !Number.isFinite(value) ? "N/A" :
      value.toLocaleString("en-US", { maximumFractionDigits: digits });
  }

  function render() {
    const summary = document.getElementById("upgradeSummary");
    const matrix = document.getElementById("correlationMatrix");

    if (!summary || !matrix) return;

    const temp = valuesFor("temperature_c");
    const etch = valuesFor("etch_rate_nm_min");
    const pressure = valuesFor("pressure_torr");

    const validCount = fields.reduce((sum, f) =>
      sum + activeRecords.filter(r =>
        r[f.key] !== null &&
        r[f.key] !== undefined &&
        r[f.key] !== "" &&
        Number.isFinite(Number(r[f.key]))
      ).length, 0);

    const completeness = activeRecords.length
      ? validCount / (activeRecords.length * fields.length) * 100
      : null;

    summary.innerHTML = `
      <div class="upgrade-stat">
        <span class="upgrade-muted">Selected wafers</span>
        <strong>${activeRecords.length}</strong>
      </div>

      <div class="upgrade-stat">
        <span class="upgrade-muted">Average temperature</span>
        <strong>${fmt(mean(temp))} °C</strong>
      </div>

      <div class="upgrade-stat">
        <span class="upgrade-muted">Average etch rate</span>
        <strong>${fmt(mean(etch))} nm/min</strong>
      </div>

      <div class="upgrade-stat">
        <span class="upgrade-muted">Average pressure</span>
        <strong>${fmt(mean(pressure))} Torr</strong>
      </div>

      <div class="upgrade-stat">
        <span class="upgrade-muted">Data completeness</span>
        <strong>${fmt(completeness, 1)}%</strong>
      </div>

      <div class="upgrade-stat">
        <span class="upgrade-muted">Temperature standard deviation</span>
        <strong>${fmt(sd(temp))} °C</strong>
      </div>
    `;

    const headings = fields.map(f => `<th>${f.label}</th>`).join("");

    const rows = fields.map(row => {
      const cells = fields.map(col => {
        const value = pearson(row.key, col.key);
        return `<td>${value === null ? "N/A" : value.toFixed(2)}</td>`;
      }).join("");

      return `<tr><th>${row.label}</th>${cells}</tr>`;
    }).join("");

    matrix.innerHTML = `
      <table class="upgrade-table">
        <thead>
          <tr><th>Parameter</th>${headings}</tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }

  document.addEventListener("dashboardDataFiltered", event => {
    if (event.detail && Array.isArray(event.detail.records)) {
      activeRecords = event.detail.records.slice();
      render();
    }
  });

  render();
});
