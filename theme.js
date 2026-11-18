
/* =========================================
   QUALITY DEFECT DATA DASHBOARD
   Minimal Theme Manager
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const themeButton =
    document.getElementById("themeToggle");

  const themeIcon =
    document.getElementById("themeIcon");


  // Check required HTML elements
  if (!themeButton || !themeIcon) {

    console.error(
      "Theme toggle elements not found."
    );

    return;
  }


  // Read saved theme preference
  let savedTheme = null;

  try {
    savedTheme = localStorage.getItem("dashboard-theme");
  } catch (error) {
    console.warn("Theme preference could not be read.", error);
  }


  // Set initial theme
  const initialTheme =
    savedTheme === "dark" ? "dark" : "light";


  // Apply theme
  function applyTheme(theme) {

    document.body.setAttribute("data-theme", theme);


    if (theme === "dark") {

      themeIcon.textContent = "☀";

      themeButton.setAttribute(
        "aria-label",
        "Switch to light mode"
      );

      themeButton.title = "Switch to light mode";

    } else {

      themeIcon.textContent = "☾";

      themeButton.setAttribute(
        "aria-label",
        "Switch to dark mode"
      );

      themeButton.title = "Switch to dark mode";
    }


    // Save selected theme
    try {

      localStorage.setItem(
        "dashboard-theme",
        theme
      );

    } catch (error) {

      console.warn(
        "Theme preference could not be saved.",
        error
      );

    }

  }


  // Apply initial theme
  applyTheme(initialTheme);


  // Handle button click
  themeButton.addEventListener("click", function () {

    const currentTheme =
      document.body.getAttribute("data-theme");

    const newTheme =
      currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);

  });

});
