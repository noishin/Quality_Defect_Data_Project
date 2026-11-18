
/* =========================================
   PROCESS QUALITY MONITORING
   IQR-Based Statistical Outlier Detection
   ========================================= */

(function () {
  const parameters = [
    { key: "temperature_c", label: "Temperature", unit: "°C" },
    { key: "pressure_torr", label: "Pressure", unit: "Torr" },
    { key: "gas_flow_sccm", label: "Gas Flow", unit: "sccm" },
    { key: "etch_rate_nm_min", label: "Etch Rate", unit: "nm/min" },
    { key: "voltage_v", label: "Voltage", unit: "V" },
    { key: "current_ma", label: "Current", unit: "mA" }
  ];

  const tableContainer = document.getElementById("qualityAnalysisTable");
  const totalAnomaliesElement = document.getElementById("totalAnomalies");
  const parametersAnalyzedElement = document.getElementById("parametersAnalyzed");

  function calculatePercentile(values, percentile) {
    if (!values.length) return null;

    const sorted = [...values].sort((a, b) => a - b);
    const position = (sorted.length - 1) * percentile;
    const lower = Math.floor(position);
    const upper = Math.ceil(position);

    if (lower === upper) return sorted[lower];

    const weight = position - lower;
    return sorted[lower] * (1 - weight) + sorted[upper] * weight;
  }

  function analyzeParameter(records, parameter) {
    const validRecords = records.filter(record => {
      const value = record[parameter.key];

      return value !== null &&
        value !== undefined &&
        value !== "" &&
        Number.isFinite(Number(value));
    });

    const values = validRecords.map(record =>
      Number(record[parameter.key])
    );

    if (values.length < 4) {
      return {
        ...parameter,
        validCount: values.length,
        outlierCount: 0,
        lowerBound: null,
        upperBound: null
      };
    }

    const q1 = calculatePercentile(values, 0.25);
    const q3 = calculatePercentile(values, 0.75);
    const iqr = q3 - q1;

    const lowerBound = q1 - 1.5 * iqr;
    const upperBound = q3 + 1.5 * iqr;

    const outlierCount = values.filter(value =>
      value < lowerBound || value > upperBound
    ).length;

    return {
      ...parameter,
      validCount: values.length,
      outlierCount,
      lowerBound,
      upperBound
    };
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatValue(value) {
    if (value === null || !Number.isFinite(value)) {
      return "N/A";
    }

    return value.toLocaleString("en-US", {
      maximumFractionDigits: 3
    });
  }

  function renderQualityAnalysis(records) {
    if (!tableContainer) return;

    const analysis = parameters.map(parameter =>
      analyzeParameter(records, parameter)
    );

    const totalOutliers = analysis.reduce(
      (sum, item) => sum + item.outlierCount,
      0
    );

    if (totalAnomaliesElement) {
      totalAnomaliesElement.textContent = totalOutliers;
    }

    if (parametersAnalyzedElement) {
      parametersAnalyzedElement.textContent =
        analysis.filter(item => item.validCount > 0).length;
    }

    if (!records.length) {
      tableContainer.innerHTML =
        '<p class="empty-message">No records available for analysis.</p>';
      return;
    }

    const rows = analysis.map(item => `
      <tr>
        <td>${escapeHTML(item.label)}</td>
        <td>${escapeHTML(item.validCount)}</td>
        <td>${escapeHTML(item.unit)}</td>
        <td>${formatValue(item.lowerBound)}</td>
        <td>${formatValue(item.upperBound)}</td>
        <td>
          <span class="status-badge ${
            item.outlierCount > 0 ? "warning" : "success"
          }">
            ${item.outlierCount}
          </span>
        </td>
      </tr>
    `).join("");

    tableContainer.innerHTML = `
      <div class="table-responsive">
        <table class="data-table quality-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Valid Records</th>
              <th>Unit</th>
              <th>Lower Limit</th>
              <th>Upper Limit</th>
              <th>Outlier Findings</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <p class="quality-note">
        Limits are calculated using the IQR method.
        Statistical outliers are not necessarily confirmed defects.
      </p>
    `;
  }

  function getCurrentRecords() {
    if (Array.isArray(window.filteredData)) {
      return window.filteredData;
    }

    if (Array.isArray(window.data)) {
      return window.data;
    }

    return [];
  }

  function initializeQualityAnalysis() {
    renderQualityAnalysis(getCurrentRecords());
  }

  document.addEventListener(
    "dashboardDataFiltered",
    function (event) {
      const records = event.detail &&
        Array.isArray(event.detail.records)
        ? event.detail.records
        : getCurrentRecords();

      renderQualityAnalysis(records);
    }
  );

  initializeQualityAnalysis();

  window.qualityAnalysis = {
    parameters,
    analyzeParameter,
    calculatePercentile,
    renderQualityAnalysis
  };

  console.log("Process Quality Monitoring initialized.");
})();
