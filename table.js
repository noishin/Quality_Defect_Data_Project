// =========================================================
// TABLE.JS - Renders the data table and handles live search
// =========================================================

// Wait for the HTML document to fully load before running the code
document.addEventListener("DOMContentLoaded", function () {
  // Grab the search input element from the HTML
  var searchInput = document.getElementById("searchBox");
  
  // Grab the container element where the table will be injected
  var tableContainer = document.getElementById("tableContainer");

  // Grab the element showing the count of visible records
  var recordCount = document.getElementById("recordCount");

  // Helper function to return a clean CSS class name for each process step badge
  function getBadgeClass(step) {
    if (!step) return "";
    var lower = step.toLowerCase();
    if (lower.indexOf("deposition") !== -1) return "step-deposition";
    if (lower.indexOf("etching") !== -1) return "step-etching";
    if (lower.indexOf("lithography") !== -1) return "step-lithography";
    if (lower.indexOf("oxidation") !== -1) return "step-oxidation";
    if (lower.indexOf("cmp") !== -1) return "step-cmp";
    return "";
  }

  // Function to render the table rows based on a given array of records
  function renderTable(itemsToDisplay) {
    // If no records match the search query, display a friendly message
    if (!itemsToDisplay || itemsToDisplay.length === 0) {
      tableContainer.innerHTML = '<div class="no-results">No wafer records match your search criteria.</div>';
      if (recordCount) {
        recordCount.textContent = "Showing 0 of " + (window.data ? window.data.length : 0) + " records";
      }
      return;
    }

    // Build the table header and body using HTML template strings
    var html = '<div class="table-responsive">';
    html += '<table class="data-table">';
    html += '<thead>';
    html += '<tr>';
    html += '<th>Wafer ID</th>';
    html += '<th>Pressure (Torr)</th>';
    html += '<th>Gas Flow (sccm)</th>';
    html += '<th>Etch Rate (nm/min)</th>';
    html += '<th>Voltage (V)</th>';
    html += '<th>Current (mA)</th>';
    html += '<th>Process Step</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';

    // Loop through each item in the filtered list and build table rows
    for (var i = 0; i < itemsToDisplay.length; i++) {
      var item = itemsToDisplay[i];

      // Support either water_id or wafer_id keys seamlessly
      var id = item.water_id !== undefined ? item.water_id : item.wafer_id;
      var pressure = item.pressure_torr !== undefined ? item.pressure_torr : "-";
      var gasFlow = item.gas_flow_sccm !== undefined ? item.gas_flow_sccm : "-";
      var etchRate = item.etch_rate_nm_min !== undefined ? item.etch_rate_nm_min : "-";
      var voltage = item.voltage_v !== undefined ? item.voltage_v : "-";
      var current = item.current_ma !== undefined ? item.current_ma : "-";
      var step = item.process_step || "-";
      var badgeClass = getBadgeClass(step);

      html += '<tr>';
      html += '<td class="code-cell"><strong>' + id + '</strong></td>';
      html += '<td class="numeric">' + pressure + '</td>';
      html += '<td class="numeric">' + gasFlow + '</td>';
      html += '<td class="numeric">' + etchRate + '</td>';
      html += '<td class="numeric">' + voltage + '</td>';
      html += '<td class="numeric">' + current + '</td>';
      html += '<td><span class="step-badge ' + badgeClass + '">' + step + '</span></td>';
      html += '</tr>';
    }

    html += '</tbody>';
    html += '</table>';
    html += '</div>';

    // Insert the constructed HTML into the table container
    tableContainer.innerHTML = html;

    // Update the record count label
    if (recordCount) {
      recordCount.textContent = "Showing " + itemsToDisplay.length + " of " + (window.data ? window.data.length : 0) + " records";
    }
  }

  // Function to filter records based on the user's search text
  function filterRows() {
    // If the global data array is not available, stop
    if (!window.data || !Array.isArray(window.data)) {
      tableContainer.innerHTML = '<div class="no-results">No dataset loaded. Check data.js.</div>';
      return;
    }

    // Get the lowercase query string without extra leading/trailing whitespace
    var query = searchInput ? searchInput.value.toLowerCase().trim() : "";

    // If search box is empty, display all records
    if (!query) {
      renderTable(window.data);
      return;
    }

    // Filter items where at least one property value includes the search query
    var filtered = window.data.filter(function (item) {
      var id = (item.water_id !== undefined ? item.water_id : item.wafer_id) || "";
      var pressure = item.pressure_torr !== undefined ? item.pressure_torr.toString() : "";
      var gasFlow = item.gas_flow_sccm !== undefined ? item.gas_flow_sccm.toString() : "";
      var etchRate = item.etch_rate_nm_min !== undefined ? item.etch_rate_nm_min.toString() : "";
      var voltage = item.voltage_v !== undefined ? item.voltage_v.toString() : "";
      var current = item.current_ma !== undefined ? item.current_ma.toString() : "";
      var step = item.process_step ? item.process_step.toString() : "";

      // Check if any of the values contain the query
      return (
        id.toString().toLowerCase().indexOf(query) !== -1 ||
        pressure.toLowerCase().indexOf(query) !== -1 ||
        gasFlow.toLowerCase().indexOf(query) !== -1 ||
        etchRate.toLowerCase().indexOf(query) !== -1 ||
        voltage.toLowerCase().indexOf(query) !== -1 ||
        current.toLowerCase().indexOf(query) !== -1 ||
        step.toLowerCase().indexOf(query) !== -1
      );
    });

    // Render the filtered rows
    renderTable(filtered);
  }

  // Listen for typing events in the search input for live filtering
  if (searchInput) {
    searchInput.addEventListener("input", filterRows);
  }

  // Initial render on page load
  filterRows();
});
