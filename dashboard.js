
/* =========================================
   QUALITY DEFECT DATA DASHBOARD
   Advanced Dynamic KPI Statistics
   ========================================= */

(function () {

  const numericParameters = [
    "temperature_c",
    "pressure_torr",
    "gas_flow_sccm",
    "etch_rate_nm_min",
    "voltage_v",
    "current_ma"
  ];

  function getNumericValues(records, field) {
    return records
      .map(record => record[field])
      .filter(value =>
        value !== null &&
        value !== undefined &&
        value !== "" &&
        Number.isFinite(Number(value))
      )
      .map(Number);
  }

  function calculateAverage(records, field) {
    const values = getNumericValues(records, field);

    if (values.length === 0) return null;

    return values.reduce((sum, value) => sum + value, 0)
      / values.length;
  }

  function calculateDataCompleteness(records) {
    if (records.length === 0) return null;

    let validValues = 0;
    const totalValues = records.length * numericParameters.length;

    records.forEach(record => {
      numericParameters.forEach(field => {
        const value = record[field];

        if (
          value !== null &&
          value !== undefined &&
          value !== "" &&
          Number.isFinite(Number(value))
        ) {
          validValues++;
        }
      });
    });

    return (validValues / totalValues) * 100;
  }

  function animateValue(element, target, suffix = "", decimals = 0) {
    if (!element) return;

    if (target === null || !Number.isFinite(target)) {
      element.textContent = "N/A";
      return;
    }

    const start = Number(element.dataset.currentValue || 0);
    const duration = 800;
    const startTime = performance.now();

    function update(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = start + (target - start) * eased;

      element.textContent =
        value.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals
        }) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.dataset.currentValue = target;
      }
    }

    requestAnimationFrame(update);
  }

  function updateDashboard(records) {
    if (!Array.isArray(records)) {
      console.error("Invalid dashboard data.");
      return;
    }

    const totalWafers = records.length;

    const processStages = new Set(
      records
        .map(record => record.process_step)
        .filter(value => value !== null && value !== undefined && value !== "")
    ).size;

    const avgTemperature = calculateAverage(records, "temperature_c");
    const avgPressure = calculateAverage(records, "pressure_torr");
    const avgEtchRate = calculateAverage(records, "etch_rate_nm_min");
    const dataCompleteness = calculateDataCompleteness(records);

    animateValue(document.getElementById("totalWafers"), totalWafers);
    animateValue(document.getElementById("processStages"), processStages);
    animateValue(document.getElementById("avgTemperature"), avgTemperature, " °C", 2);
    animateValue(document.getElementById("avgPressure"), avgPressure, " Torr", 2);
    animateValue(document.getElementById("avgEtchRate"), avgEtchRate, " nm/min", 2);
    animateValue(document.getElementById("dataCompleteness"), dataCompleteness, "%", 1);

    console.log("KPI Dashboard updated:", {
      totalWafers,
      processStages,
      avgTemperature,
      avgPressure,
      avgEtchRate,
      dataCompleteness
    });
  }

  window.updateDashboard = updateDashboard;

  document.addEventListener("dashboardDataFiltered", function (event) {
    if (event.detail && Array.isArray(event.detail.records)) {
      updateDashboard(event.detail.records);
    }
  });

  if (Array.isArray(window.data)) {
    updateDashboard(window.data);
  } else {
    console.error("Dataset not found. Check data.js.");
  }

})();
