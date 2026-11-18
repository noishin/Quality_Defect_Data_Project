
/* =========================================
   PROCESS QUALITY MONITORING
   IQR Anomaly Detection & Investigation
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

  const tableContainer =
    document.getElementById("qualityAnalysisTable");

  const totalAnomaliesElement =
    document.getElementById("totalAnomalies");

  const parametersAnalyzedElement =
    document.getElementById("parametersAnalyzed");

  let currentAnomalies = [];
  let selectedParameter = "all";

  function calculatePercentile(values, percentile) {
    if (!values.length) return null;

    const sorted = [...values].sort((a, b) => a - b);
    const position = (sorted.length - 1) * percentile;
    const lower = Math.floor(position);
    const upper = Math.ceil(position);

    if (lower === upper) return sorted[lower];

    const weight = position - lower;

    return sorted[lower] * (1 - weight) +
      sorted[upper] * weight;
  }

  function escapeHTML(value) {
    return String(value ?? "")
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
        upperBound: null,
        outliers: []
      };
    }

    const q1 = calculatePercentile(values, 0.25);
    const q3 = calculatePercentile(values, 0.75);
    const iqr = q3 - q1;

    const lowerBound = q1 - 1.5 * iqr;
    const upperBound = q3 + 1.5 * iqr;

    const outliers = validRecords
      .filter(record => {
        const value = Number(record[parameter.key]);

        return value < lowerBound || value > upperBound;
      })
      .map(record => {
        const value = Number(record[parameter.key]);
        const isHigh = value > upperBound;

        return {
          waferId: record.wafer_id ?? record.water_id ?? "Unknown",
          processStep: record.process_step ?? "Unknown",
          parameter: parameter.label,
          parameterKey: parameter.key,
          unit: parameter.unit,
          value,
          lowerBound,
          upperBound,
          direction: isHigh ? "Above upper limit" : "Below lower limit",
          distance: isHigh
            ? value - upperBound
            : lowerBound - value
        };
      });

    return {
      ...parameter,
      validCount: values.length,
      outlierCount: outliers.length,
      lowerBound,
      upperBound,
      outliers
    };
  }

  function getAnalysis(records) {
    return parameters.map(parameter =>
      analyzeParameter(records, parameter)
    );
  }

  function createInvestigationSection() {
    if (!tableContainer) return null;

    let section = document.getElementById("anomalyInvestigation");

    if (section) return section;

    section = document.createElement("section");
    section.id = "anomalyInvestigation";
    section.className = "quality-investigation";

    section.innerHTML = `
      <div class="section-heading">
        <h3>Anomaly Investigation</h3>
        <p>
          Detailed records of statistically unusual process measurements.
        </p>
      </div>

      <div class="filter-group">
        <label for="anomalyParameterFilter">
          Filter by parameter:
        </label>

        <select id="anomalyParameterFilter">
          <option value="all">All Parameters</option>
          ${parameters.map(parameter => `
            <option value="${parameter.key}">
              ${escapeHTML(parameter.label)}
            </option>
          `).join("")}
        </select>
      </div>

      <div id="anomalyRecordsTable"></div>
    `;

    tableContainer.insertAdjacentElement("afterend", section);

    const filter = section.querySelector("#anomalyParameterFilter");

    filter.addEventListener("change", function () {
      selectedParameter = this.value;
      renderAnomalyRecords();
    });

    return section;
  }

  function renderAnomalyRecords() {
    const section = createInvestigationSection();
    if (!section) return;

    const container =
      section.querySelector("#anomalyRecordsTable");

    const filteredAnomalies = selectedParameter === "all"
      ? currentAnomalies
      : currentAnomalies.filter(item =>
          item.parameterKey === selectedParameter
        );

    if (!filteredAnomalies.length) {
      container.innerHTML = `
        <p class="empty-message">
          No statistical outliers found for this selection.
        </p>
      `;
      return;
    }

    const rows = filteredAnomalies.map(item => `
      <tr>
        <td>${escapeHTML(item.waferId)}</td>
        <td>${escapeHTML(item.processStep)}</td>
        <td>${escapeHTML(item.parameter)}</td>
        <td>${formatValue(item.value)} ${escapeHTML(item.unit)}</td>
        <td>${formatValue(item.lowerBound)}</td>
        <td>${formatValue(item.upperBound)}</td>
        <td>${escapeHTML(item.direction)}</td>
        <td>${formatValue(item.distance)} ${escapeHTML(item.unit)}</td>
      </tr>
    `).join("");

    container.innerHTML = `
      <div class="table-responsive">
        <table class="data-table quality-table">
          <thead>
            <tr>
              <th>Wafer ID</th>
              <th>Process Step</th>
              <th>Parameter</th>
              <th>Observed Value</th>
              <th>Lower Limit</th>
              <th>Upper Limit</th>
              <th>Detection</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <p class="quality-note">
        These records are statistical outliers identified by the IQR method.
        They are not automatically confirmed product defects.
      </p>
    `;
  }

  function renderQualityAnalysis(records) {
    if (!tableContainer) return;

    const analysis = getAnalysis(records);

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

    const rows = analysis.map(item => `
      <tr>
        <td>${escapeHTML(item.label)}</td>
        <td>${item.validCount}</td>
        <td>${escapeHTML(item.unit)}</td>
        <td>${formatValue(item.lowerBound)}</td>
        <td>${formatValue(item.upperBound)}</td>
        <td>${item.outlierCount}</td>
      </tr>
    `).join("");

    tableContainer.innerHTML = records.length ? `
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
    ` : `
      <p class="empty-message">No records available for analysis.</p>
    `;

    currentAnomalies = analysis.flatMap(item => item.outliers);

    renderAnomalyRecords();
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

  renderQualityAnalysis(getCurrentRecords());

  window.qualityAnalysis = {
    parameters,
    analyzeParameter,
    calculatePercentile,
    renderQualityAnalysis
  };

  console.log("Anomaly Investigation Module Loaded.");
})();
