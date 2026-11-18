
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchBox");
  const processFilter = document.getElementById("processFilter");
  const tableContainer = document.getElementById("tableContainer");
  const recordCount = document.getElementById("recordCount");

  if (!Array.isArray(window.data)) {
    console.error("Dataset not found. Check data.js.");
    return;
  }

  // Shared filtered data for the dashboard
  window.filteredData = window.data.slice();

  function getBadgeClass(step) {
    if (!step) return "";

    const lower = String(step).toLowerCase();

    if (lower.includes("deposition")) return "step-deposition";
    if (lower.includes("etching")) return "step-etching";
    if (lower.includes("lithography")) return "step-lithography";
    if (lower.includes("oxidation")) return "step-oxidation";
    if (lower.includes("cmp")) return "step-cmp";

    return "";
  }

  function renderTable(records) {
    if (!records.length) {
      tableContainer.innerHTML =
        '<div class="no-results">No wafer records match your search criteria.</div>';

      recordCount.textContent =
        "Showing 0 of " + window.data.length + " records";

      return;
    }

    let html = `
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Wafer ID</th>
              <th>Pressure (Torr)</th>
              <th>Gas Flow (sccm)</th>
              <th>Etch Rate (nm/min)</th>
              <th>Voltage (V)</th>
              <th>Current (mA)</th>
              <th>Process Step</th>
            </tr>
          </thead>
          <tbody>
    `;

    records.forEach(function (item) {
      const id = item.wafer_id ?? item.water_id ?? "-";
      const pressure = item.pressure_torr ?? "-";
      const gasFlow = item.gas_flow_sccm ?? "-";
      const etchRate = item.etch_rate_nm_min ?? "-";
      const voltage = item.voltage_v ?? "-";
      const current = item.current_ma ?? "-";
      const step = item.process_step ?? "-";

      html += `
        <tr>
          <td class="code-cell"><strong>${id}</strong></td>
          <td class="numeric">${pressure}</td>
          <td class="numeric">${gasFlow}</td>
          <td class="numeric">${etchRate}</td>
          <td class="numeric">${voltage}</td>
          <td class="numeric">${current}</td>
          <td>
            <span class="step-badge ${getBadgeClass(step)}">
              ${step}
            </span>
          </td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;

    tableContainer.innerHTML = html;

    recordCount.textContent =
      "Showing " + records.length +
      " of " + window.data.length + " records";
  }

  function filterRows() {
    const query = searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";

    const selectedStep = processFilter
      ? processFilter.value
      : "all";

    window.filteredData = window.data.filter(function (item) {
      const step = String(item.process_step ?? "");

      const matchesStep =
        selectedStep === "all" || step === selectedStep;

      const searchableValues = [
        item.wafer_id,
        item.water_id,
        item.pressure_torr,
        item.gas_flow_sccm,
        item.etch_rate_nm_min,
        item.voltage_v,
        item.current_ma,
        item.process_step
      ];

      const matchesSearch = searchableValues.some(function (value) {
        return String(value ?? "").toLowerCase().includes(query);
      });

      return matchesStep && matchesSearch;
    });

    renderTable(window.filteredData);

    // Notify dashboard components that the filters have changed.
    document.dispatchEvent(
      new CustomEvent("dashboardDataFiltered", {
        detail: { records: window.filteredData }
      })
    );
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterRows);
  }

  if (processFilter) {
    processFilter.addEventListener("change", filterRows);
  }

  filterRows();
});
