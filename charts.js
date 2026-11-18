
/* =========================================
   QUALITY DEFECT DATA DASHBOARD
   Dynamic Process Step Distribution Chart
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const canvas = document.getElementById("processChart");

  if (!canvas || typeof Chart === "undefined") {
    console.error("Canvas element or Chart.js library is not available.");
    return;
  }

  const ctx = canvas.getContext("2d");

  const processSteps = [
    "Deposition",
    "Etching",
    "Lithography",
    "Oxidation",
    "CMP"
  ];

  const backgroundColors = [
    "rgba(37, 99, 235, 0.75)",
    "rgba(220, 38, 38, 0.75)",
    "rgba(217, 119, 6, 0.75)",
    "rgba(22, 163, 74, 0.75)",
    "rgba(147, 51, 234, 0.75)"
  ];

  const borderColors = [
    "#1d4ed8",
    "#b91c1c",
    "#b45309",
    "#15803d",
    "#7e22ce"
  ];


  // Calculate wafer counts for the supplied records
  function calculateStepCounts(records) {

    const counts = {};

    processSteps.forEach(function (step) {
      counts[step] = 0;
    });

    records.forEach(function (item) {
      const step = item.process_step;

      if (
        step &&
        Object.prototype.hasOwnProperty.call(counts, step)
      ) {
        counts[step]++;
      }
    });

    return processSteps.map(function (step) {
      return counts[step];
    });
  }


  // Create the chart
  const processChart = new Chart(ctx, {
    type: "bar",

    data: {
      labels: processSteps,

      datasets: [{
        label: "Number of Wafers",
        data: calculateStepCounts(
          Array.isArray(window.data) ? window.data : []
        ),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1.5,
        borderRadius: 6
      }]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false
        },

        tooltip: {
          callbacks: {
            label: function (context) {
              const count = context.raw;

              return " " + count +
                " wafer" + (count === 1 ? "" : "s");
            }
          }
        }
      },

      scales: {
        y: {
          beginAtZero: true,

          ticks: {
            stepSize: 1,
            color: "#64748b"
          },

          grid: {
            color: "#e2e8f0"
          },

          title: {
            display: true,
            text: "Wafer Count",
            color: "#475569",
            font: {
              weight: "bold"
            }
          }
        },

        x: {
          ticks: {
            color: "#475569",
            font: {
              weight: "600"
            }
          },

          grid: {
            display: false
          },

          title: {
            display: true,
            text: "Process Step",
            color: "#475569",
            font: {
              weight: "bold"
            }
          }
        }
      }
    }
  });


  // Update chart whenever the filters change
  document.addEventListener(
    "dashboardDataFiltered",
    function (event) {

      const filteredRecords = event.detail.records;

      if (!Array.isArray(filteredRecords)) {
        return;
      }

      processChart.data.datasets[0].data =
        calculateStepCounts(filteredRecords);

      processChart.update();

    }
  );

});
