
/* =====================================
   QUALITY DEFECT DATA DASHBOARD
   KPI Statistics Calculator
   ===================================== */

document.addEventListener("DOMContentLoaded", function () {

  const records = window.data;

  if (!Array.isArray(records) || records.length === 0) {
    console.error("Dataset not found or empty.");
    return;
  }

  // Calculate average of a numeric field
  function calculateAverage(field) {

    const values = records
      .map(record => record[field])
      .filter(value =>
        value !== null &&
        value !== undefined &&
        value !== "" &&
        Number.isFinite(Number(value))
      )
      .map(Number);

    if (values.length === 0) return null;

    const total = values.reduce(
      (sum, value) => sum + value, 0
    );

    return total / values.length;
  }

  // Total number of wafers
  const totalWafers = records.length;

  // Number of unique process stages
  const processStages = new Set(
    records.map(record => record.process_step)
      .filter(Boolean)
  ).size;

  // Average temperature
  const avgTemperature = calculateAverage("temperature_c");

  // Average pressure
  const avgPressure = calculateAverage("pressure_torr");

  // Update dashboard elements
  document.getElementById("totalWafers").textContent =
    totalWafers.toLocaleString("en-US");

  document.getElementById("processStages").textContent =
    processStages;

  document.getElementById("avgTemperature").textContent =
    avgTemperature === null
      ? "N/A"
      : avgTemperature.toFixed(2) + " °C";

  document.getElementById("avgPressure").textContent =
    avgPressure === null
      ? "N/A"
      : avgPressure.toFixed(2) + " Torr";

});
