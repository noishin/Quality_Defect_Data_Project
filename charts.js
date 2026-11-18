
/* =========================================
   FUTURISTIC AI DASHBOARD
   Interactive Chart System
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const processSteps = [
    "Deposition",
    "Etching",
    "Lithography",
    "Oxidation",
    "CMP"
  ];

  const parameters = {
    temperature_c: {
      label: "Temperature",
      unit: "°C"
    },
    pressure_torr: {
      label: "Pressure",
      unit: "Torr"
    },
    gas_flow_sccm: {
      label: "Gas Flow",
      unit: "sccm"
    },
    etch_rate_nm_min: {
      label: "Etch Rate",
      unit: "nm/min"
    },
    voltage_v: {
      label: "Voltage",
      unit: "V"
    },
    current_ma: {
      label: "Current",
      unit: "mA"
    }
  };

  const palette = {
    cyan: "#35d6e8",
    blue: "#60a5fa",
    purple: "#a78bfa",
    green: "#34d399",
    orange: "#fb923c",
    pink: "#f472b6",
    text: "#cbd5e1",
    grid: "rgba(148, 163, 184, 0.16)"
  };

  const stageColors = [
    palette.cyan,
    palette.blue,
    palette.purple,
    palette.green,
    palette.orange
  ];

  const chartInstances = {};

  let currentRecords = Array.isArray(window.data)
    ? window.data
    : [];

  const trendSelect = document.getElementById("trendParameter");
  const comparisonSelect = document.getElementById("comparisonParameter");


  // -----------------------------------------
  // Shared chart settings
  // -----------------------------------------

  function getCommonOptions() {
    return {
      responsive: true,
      maintainAspectRatio: false,

      interaction: {
        intersect: false,
        mode: "index"
      },

      plugins: {
        legend: {
          labels: {
            color: palette.text,
            usePointStyle: true,
            padding: 18
          }
        },

        tooltip: {
          backgroundColor: "#101f33",
          titleColor: "#ffffff",
          bodyColor: "#cbd5e1",
          borderColor: "rgba(53, 214, 232, 0.35)",
          borderWidth: 1,
          padding: 12
        }
      },

      scales: {
        x: {
          ticks: {
            color: palette.text,
            maxRotation: 45,
            minRotation: 0
          },
          grid: {
            color: palette.grid
          }
        },

        y: {
          ticks: {
            color: palette.text
          },
          grid: {
            color: palette.grid
          }
        }
      }
    };
  }


  // -----------------------------------------
  // Helpers
  // -----------------------------------------

  function getValidRecords(records, key) {
    return records.filter(function (record) {
      return (
        record &&
        record[key] !== null &&
        record[key] !== undefined &&
        record[key] !== "" &&
        Number.isFinite(Number(record[key]))
      );
    });
  }


  function getParameterName(key) {
    return parameters[key] || {
      label: key,
      unit: ""
    };
  }


  function getParameterValue(record, key) {
    const value = Number(record[key]);
    return Number.isFinite(value) ? value : null;
  }


  function getStepCounts(records) {
    return processSteps.map(function (step) {
      return records.filter(function (record) {
        return record.process_step === step;
      }).length;
    });
  }


  function getStageAverages(records, key) {
    return processSteps.map(function (step) {

      const values = getValidRecords(
        records.filter(function (record) {
          return record.process_step === step;
        }),
        key
      ).map(function (record) {
        return getParameterValue(record, key);
      });

      if (values.length === 0) {
        return null;
      }

      const total = values.reduce(function (sum, value) {
        return sum + value;
      }, 0);

      return total / values.length;
    });
  }


  // -----------------------------------------
  // Chart 1: Process Distribution
  // -----------------------------------------

  function createProcessChart() {
    const canvas = document.getElementById("processChart");

    if (!canvas) return;

    chartInstances.process = new Chart(canvas, {
      type: "bar",

      data: {
        labels: processSteps,

        datasets: [{
          label: "Number of Wafers",
          data: getStepCounts(currentRecords),
          backgroundColor: stageColors.map(function (color) {
            return color + "BB";
          }),
          borderColor: stageColors,
          borderWidth: 1.5,
          borderRadius: 8,
          maxBarThickness: 65
        }]
      },

      options: {
        ...getCommonOptions(),

        plugins: {
          ...getCommonOptions().plugins,
          legend: {
            display: false
          }
        },

        scales: {
          ...getCommonOptions().scales,

          y: {
            ...getCommonOptions().scales.y,
            beginAtZero: true,
            ticks: {
              ...getCommonOptions().scales.y.ticks,
              precision: 0
            },
            title: {
              display: true,
              text: "Number of Wafers",
              color: palette.text
            }
          },

          x: {
            ...getCommonOptions().scales.x,
            title: {
              display: true,
              text: "Manufacturing Stage",
              color: palette.text
            }
          }
        }
      }
    });
  }


  // -----------------------------------------
  // Chart 2: Parameter Variation
  // -----------------------------------------

  function updateTrendChart() {
    const canvas = document.getElementById("parameterTrendChart");

    if (!canvas) return;

    const key = trendSelect
      ? trendSelect.value
      : "temperature_c";

    const parameter = getParameterName(key);

    const validRecords = getValidRecords(currentRecords, key);

    const labels = validRecords.map(function (record, index) {
      return record.wafer_id || "Record " + (index + 1);
    });

    const values = validRecords.map(function (record) {
      return getParameterValue(record, key);
    });

    if (chartInstances.trend) {
      chartInstances.trend.data.labels = labels;
      chartInstances.trend.data.datasets[0].label =
        parameter.label + " (" + parameter.unit + ")";
      chartInstances.trend.data.datasets[0].data = values;
      chartInstances.trend.update();
      return;
    }

    chartInstances.trend = new Chart(canvas, {
      type: "line",

      data: {
        labels: labels,

        datasets: [{
          label: parameter.label + " (" + parameter.unit + ")",
          data: values,
          borderColor: palette.cyan,
          backgroundColor: "rgba(53, 214, 232, 0.12)",
          borderWidth: 2.5,
          pointRadius: 2.5,
          pointHoverRadius: 6,
          pointBackgroundColor: palette.cyan,
          tension: 0.3,
          fill: true
        }]
      },

      options: {
        ...getCommonOptions(),

        plugins: {
          ...getCommonOptions().plugins,
          legend: {
            display: true
          }
        },

        scales: {
          ...getCommonOptions().scales,

          x: {
            ...getCommonOptions().scales.x,
            title: {
              display: true,
              text: "Wafer ID",
              color: palette.text
            }
          },

          y: {
            ...getCommonOptions().scales.y,
            title: {
              display: true,
              text: parameter.label + " (" + parameter.unit + ")",
              color: palette.text
            }
          }
        }
      }
    });
  }


  // -----------------------------------------
  // Chart 3: Parameter Correlation
  // Temperature vs Etch Rate
  // -----------------------------------------

  function updateCorrelationChart() {
    const canvas = document.getElementById("correlationChart");

    if (!canvas) return;

    const validRecords = currentRecords.filter(function (record) {
      return (
        record &&
        Number.isFinite(Number(record.temperature_c)) &&
        Number.isFinite(Number(record.etch_rate_nm_min))
      );
    });

    const points = validRecords.map(function (record) {
      return {
        x: Number(record.temperature_c),
        y: Number(record.etch_rate_nm_min)
      };
    });

    if (chartInstances.correlation) {
      chartInstances.correlation.data.datasets[0].data = points;
      chartInstances.correlation.update();
      return;
    }

    chartInstances.correlation = new Chart(canvas, {
      type: "scatter",

      data: {
        datasets: [{
          label: "Wafer Records",
          data: points,
          backgroundColor: "rgba(167, 139, 250, 0.75)",
          borderColor: palette.purple,
          borderWidth: 1,
          pointRadius: 5,
          pointHoverRadius: 8
        }]
      },

      options: {
        ...getCommonOptions(),

        plugins: {
          ...getCommonOptions().plugins,
          legend: {
            display: true
          }
        },

        scales: {
          x: {
            ...getCommonOptions().scales.x,
            title: {
              display: true,
              text: "Temperature (°C)",
              color: palette.text
            }
          },

          y: {
            ...getCommonOptions().scales.y,
            title: {
              display: true,
              text: "Etch Rate (nm/min)",
              color: palette.text
            }
          }
        }
      }
    });
  }


  // -----------------------------------------
  // Chart 4: Process Stage Comparison
  // -----------------------------------------

  function updateComparisonChart() {
    const canvas = document.getElementById("comparisonChart");

    if (!canvas) return;

    const key = comparisonSelect
      ? comparisonSelect.value
      : "temperature_c";

    const parameter = getParameterName(key);
    const averages = getStageAverages(currentRecords, key);

    if (chartInstances.comparison) {
      chartInstances.comparison.data.datasets[0].label =
        "Average " + parameter.label + " (" + parameter.unit + ")";

      chartInstances.comparison.data.datasets[0].data = averages;

      chartInstances.comparison.options.scales.y.title.text =
        "Average " + parameter.label + " (" + parameter.unit + ")";

      chartInstances.comparison.update();
      return;
    }

    chartInstances.comparison = new Chart(canvas, {
      type: "bar",

      data: {
        labels: processSteps,

        datasets: [{
          label: "Average " + parameter.label + " (" + parameter.unit + ")",
          data: averages,
          backgroundColor: stageColors.map(function (color) {
            return color + "BB";
          }),
          borderColor: stageColors,
          borderWidth: 1.5,
          borderRadius: 8,
          maxBarThickness: 65
        }]
      },

      options: {
        ...getCommonOptions(),

        plugins: {
          ...getCommonOptions().plugins,
          legend: {
            display: false
          }
        },

        scales: {
          ...getCommonOptions().scales,

          y: {
            ...getCommonOptions().scales.y,
            title: {
              display: true,
              text: "Average " + parameter.label + " (" + parameter.unit + ")",
              color: palette.text
            }
          },

          x: {
            ...getCommonOptions().scales.x,
            title: {
              display: true,
              text: "Manufacturing Stage",
              color: palette.text
            }
          }
        }
      }
    });
  }


  // -----------------------------------------
  // Update all charts
  // -----------------------------------------

  function updateAllCharts(records) {
    if (!Array.isArray(records)) return;

    currentRecords = records;

    if (chartInstances.process) {
      chartInstances.process.data.datasets[0].data =
        getStepCounts(currentRecords);

      chartInstances.process.update();
    }

    updateTrendChart();
    updateCorrelationChart();
    updateComparisonChart();
  }


  // -----------------------------------------
  // Initialize
  // -----------------------------------------

  if (typeof Chart === "undefined") {
    console.error("Chart.js library is not available.");
    return;
  }

  createProcessChart();
  updateTrendChart();
  updateCorrelationChart();
  updateComparisonChart();


  // Parameter selectors
  if (trendSelect) {
    trendSelect.addEventListener("change", updateTrendChart);
  }

  if (comparisonSelect) {
    comparisonSelect.addEventListener("change", updateComparisonChart);
  }


  // Listen for search and filter updates
  document.addEventListener("dashboardDataFiltered", function (event) {

    if (
      event.detail &&
      Array.isArray(event.detail.records)
    ) {
      updateAllCharts(event.detail.records);
    }

  });

});
