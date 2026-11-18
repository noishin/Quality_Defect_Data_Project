
/* =========================================
   QUALITY DEFECT DATA DASHBOARD
   Dynamic KPI Statistics
   ========================================= */

(function () {

  function calculateAverage(records, field) {
    const values = records
      .map(record => record[field])
      .filter(value =>
        value !== null &&
        value !== undefined &&
        value !== "" &&
        Number.isFinite(Number(value))
      )
      .map(Number);

    if (values.length === 0) {
      return null;
    }

    const total = values.reduce(
      (sum, value) => sum + value,
      0
    );

    return total / values.length;
  }


  function updateDashboard(records) {

    if (!Array.isArray(records)) {
      console.error("Invalid dashboard data.");
      return;
    }

    const totalWafersElement =
      document.getElementById("totalWafers");

    const processStagesElement =
      document.getElementById("processStages");

    const avgTemperatureElement =
      document.getElementById("avgTemperature");

    const avgPressureElement =
      document.getElementById("avgPressure");

    if (
      !totalWafersElement ||
      !processStagesElement ||
      !avgTemperatureElement ||
      !avgPressureElement
    ) {
      console.error("One or more KPI elements were not found.");
      return;
    }


    // Total records in the current filtered dataset
    const totalWafers = records.length;


    // Number of unique process stages in the current dataset
    const processStages = new Set(
      records
        .map(record => record.process_step)
        .filter(value =>
          value !== null &&
          value !== undefined &&
          value !== ""
        )
    ).size;


    // Average temperature
    const avgTemperature =
      calculateAverage(records, "temperature_c");


    // Average pressure
    const avgPressure =
      calculateAverage(records, "pressure_torr");


    // Update KPI cards
    totalWafersElement.textContent =
      totalWafers.toLocaleString("en-US");

    processStagesElement.textContent =
      processStages.toString();

    avgTemperatureElement.textContent =
      avgTemperature === null
        ? "N/A"
        : avgTemperature.toFixed(2) + " °C";

    avgPressureElement.textContent =
      avgPressure === null
        ? "N/A"
        : avgPressure.toFixed(2) + " Torr";


    console.log("KPI Dashboard updated:", {
      totalWafers,
      processStages,
      avgTemperature,
      avgPressure
    });

  }


  // Make the update function available to other dashboard scripts
  window.updateDashboard = updateDashboard;


  // Update KPIs whenever search or process filters change
  document.addEventListener(
    "dashboardDataFiltered",
    function (event) {
      updateDashboard(event.detail.records);
    }
  );


  // Initial dashboard calculation
  if (Array.isArray(window.data)) {
    updateDashboard(window.data);
  } else {
    console.error("Dataset not found. Check data.js.");
  }

})();
