
<!-- ====================================== -->
<!-- PROJECT HEADER -->
<!-- ====================================== -->

<!-- Top Wave Banner -->
<p align="center">
  <img
    src="https://capsule-render.vercel.app/api?type=waving&color=0:0F766E,50:115E59,100:172554&height=220&section=header&text=Quality%20Defect%20Data%20Dashboard&fontSize=34&fontColor=FFFFFF&fontAlignY=38&desc=Semiconductor%20Wafer%20Quality%20%26%20Process%20Analysis&descSize=16&descAlignY=60&descColor=E2E8F0"
    width="100%"
    alt="Quality Defect Data Dashboard Header"
  />
</p>

<!-- Project Introduction -->
<p align="center">
  <img
    src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=19&duration=3000&pause=1000&color=0D9488&center=true&vCenter=true&width=700&lines=Explore+Semiconductor+Data;Monitor+Manufacturing+Processes;Detect+Statistical+Anomalies;Turn+Data+into+Insights"
    alt="Project Introduction"
  />
</p>

<br>

<!-- Actual Dashboard Preview -->
<h2 align="center">Dashboard Preview</h2>

<p align="center">
  <a href="https://noishin.github.io/Quality_Defect_Data_Project/">
    <img
      src="https://raw.githubusercontent.com/noishin/Quality_Defect_Data_Project/main/dashboard-preview.png"
      width="100%"
      alt="Semiconductor Wafer Quality Dashboard Preview"
    />
  </a>
</p>

<p align="center">
  <i>Interactive Semiconductor Wafer Quality &amp; Process Analysis Dashboard</i>
</p>

<br>

<!-- Project Links -->
<p align="center">
  <a href="https://noishin.github.io/Quality_Defect_Data_Project/">
    <img
      src="https://img.shields.io/badge/Explore-Live_Dashboard-0F766E?style=for-the-badge&logo=googlechrome&logoColor=white"
      alt="Live Dashboard"
    />
  </a>

  <a href="https://github.com/noishin/Quality_Defect_Data_Project">
    <img
      src="https://img.shields.io/badge/View-GitHub_Repository-172554?style=for-the-badge&logo=github&logoColor=white"
      alt="GitHub Repository"
    />
  </a>

  <a href="https://www.kaggle.com/datasets/meruvakodandasuraj/semiconductor-wafer-defect-classification-dataset/data">
    <img
      src="https://img.shields.io/badge/Explore-Dataset-20A4F3?style=for-the-badge&logo=kaggle&logoColor=white"
      alt="Kaggle Dataset"
    />
  </a>
</p>

<br>

<!-- Technologies -->
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chart.js&logoColor=white" alt="Chart.js" />
  <img src="https://img.shields.io/badge/Data-Analysis-0F766E?style=flat-square" alt="Data Analysis" />
  <img src="https://img.shields.io/badge/Statistical-Analysis-172554?style=flat-square" alt="Statistical Analysis" />
  <img src="https://img.shields.io/badge/Team-4_Members-6D28D9?style=flat-square" alt="Team" />
</p>

<p align="center">
  <b>Data Analysis · Statistical Monitoring · Anomaly Detection · Interactive Visualization</b>
</p>

---

<!-- END OF PROJECT HEADER -->


# 📑 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Project Objectives](#2-project-objectives)
3. [Dashboard Overview](#3-dashboard-overview)
4. [Key Performance Indicators](#4-key-performance-indicators)
5. [Dashboard Features](#5-dashboard-features)
6. [Statistical Methodology](#6-statistical-methodology)
7. [Dataset](#7-dataset)
8. [Technologies and Tools](#8-technologies-and-tools)
9. [Project Structure](#9-project-structure)
10. [Access and Installation](#10-access-and-installation)
11. [Team Members](#11-team-members)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Additional Project Files](#13-additional-project-files)
14. [Project Scope and Limitations](#14-project-scope-and-limitations)
15. [Academic Context](#15-academic-context)

---

# 1. Project Overview

**Quality Defect Data Dashboard** is an interactive web-based data analysis and visualization project focused on semiconductor wafer manufacturing.

Semiconductor manufacturing involves multiple production stages, each with specific operating parameters. Monitoring these parameters helps provide a better understanding of manufacturing processes, identify variations, and detect unusual observations that may require further investigation.

This project transforms semiconductor wafer records into an interactive analytical dashboard. It combines key performance indicators (KPIs), statistical analysis, data visualization, process-stage comparisons, and individual wafer records in one interface.

The dashboard enables users to explore manufacturing data, examine relationships between process variables, compare production stages, and investigate potential statistical anomalies.

The application is developed using HTML, CSS, and JavaScript, with Chart.js for data visualization.

# 2. Project Objectives

The main objectives of this project are:

- Explore and organize semiconductor wafer manufacturing data.
- Monitor important manufacturing indicators through a KPI-based dashboard.
- Analyze process parameters such as temperature, pressure, gas flow, and etch rate.
- Visualize wafer distribution across manufacturing stages.
- Examine variations in manufacturing parameters.
- Investigate relationships between selected process variables.
- Compare process characteristics across different manufacturing stages.
- Identify statistically unusual observations using the Interquartile Range (IQR) method.
- Provide interactive tools for searching and filtering wafer records.
- Present analytical results through clear and accessible visualizations.
- Support exploratory quality monitoring through statistical indicators.

# 3. Dashboard Overview

The dashboard provides a centralized interface for exploring semiconductor manufacturing data.

Its main sections include:

- **Image Slider:** A four-image slideshow introducing semiconductor technology and manufacturing.
- **KPI Cards:** A summary of important dataset indicators.
- **Analytical Charts:** Visualizations of process distribution, parameter variations, correlations, and stage comparisons.
- **Process Quality Monitoring:** Statistical screening of process parameters and identification of potential anomalies.
- **Advanced Data Insights:** Live summary statistics and a Pearson correlation matrix.
- **Process Stage Intelligence:** A comparative overview of manufacturing stages.
- **Quality Risk Detection:** Stage-level statistical screening and risk categorization.
- **Wafer Records Table:** A searchable and filterable view of individual wafer records.
- **CSV Export:** An option to download filtered manufacturing records.
- **Theme Control:** A toggle for switching between light and dark modes.

# 4. Key Performance Indicators (KPIs)

The dashboard presents six primary indicators.

| KPI | Description |
|---|---|
| **Total Wafers** | Total number of wafer records |
| **Process Stages** | Number of unique manufacturing stages |
| **Average Temperature** | Average process temperature in °C |
| **Average Pressure** | Average chamber pressure in Torr |
| **Average Etch Rate** | Average etching rate in nm/min |
| **Data Completeness** | Percentage of valid numeric parameter values |

These indicators provide an initial overview of the dataset and help users understand its general characteristics before exploring individual records and analytical results.

# 5. Dashboard Features

## 5.1 Process Distribution

Displays the distribution of wafer records across the manufacturing stages.

This visualization helps users understand how records are distributed among the different stages of the production process.

## 5.2 Parameter Variation

Allows users to select and examine different manufacturing parameters across wafer records.

Available parameters include:

- Temperature
- Pressure
- Gas Flow
- Etch Rate
- Voltage
- Current

The visualization helps identify changes and unusual fluctuations in the selected measurements.

## 5.3 Parameter Correlation

Provides a scatter plot for exploring the relationship between **temperature and etch rate**.

The dashboard also includes a Pearson correlation matrix for examining linear relationships between six numeric process parameters:

- Temperature
- Pressure
- Gas Flow
- Etch Rate
- Voltage
- Current

These analyses support exploratory investigation of relationships between manufacturing variables.

## 5.4 Process Stage Comparison

Compares selected parameter values across different manufacturing stages.

Users can select a parameter and examine how its average value differs between:

1. Deposition
2. Lithography
3. Etching
4. Oxidation
5. CMP

## 5.5 Process Quality Monitoring

The Process Quality Monitoring section uses the **Interquartile Range (IQR)** method to identify statistically unusual measurements.

The section provides:

- Total number of detected statistical outliers
- Number of parameters analyzed
- Parameter-level statistical limits
- A detailed table of unusual observations
- Filtering of anomaly records by parameter

Each flagged record can be examined through its wafer ID, process stage, observed value, statistical limits, and deviation direction.

**Important:** Detected statistical outliers are not automatically confirmed manufacturing defects. They are observations that may require further investigation.

## 5.6 Advanced Data Insights

This module provides additional statistical information about the currently selected records.

Its features include:

- Number of selected wafers
- Average temperature
- Average etch rate
- Average pressure
- Data completeness
- Temperature standard deviation
- Pearson correlation matrix

The statistics are updated when the user changes the selected records through the dashboard filters.

## 5.7 Process Stage Intelligence

Provides a comparative analysis of manufacturing stages.

The module examines:

- Number of wafer records in each stage
- Average temperature
- Average pressure
- Average etch rate
- Potential outlier counts

It also generates an automatic summary of selected process-stage indicators.

The comparisons help users explore differences between manufacturing stages using the currently selected records.

## 5.8 Quality Risk Detection

The dashboard includes an IQR-based statistical screening module that examines process parameters and summarizes potential quality risks at the manufacturing-stage level.

The module:

- Screens selected process measurements for statistical outliers.
- Counts flagged wafer records in each process stage.
- Calculates the proportion of flagged records within each stage.
- Assigns screening categories based on the flagged-record rate.
- Generates an automatic risk report.
- Provides an option to copy the report.

The screening categories are:

| Category | Flagged-record rate |
|---|---:|
| Low | Below 5% |
| Moderate | 5% to below 15% |
| Elevated | 15% or higher |

These categories are statistical screening indicators, not confirmed defect classifications or predictions of actual product failure.

## 5.9 Wafer Quality Records

Displays individual manufacturing records in a structured table.

The table includes:

- Wafer ID
- Pressure
- Gas Flow
- Etch Rate
- Voltage
- Current
- Process Step

Users can search and filter the available records to focus on specific wafers or manufacturing stages.

## 5.10 Interactive Data Filtering

The dashboard supports data exploration through search and process-stage filtering.

When the displayed records are filtered, related dashboard components can update to reflect the selected records.

This allows users to investigate subsets of the dataset instead of relying only on overall statistics.

## 5.11 CSV Export

The dashboard provides an option to export filtered wafer records as a CSV file.

The exported file includes:

- Wafer ID
- Temperature
- Pressure
- Gas Flow
- Etch Rate
- Voltage
- Current
- Process Step

This feature allows users to save selected data for further analysis in spreadsheet applications or other data-analysis tools.

## 5.12 Dark and Light Modes

Users can switch between light and dark themes.

The selected theme is saved in the browser's local storage, allowing the dashboard to retain the preference when revisited in the same browser.

## 5.13 Image Slideshow

The dashboard includes a four-slide image carousel featuring semiconductor-related visuals.

The slideshow supports:

- Automatic slide transitions
- Previous and next navigation
- Slide indicators
- Current-slide navigation

The images introduce different aspects of semiconductor technology, wafer production, and quality inspection.

# 6. Statistical Methodology

The project uses statistical techniques to examine manufacturing data and identify unusual observations.

## 6.1 Interquartile Range (IQR)

The Interquartile Range method is used to identify observations that fall outside the expected statistical range of a parameter.

The interquartile range is calculated as:

\[
IQR = Q_3 - Q_1
\]

Where:

- \(Q_1\): First quartile (25th percentile)
- \(Q_3\): Third quartile (75th percentile)

The lower and upper boundaries are calculated as:

\[
Lower\ Bound = Q_1 - 1.5(IQR)
\]

\[
Upper\ Bound = Q_3 + 1.5(IQR)
\]

An observation is flagged as a potential statistical outlier when:

\[
x < Lower\ Bound
\]

or

\[
x > Upper\ Bound
\]

The method is applied to six process parameters:

- Temperature
- Pressure
- Gas Flow
- Etch Rate
- Voltage
- Current

The resulting observations are presented for further investigation.

## 6.2 Pearson Correlation

The project uses Pearson correlation to examine linear relationships between numeric process parameters.

The Pearson correlation coefficient is calculated as:

\[
r_{xy} =
\frac{\sum_{i=1}^{n}(x_i-\bar{x})(y_i-\bar{y})}
{\sqrt{\sum_{i=1}^{n}(x_i-\bar{x})^2}
\sqrt{\sum_{i=1}^{n}(y_i-\bar{y})^2}}
\]

Where:

- \(x_i\) and \(y_i\): Individual observations of two variables
- \(\bar{x}\) and \(\bar{y}\): Mean values of the variables
- \(n\): Number of observations

The coefficient ranges from -1 to +1:

| Correlation | General interpretation |
|---|---|
| Close to +1 | Strong positive linear relationship |
| Close to 0 | Weak or no linear relationship |
| Close to -1 | Strong negative linear relationship |

Correlation indicates association between variables; it does not establish causation.

## 6.3 Process-Level Risk Screening

The Quality Risk Detection module summarizes the percentage of records flagged by the IQR method within each manufacturing stage.

The screening rate is calculated as:

\[
Flagged\ Rate =
\frac{Flagged\ Wafers}{Total\ Wafers\ in\ Stage}
\times 100
\]

The resulting percentage is used to assign the Low, Moderate, or Elevated screening category.

These categories help organize statistical findings and should not be interpreted as verified industrial risk levels.

# 7. Dataset

The project uses the **Semiconductor Wafer Defect Classification Dataset**, available on Kaggle.

<div align="center">

<a href="https://www.kaggle.com/datasets/meruvakodandasuraj/semiconductor-wafer-defect-classification-dataset/data">
<img src="https://img.shields.io/badge/OPEN_DATASET_ON-KAGGLE-20A4F3?style=for-the-badge&logo=kaggle&logoColor=white" alt="Open Dataset on Kaggle" />
</a>

</div>

## 7.1 Dataset Information

| Attribute | Description |
|---|---|
| Dataset Name | Semiconductor Wafer Defect Classification Dataset |
| Source | Kaggle |
| Domain | Semiconductor Manufacturing |
| Application | Manufacturing Data Analysis |
| Records in Project Data File | 199 |
| Manufacturing Stages | 5 |

## 7.2 Manufacturing Stages

The project dataset includes the following manufacturing stages:

1. Deposition
2. Lithography
3. Etching
4. Oxidation
5. CMP

## 7.3 Dataset Features

| Feature | Description | Unit |
|---|---|---|
| `wafer_id` | Unique wafer identifier | — |
| `temperature_c` | Manufacturing process temperature | °C |
| `pressure_torr` | Process chamber pressure | Torr |
| `gas_flow_sccm` | Gas flow rate | SCCM |
| `etch_rate_nm_min` | Material etching rate | nm/min |
| `voltage_v` | Electrical voltage | V |
| `current_ma` | Electrical current | mA |
| `process_step` | Manufacturing process stage | — |

The dataset is incorporated into the project through `data.js` and serves as the basis for dashboard calculations, statistical analysis, and visualizations.

**Original Dataset:** [View on Kaggle](https://www.kaggle.com/datasets/meruvakodandasuraj/semiconductor-wafer-defect-classification-dataset/data)

# 8. Technologies and Tools

| Technology | Purpose |
|---|---|
| **HTML5** | Structuring the dashboard and its components |
| **CSS3** | Styling, layout, and visual presentation |
| **JavaScript** | Data handling, calculations, filtering, and interactive functionality |
| **Chart.js** | Creating data visualizations |
| **Git** | Version control |
| **GitHub** | Source code hosting and team collaboration |
| **GitHub Pages** | Deploying and publishing the dashboard |
| **Kaggle** | Dataset source |

## Development Approach

The project follows a browser-based implementation approach.

The dataset is stored in a JavaScript file and processed within the application. JavaScript handles dashboard calculations, filtering, statistical analysis, and interactive features.

Chart.js is used to display graphical representations of the manufacturing data.

The dashboard does not require a separate backend server for its current functionality. Chart.js is loaded through a CDN, so an internet connection is required when using the application if the library is not otherwise available locally.

# 9. Project Structure

The repository contains the following main files:

```text
Quality_Defect_Data_Project/
│
├── index.html
├── style.css
├── data.js
│
├── dashboard.js
├── ai_studio_code(1).js
├── charts.js
├── theme.js
│
├── quality-analysis.js
├── dashboard-upgrade.js
├── process-insights.js
├── quality-risk-detection.js
│
├── Quality_Defect_Data_Report.pdf
│
├── automated-wafer-factory.jpg
├── engineer-inspecting-wafer.jpg
├── microchip-wafer-detail.jpg
├── wafer-in-cleanroom.jpg
│
├── assets/
│   └── dashboard-preview.png
│
├── maryam1.txt.txt
├── maryam2.txt
├── maryam3.txt
├── maryam4.txt
├── maryam5.txt
├── maryam6.txt
├── maryam7.txt
├── maryam8.txt
├── maryam9.txt
├── maryam10.txt
│
└── README.md
```

## Main Application Files

| File | Description |
|---|---|
| `index.html` | Main structure of the web application |
| `style.css` | Dashboard styling and layout |
| `data.js` | Semiconductor wafer dataset |
| `dashboard.js` | KPI calculations and dashboard statistics |
| `ai_studio_code(1).js` | Wafer records table, search, and process-stage filtering |
| `charts.js` | Chart.js visualizations |
| `theme.js` | Light and dark theme functionality |
| `quality-analysis.js` | IQR-based process quality monitoring |
| `dashboard-upgrade.js` | Pearson correlation, summary statistics, and CSV export |
| `process-insights.js` | Process-stage comparisons and automatic summaries |
| `quality-risk-detection.js` | Process-level statistical risk screening |
| `Quality_Defect_Data_Report.pdf` | Project technical report |
| `assets/` | Additional visual resources |
| `maryam1.txt.txt` – `maryam10.txt` | Additional project text and documentation files |

## Image Resources

The project includes four image files used in the dashboard slideshow:

- `wafer-in-cleanroom.jpg`
- `microchip-wafer-detail.jpg`
- `automated-wafer-factory.jpg`
- `engineer-inspecting-wafer.jpg`

# 10. Access and Installation

## 10.1 Online Access

The dashboard is publicly accessible through GitHub Pages.

<div align="center">

<a href="https://noishin.github.io/Quality_Defect_Data_Project/">
<img src="https://img.shields.io/badge/LAUNCH-LIVE_DASHBOARD-0F766E?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Launch Live Dashboard" />
</a>

</div>

No additional installation is required to explore the online version.

## 10.2 Run Locally

To run the project on your computer:

**Step 1 — Clone the repository**

```bash
git clone https://github.com/noishin/Quality_Defect_Data_Project.git
```

**Step 2 — Navigate to the project directory**

```bash
cd Quality_Defect_Data_Project
```

**Step 3 — Open the application**

Open `index.html` in a modern web browser.

Make sure all project files remain in their correct locations.

**Note:** An active internet connection is required for external libraries loaded through a CDN, including Chart.js.

# 11. Team Members

This project was developed collaboratively by a team of four members as part of a university Information Technology course.

| No. | Team Member | GitHub Profile |
|---|---|---|
| 01 | **Noushin Alighardashi** | [@noishin](https://github.com/noishin) |
| 02 | **Arefeh Hosseini** | [@Arefehoseini](https://github.com/Arefehoseini) |
| 03 | **Madieh Masoumi** | [@mahdieh13851106-cell](https://github.com/mahdieh13851106-cell) |
| 04 | **Maryam Bigdeli** | [@bigdeli-maryam](https://github.com/bigdeli-maryam) |

# 12. Roles and Responsibilities

## 1. Noushin Alighardashi

**Project Lead & Frontend/UI Developer**

- Coordinating the team and organizing the development process.
- Supervising project progress and coordinating assigned tasks.
- Publishing and deploying the website through GitHub Pages.
- Contributing to the dashboard's visual design and interface improvements.
- Working on dashboard tables, filters, and user-interface features.
- Contributing to the implementation and integration of the dark mode.

**GitHub:** [noishin](https://github.com/noishin)

## 2. Arefeh Hosseini

**Data Management & Statistical Analysis Specialist**

- Designing and implementing the wafer records table.
- Developing the Pearson correlation matrix and advanced statistical analysis.
- Implementing Process Stage Intelligence.
- Developing IQR-based statistical quality risk detection.
- Adding CSV export functionality for filtered records.
- Supporting dark/light theme compatibility.
- Preparing the project's technical report and documentation.

**GitHub:** [Arefehoseini](https://github.com/Arefehoseini)

## 3. Madieh Masoumi

**Frontend Developer**

- Contributing to frontend development using HTML, CSS, and JavaScript.
- Working on the structure and functionality of the website.
- Contributing to the image slider implementation.
- Providing local testing instructions for checking the website, table, search functionality, charts, and browser console.
- Supporting the improvement of the dashboard's usability and presentation.

**GitHub:** [mahdieh13851106-cell](https://github.com/mahdieh13851106-cell)

## 4. Maryam Bigdeli

**Dashboard Features & Project Documentation Contributor**

- Preparing introductory text and welcome messages for the project.
- Introducing the semiconductor wafer quality analysis topic.
- Documenting the project team members.
- Describing the interactive dashboard and its main analytical capabilities.
- Explaining data filtering and the identification of unusual observations.
- Documenting the project's academic context.
- Contributing to the dark mode and four-slide image carousel features.
- Describing the parameter selector and available process parameters.
- Preparing additional project-related text files.

**GitHub:** [bigdeli-maryam](https://github.com/bigdeli-maryam)

## Team Collaboration

Although each member has a primary area of responsibility, the project represents a collaborative effort.

The integration of project coordination, frontend development, data management, statistical analysis, documentation, and visualization contributes to the overall functionality and presentation of the dashboard.

# 13. Additional Project Files

In addition to the main application files, the repository contains ten text files contributed as part of Maryam Bigdeli's project materials.

These files include introductory messages, project descriptions, team information, and explanations of dashboard features.

| File Name | Content |
|---|---|
| `maryam1.txt.txt` | Initial greeting: "hello." |
| `maryam2.txt` | Project welcome message |
| `maryam3.txt` | Project subject: Semiconductor Wafer Quality Analysis |
| `maryam4.txt` | Names of the four group members |
| `maryam5.txt` | Project thank-you message |
| `maryam6.txt` | Description of the interactive dashboard, process monitoring, statistical outlier detection, and data filtering |
| `maryam7.txt` | Explanation of the dashboard's data filtering and identification of unusual observations |
| `maryam8.txt` | Description of the project as a university IT course project |
| `maryam9.txt` | Description of the dark mode toggle and four-slide image carousel |
| `maryam10.txt` | Description of the parameter selector, including temperature, gas flow, etch rate, voltage, and current |

These files are retained in the repository as additional project materials and documentation. They are text files, not JavaScript application modules.

# 14. Project Scope and Limitations

The project focuses on exploratory data analysis, statistical summaries, process monitoring, and interactive visualization of semiconductor manufacturing records.

The following limitations should be considered when interpreting the results:

- Statistical outliers are indicators for further investigation, not confirmed manufacturing defects.
- The IQR method identifies unusual measurements based on statistical boundaries; it does not independently determine the cause of an observation.
- Pearson correlation describes linear association between variables and does not establish causation.
- Process-level risk categories are screening indicators based on the proportion of flagged records.
- Dashboard statistics depend on the dataset currently incorporated into the application.
- The project uses a browser-based dataset and does not currently include a separate backend database.
- The project does not implement a machine-learning model for defect classification or prediction.
- The dashboard is an academic data analysis and visualization application, not a certified industrial quality-control system.

These considerations are important for interpreting analytical outputs appropriately and avoiding conclusions that go beyond the available data.

# 15. Academic Context

| Category | Description |
|---|---|
| **Project Title** | Quality Defect Data Dashboard |
| **Course** | University Information Technology |
| **Institution** | Shahid Beheshti University (SBU) |
| **Project Domain** | Industrial Data Analysis |
| **Application Area** | Semiconductor Manufacturing |
| **Main Focus** | Wafer Quality and Process Analysis |
| **Team Size** | 4 Members |
| **Dataset Source** | Kaggle |
| **Deployment Platform** | GitHub Pages |

---

<div align="center">

## 📊 Quality Defect Data Dashboard

**From Manufacturing Data to Data-Driven Insights.**

*Developed collaboratively as a university academic project.*

<br>

<a href="https://noishin.github.io/Quality_Defect_Data_Project/">
<img src="https://img.shields.io/badge/Explore_Dashboard-0F766E?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Explore Dashboard" />
</a>
<a href="https://github.com/noishin/Quality_Defect_Data_Project">
<img src="https://img.shields.io/badge/Visit_Repository-172554?style=for-the-badge&logo=github&logoColor=white" alt="Visit Repository" />
</a>
<a href="https://www.kaggle.com/datasets/meruvakodandasuraj/semiconductor-wafer-defect-classification-dataset/data">
<img src="https://img.shields.io/badge/View_Dataset-20A4F3?style=for-the-badge&logo=kaggle&logoColor=white" alt="View Dataset" />
</a>

<br><br>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0F766E,50:115E59,100:172554&height=100&section=footer" alt="Footer" />

</div>

