
/* =========================================
   QUALITY DEFECT DATA DASHBOARD
   KPI Statistics Calculator
   Version 2
   ========================================= */


/* =========================================
   1. INITIALIZE DASHBOARD
   ========================================= */

function initializeDashboard() {

  console.log("Initializing KPI Dashboard...");


  /* =====================================
     2. GET DATASET
     ===================================== */

  const records = window.data;

  if (!Array.isArray(records) || records.length === 0) {

    console.error(
      "Dataset not found or empty. Check data.js."
    );

    return;
  }


  /* =====================================
     3. GET HTML ELEMENTS
     ===================================== */

  const totalWafersElement =
    document.getElementById("totalWafers");

  const processStagesElement =
    document.getElementById("processStages");

  const avgTemperatureElement =
    document.getElementById("avgTemperature");

  const avgPressureElement =
    document.getElementById("avgPressure");


  /* =====================================
     4. CHECK HTML ELEMENTS
     ===================================== */

  if (
    !totalWafersElement ||
    !processStagesElement ||
    !avgTemperatureElement ||
    !avgPressureElement
  ) {

    console.error(
      "One or more KPI HTML elements were not found."
    );

    return;
  }


  /* =====================================
     5. CALCULATE AVERAGE
     ===================================== */

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


    if (values.length === 0) {
      return null;
    }


    const total = values.reduce(
      (sum, value) => sum + value,
      0
    );


    return total / values.length;
  }


  /* =====================================
     6. TOTAL WAFERS
     ===================================== */

  const totalWafers = records.length;


  /* =====================================
     7. UNIQUE PROCESS STAGES
     ===================================== */

  const processStages = new Set(

    records

      .map(record => record.process_step)

      .filter(value =>
        value !== null &&
        value !== undefined &&
        value !== ""
      )

  ).size;


  /* =====================================
     8. AVERAGE TEMPERATURE
     ===================================== */

  const avgTemperature =
    calculateAverage("temperature_c");


  /* =====================================
     9. AVERAGE PRESSURE
     ===================================== */

  const avgPressure =
    calculateAverage("pressure_torr");


  /* =====================================
     10. UPDATE KPI ELEMENTS
     ===================================== */

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


  /* =====================================
     11. CONSOLE INFORMATION
     ===================================== */

  console.log("KPI Dashboard successfully updated.");

  console.log({
    totalWafers,
    processStages,
    avgTemperature,
    avgPressure
  });

}


/* =========================================
   12. RUN DASHBOARD
   ========================================= */

// Scripts are loaded at the end of body.
// Therefore, the HTML elements are available here.

initializeDashboard();
