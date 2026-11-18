
/* =========================================
   QUALITY DEFECT DATA DASHBOARD
   Theme Manager
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const themeButton = document.getElementById("themeToggle");

  if (!themeButton) {
    console.error("Theme toggle button not found.");
    return;
  }

  // Read the previously saved theme
  const savedTheme = localStorage.getItem("dashboard-theme");

  // Use saved theme or default to light
  const initialTheme =
    savedTheme === "dark" ? "dark" : "light";

  // Apply theme to the page
  function applyTheme(theme) {

    document.body.setAttribute("data-theme", theme);

    if (theme === "dark") {
      themeButton.textContent = "☀️ Light Mode";
      themeButton.setAttribute(
        "aria-label",
        "Switch to light mode"
      );
    } else {
      themeButton.textContent = "🌙 Dark Mode";
      themeButton.setAttribute(
        "aria-label",
        "Switch to dark mode"
      );
    }

    // Save selected theme
    localStorage.setItem("dashboard-theme", theme);
  }

  // Apply initial theme
  applyTheme(initialTheme);

  // Toggle theme on button click
  themeButton.addEventListener("click", function () {

    const currentTheme =
      document.body.getAttribute("data-theme");

    const newTheme =
      currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);

  });

});
