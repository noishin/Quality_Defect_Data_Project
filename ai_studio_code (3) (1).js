// =========================================================
// CHARTS.JS - Generates the wafer process step distribution chart
// =========================================================

// Wait for the HTML document to fully load before initializing the chart
document.addEventListener("DOMContentLoaded", function () {
  // Grab the canvas element from the HTML page
  var canvas = document.getElementById("processChart");

  // Ensure canvas and Chart library exist before proceeding
  if (!canvas || typeof Chart === "undefined") {
    console.error("Canvas element or Chart.js library is not available.");
    return;
  }

  // Get the 2D drawing context of the canvas
  var ctx = canvas.getContext("2d");

  // The 5 target process steps required for the semiconductor analysis
  var processSteps = ["Deposition", "Etching", "Lithography", "Oxidation", "CMP"];

  // Initialize an object to tally wafer counts for each step
  var stepCounts = {
    Deposition: 0,
    Etching: 0,
    Lithography: 0,
    Oxidation: 0,
    CMP: 0
  };

  // Count wafers per step using the global "data" array
  if (window.data && Array.isArray(window.data)) {
    for (var i = 0; i < window.data.length; i++) {
      var item = window.data[i];
      var step = item.process_step;

      // Increment count if the step matches one of the known process steps
      if (step && stepCounts.hasOwnProperty(step)) {
        stepCounts[step] = stepCounts[step] + 1;
      }
    }
  }

  // Extract the count numbers in the same order as the labels
  var countsData = processSteps.map(function (step) {
    return stepCounts[step];
  });

  // Modern color palette for the 5 process steps
  var backgroundColors = [
    "rgba(37, 99, 235, 0.75)",   // Deposition - Blue
    "rgba(220, 38, 38, 0.75)",   // Etching - Red
    "rgba(217, 119, 6, 0.75)",   // Lithography - Amber
    "rgba(22, 163, 74, 0.75)",   // Oxidation - Green
    "rgba(147, 51, 234, 0.75)"   // CMP - Purple
  ];

  var borderColors = [
    "#1d4ed8",
    "#b91c1c",
    "#b45309",
    "#15803d",
    "#7e22ce"
  ];

  // Create the Bar Chart using Chart.js
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: processSteps,
      datasets: [
        {
          label: "Number of Wafers",
          data: countsData,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1.5,
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false // Hide legend since each bar label is self-explanatory
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return " " + context.raw + " wafer" + (context.raw === 1 ? "" : "s");
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1, // Only show whole integer numbers for wafer count
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
});