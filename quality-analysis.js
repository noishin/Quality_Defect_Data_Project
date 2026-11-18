
/* =========================================
   QUALITY DEFECT DATA DASHBOARD
   Process Quality Monitoring
   IQR-Based Anomaly Detection
   ========================================= */

(function () {

  const parameters = [
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
      key: "gas_flow_sccm",
      label: "Gas Flow",
      unit: "sccm"
    },
    {
      key: "etch_rate_nm_min",
      label: "Etch Rate",
      unit: "nm/min"
    },
    {
      key: "voltage_v",
      label: "Voltage",
      unit: "V"
    },
    {
      key: "current_ma",
      label: "Current",
      unit: "mA"
    }
  ];


  // Convert valid numeric values into numbers
  function getNumericValues(records, key) {
    return records
      .map(record => record[key])
      .filter(value =>
        value !== null &&
        value !== undefined &&
        value !== "" &&
        Number.isFinite(Number(value))
      )
      .map(Number);
  }


  // Calculate a percentile using linear interpolation
  function calculatePercentile(values, percentile) {

    if (values.length === 0) {
      return null;
    }

    const sorted = [...values].sort((a, b) => a - b);

    const position = (sorted.length - 1) * percentile;
    const lowerIndex = Math.floor(position);
    const upperIndex = Math.ceil(position);

    if (lowerIndex === upperIndex) {
      return sorted[lowerIndex];
    }

    const weight = position - lowerIndex;

    return (
      sorted[lowerIndex] * (1 - weight) +
      sorted[upperIndex] * weight
    );
  }


  // Detect outliers using the IQR method
  function analyzeParameter(records, parameter) {

    const validRecords = records.filter(record => {
      const value = record[parameter.key];

      return (
        value !== null &&
        value !== undefined &&
        value !== "" &&
        Number.isFinite(Number(value))
      );
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

    const outliers = validRecords.filter(record => {
      const value = Number(record[parameter.key]);

      return value < lowerBound || value > upperBound;
    }).map(record => ({
      waferId: record.wafer_id ?? record.water_id ?? "Unknown",
      processStep: record.process_step ?? "Unknown",
      value: Number(record[parameter.key])
    }));

    return {
      ...parameter,
      validCount: values.length,
      outlierCount: outliers.length,
      lowerBound,
      upperBound,
      outliers
    };
  }


  // Analyze all available process parameters
  function analyzeQuality(records) {

    if (!Array.isArray(records)) {
      return [];
    }

    return parameters.map(parameter =>
      analyzeParameter(records, parameter)
    );
  }


  // Make analysis functions available to other dashboard scripts
  window.qualityAnalysis = {
    parameters,
    analyzeQuality,
    analyzeParameter,
    calculatePercentile
  };


  console.log("Quality Analysis Module Loaded.");

})();
