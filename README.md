
<div align="center">

# 📊 Quality Defect Data Dashboard

### Semiconductor Wafer Quality & Process Analysis

<p>
  An interactive dashboard for exploring semiconductor manufacturing data,<br>
  monitoring process parameters, and detecting unusual observations through statistical analysis.
</p>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=1000&color=16A085&center=true&vCenter=true&width=750&lines=Semiconductor+Wafer+Quality+Analysis;Advanced+Process+Monitoring;Statistical+Anomaly+Detection;Turning+Manufacturing+Data+into+Insights" alt="Typing SVG" />

<br>

<a href="https://noishin.github.io/Quality_Defect_Data_Project/">
  <img src="https://img.shields.io/badge/🚀_EXPLORE_DASHBOARD-16A085?style=for-the-badge&logoColor=white" alt="Live Dashboard">
</a>
<a href="https://github.com/noishin/Quality_Defect_Data_Project">
  <img src="https://img.shields.io/badge/GITHUB-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository">
</a>
<a href="https://www.kaggle.com/datasets/meruvakodandasuraj/semiconductor-wafer-defect-classification-dataset/data">
  <img src="https://img.shields.io/badge/KAGGLE_DATASET-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white" alt="Kaggle Dataset">
</a>

<br><br>

<img src="dashboard-preview.png" width="95%" alt="Quality Defect Data Dashboard Preview">

<br><br>

</div>

---

<div align="center">

## 🛠️ TECHNOLOGIES & TOOLS

<p>
  <img src="https://skillicons.dev/icons?i=html,css,js,github,vscode" alt="Technologies">
</p>

<p>
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Statistical_Analysis-16A085?style=flat-square" />
  <img src="https://img.shields.io/badge/Data_Visualization-1B4965?style=flat-square" />
  <img src="https://img.shields.io/badge/Team-4_Members-7952B3?style=flat-square" />
</p>

</div>

---


## 📑 Table of Contents

1. [Project Overview](#1-project-overview)
2. [Project Objectives](#2-project-objectives)
3. [Key Performance Indicators](#3-key-performance-indicators)
4. [Dashboard Features](#4-dashboard-features)
5. [Statistical Methodology](#5-statistical-methodology)
6. [Dataset](#6-dataset)
7. [Advanced Data Analysis](#7-advanced-data-analysis)
8. [Technologies and Tools](#8-technologies-and-tools)
9. [Project Structure](#9-project-structure)
10. [Access and Installation](#10-access-and-installation)
11. [Team Members](#11-team-members)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Project Scope and Limitations](#13-project-scope-and-limitations)
14. [Academic Context](#14-academic-context)

---

## 1. Project Overview

**Quality Defect Data Dashboard** is an interactive web-based data analysis and visualization project developed to explore semiconductor wafer manufacturing data and monitor important process-related quality indicators.

Semiconductor manufacturing involves multiple production stages and requires careful monitoring of operational parameters. Variations in temperature, pressure, gas flow, and other manufacturing measurements can provide useful information about process behavior.

This project transforms semiconductor manufacturing records into an interactive analytical environment through statistical indicators, data visualizations, process comparisons, correlation analysis, and wafer-level records.

The dashboard provides a centralized interface for exploring manufacturing data, examining process characteristics, comparing production stages, and identifying statistically unusual observations.

## 2. Project Objectives

The primary objectives of this project are:

- Explore and organize semiconductor wafer manufacturing data.
- Monitor key process indicators through a KPI-based dashboard.
- Analyze temperature, pressure, gas flow, and etch-rate measurements.
- Visualize wafer distribution across manufacturing stages.
- Examine variations in manufacturing parameters.
- Investigate relationships between selected process variables.
- Analyze correlations between manufacturing parameters.
- Compare process characteristics across different manufacturing stages.
- Identify statistically unusual observations using the Interquartile Range (IQR) method.
- Evaluate potential quality risks across manufacturing stages.
- Provide interactive search and filtering functionality for wafer records.
- Enable users to export filtered manufacturing records in CSV format.
- Present manufacturing information through an accessible and interactive interface.

## 3. Key Performance Indicators (KPIs)

The dashboard presents six primary indicators that summarize the manufacturing dataset.

| KPI | Description |
|---|---|
| **Total Wafers** | Total number of production records |
| **Process Stages** | Number of unique manufacturing stages |
| **Average Temperature** | Average process temperature (°C) |
| **Average Pressure** | Average chamber pressure (Torr) |
| **Average Etch Rate** | Average etching rate (nm/min) |
| **Data Completeness** | Percentage of valid numeric parameter values |

These indicators provide an initial overview of the dataset and serve as a starting point for more detailed analysis.

## 4. Dashboard Features

The dashboard includes several interactive modules designed to examine different aspects of semiconductor manufacturing data.

### 4.1 Interactive Hero Slider

A four-slide image presentation introduces semiconductor manufacturing, microchip technology, automated wafer production, and quality inspection.

Users can navigate between slides using navigation arrows and slide indicators. The slider also changes slides automatically.

### 4.2 Dark and Light Mode

The dashboard supports two visual themes:

- Dark Mode
- Light Mode

Users can switch between themes using the theme toggle button. The selected preference is stored in the browser's local storage.

### 4.3 Process Distribution

Visualizes the number of wafers recorded in each manufacturing stage, providing an overview of production record distribution.

### 4.4 Parameter Variation

Examines the variation of selected manufacturing parameters across wafer records.

Available parameters include:

- Temperature
- Pressure
- Gas Flow
- Etch Rate
- Voltage
- Current

Users can select a parameter to explore its variation.

### 4.5 Parameter Correlation

Visualizes the relationship between temperature and etch rate through a scatter plot.

This visualization supports exploratory analysis of relationships between selected manufacturing variables.

### 4.6 Process Stage Comparison

Compares the average value of a selected manufacturing parameter across different production stages.

Users can select different parameters to examine variations in process behavior.

### 4.7 Process Quality Monitoring

Provides statistical analysis of manufacturing parameters using the Interquartile Range (IQR) method.

The module includes:

- Total detected anomalies.
- Number of parameters analyzed.
- Anomaly summaries by parameter.
- Identification of potentially unusual wafer records.
- Parameter-based investigation and filtering.

Detected observations are statistical outliers and should not automatically be interpreted as defective wafers.

### 4.8 Wafer Quality Records

Provides a structured table for displaying individual manufacturing records.

The table includes:

- Wafer ID
- Pressure
- Gas Flow
- Etch Rate
- Voltage
- Current
- Process Step

Users can search records using wafer identifiers, manufacturing stages, and available process measurements.

### 4.9 Interactive Search and Filtering

Users can explore the dataset through:

- Text-based search.
- Manufacturing process stage filtering.
- Dynamic table updates.

The dashboard also updates its analytical components according to the currently filtered records.

### 4.10 CSV Export

The dashboard provides a CSV export feature that allows users to download the currently filtered wafer records.

The exported file contains:

- Wafer ID
- Temperature
- Pressure
- Gas Flow
- Etch Rate
- Voltage
- Current
- Process Step

This feature supports further analysis using spreadsheet applications and other data analysis tools.

### 4.11 Advanced Data Insights

An additional analytical module provides statistical summaries and a Pearson correlation matrix.

The module includes:

- Number of selected wafers.
- Average temperature.
- Average etch rate.
- Average pressure.
- Data completeness.
- Temperature standard deviation.
- Pearson correlation coefficients between selected manufacturing parameters.

The correlation matrix examines relationships among six process variables.

### 4.12 Process Stage Intelligence

This module provides a statistical comparison of manufacturing stages based on the currently filtered records.

It examines:

- Wafer count in each manufacturing stage.
- Average temperature.
- Average pressure.
- Average etch rate.
- Potential statistical outliers.

It also provides an automatic analysis of manufacturing stage characteristics.

### 4.13 Quality Risk Detection

This module performs statistical screening of unusual wafer measurements across manufacturing stages.

It evaluates six process parameters:

- Temperature
- Pressure
- Gas Flow
- Etch Rate
- Voltage
- Current

The module provides:

- Number of filtered wafers analyzed.
- Flagged wafer counts across manufacturing stages.
- Stage-level anomaly rates.
- Statistical risk classifications.
- A copyable quality risk report.

Risk classifications are screening indicators based on statistical thresholds and should not be interpreted as confirmed manufacturing defects or predictions of production failure.

## 5. Statistical Methodology

### 5.1 Interquartile Range (IQR)

The IQR method identifies observations that are statistically distant from the central distribution of a parameter.

The interquartile range is calculated as:

\[
IQR = Q_3 - Q_1
\]

Where:

- \(Q_1\): First quartile (25th percentile).
- \(Q_3\): Third quartile (75th percentile).

The lower and upper boundaries are:

\[
Lower\ Bound = Q_1 - 1.5(IQR)
\]

\[
Upper\ Bound = Q_3 + 1.5(IQR)
\]

Observations outside these boundaries are flagged as potential statistical anomalies.

The dashboard applies IQR-based analysis to the available manufacturing parameters.

**Important:** A statistical outlier does not necessarily represent a manufacturing defect. Such observations require further investigation and should be interpreted within the context of the manufacturing process.

### 5.2 Pearson Correlation Coefficient

The advanced data analysis module uses the Pearson correlation coefficient to examine linear relationships between manufacturing parameters.

The coefficient is calculated as:

\[
r_{xy} =
\frac{\sum_{i=1}^{n}(x_i-\bar{x})(y_i-\bar{y})}
{\sqrt{\sum_{i=1}^{n}(x_i-\bar{x})^2}
\sqrt{\sum_{i=1}^{n}(y_i-\bar{y})^2}}
\]

Where:

- \(x_i\) and \(y_i\): Individual observations.
- \(\bar{x}\) and \(\bar{y}\): Arithmetic means.
- \(n\): Number of paired observations.

The coefficient ranges from -1 to +1:

| Value | Interpretation |
|---|---|
| +1 | Perfect positive linear correlation |
| 0 | No linear correlation |
| -1 | Perfect negative linear correlation |

Correlation indicates the strength and direction of a linear relationship. It does not establish causation.

## 6. Dataset

The project uses the **Semiconductor Wafer Defect Classification Dataset**, available through Kaggle.

### Dataset Information

| Attribute | Description |
|---|---|
| Dataset Name | Semiconductor Wafer Defect Classification Dataset |
| Source | Kaggle |
| Domain | Semiconductor Manufacturing |
| Application | Manufacturing Data Analysis |
| Dataset Records | 199 |
| Manufacturing Stages | Deposition, Lithography, Etching, Oxidation, CMP |

### Dataset Features

| Feature | Description | Unit |
|---|---|---|
| Wafer ID | Unique wafer identifier | — |
| Temperature | Manufacturing process temperature | °C |
| Pressure | Process chamber pressure | Torr |
| Gas Flow | Gas flow rate | SCCM |
| Etch Rate | Material removal rate | nm/min |
| Voltage | Electrical voltage | V |
| Current | Electrical current | mA |
| Process Step | Manufacturing stage | — |

**Original Dataset:** [View on Kaggle](https://www.kaggle.com/datasets/meruvakodandasuraj/semiconductor-wafer-defect-classification-dataset/data)

The dataset is incorporated into the project through `data.js` and serves as the basis for dashboard calculations and visualizations.

The application currently contains 199 manufacturing records.

## 7. Advanced Data Analysis

In addition to the primary dashboard visualizations, the project includes supplementary analytical components.

### 7.1 Statistical Summary

The dashboard calculates descriptive statistics for selected manufacturing parameters, including:

- Arithmetic mean.
- Standard deviation.
- Data completeness.
- Number of selected records.

### 7.2 Correlation Matrix

A Pearson correlation matrix provides a pairwise comparison of six manufacturing parameters:

- Temperature
- Pressure
- Gas Flow
- Etch Rate
- Voltage
- Current

### 7.3 Manufacturing Stage Analysis

The Process Stage Intelligence module compares the five manufacturing stages using average parameter values and potential outlier counts.

### 7.4 Quality Risk Assessment

The Quality Risk Detection module evaluates unusual measurements and summarizes flagged wafers by manufacturing stage.

These analytical components are intended to support exploratory analysis and provide additional insight into manufacturing data.

## 8. Technologies and Tools

| Technology | Purpose |
|---|---|
| HTML5 | Structuring the dashboard and its components |
| CSS3 | Interface styling, layout, and visual presentation |
| JavaScript | Data handling, calculations, and interactive functionality |
| Chart.js | Creating graphical representations of process data |
| Git | Version control and tracking code changes |
| GitHub | Source code hosting and team collaboration |
| GitHub Pages | Deploying and publishing the live dashboard |
| Kaggle | Providing the original dataset |

### Development Approach

The dashboard follows a browser-based implementation approach.

The dataset is incorporated into the project, processed through JavaScript, and presented through interactive visual components and statistical summaries.

Chart.js supports the graphical representation of manufacturing data, while custom JavaScript modules handle filtering, statistical calculations, quality analysis, and interactive functionality.

The application does not require a separate backend server or database for its current implementation.

## 9. Project Structure

The repository contains the following files and resources:

```text
Quality_Defect_Data_Project/
│
├── index.html
├── style.css
│
├── data.js
├── dashboard.js
├── charts.js
├── theme.js
│
├── ai_studio_code(1).js
├── dashboard-upgrade.js
├── process-insights.js
├── quality-analysis.js
├── quality-risk-detection.js
│
├── Quality_Defect_Data_Report.pdf
│
├── wafer-in-cleanroom.jpg
├── microchip-wafer-detail.jpg
├── automated-wafer-factory.jpg
├── engineer-inspecting-wafer.jpg
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

### Main Application Files

| File | Description |
|---|---|
| `index.html` | Main HTML structure, dashboard sections, and interface elements |
| `style.css` | Dashboard styling, layout, responsive design, and visual presentation |
| `data.js` | Semiconductor wafer manufacturing dataset |
| `dashboard.js` | KPI calculations and dashboard statistics |
| `charts.js` | Process distribution, parameter variation, correlation, and stage comparison charts |
| `theme.js` | Dark and Light theme functionality |
| `ai_studio_code(1).js` | Wafer records table, search, and process-stage filtering |
| `dashboard-upgrade.js` | Advanced data insights, Pearson correlation matrix, statistical summaries, and CSV export |
| `process-insights.js` | Process Stage Intelligence and manufacturing stage comparisons |
| `quality-analysis.js` | IQR-based anomaly detection and investigation |
| `quality-risk-detection.js` | Statistical quality risk screening and stage-level risk reporting |

### Additional Project Resources

| File or Folder | Description |
|---|---|
| `Quality_Defect_Data_Report.pdf` | Project technical report |
| `wafer-in-cleanroom.jpg` | Semiconductor wafer and cleanroom image |
| `microchip-wafer-detail.jpg` | Microchip and wafer image |
| `automated-wafer-factory.jpg` | Automated semiconductor manufacturing image |
| `engineer-inspecting-wafer.jpg` | Semiconductor quality inspection image |
| `assets/` | Folder for additional visual resources |
| `maryam1.txt.txt` – `maryam10.txt` | Text files containing project-related introductory content, descriptions, and contribution notes |
| `README.md` | Project documentation |

## 10. Access and Installation

### Online Access

The dashboard is publicly accessible through GitHub Pages.

[**🚀 Open Quality Defect Data Dashboard**](https://noishin.github.io/Quality_Defect_Data_Project/)

No additional installation is required to explore the deployed dashboard.

### Run Locally

**Step 1 — Clone the repository**

```bash
git clone https://github.com/noishin/Quality_Defect_Data_Project.git
```

**Step 2 — Navigate to the project directory**

```bash
cd Quality_Defect_Data_Project
```

**Step 3 — Open the project**

Open `index.html` in a modern web browser.

An active internet connection is required to load Chart.js from its CDN.

Make sure all project files and image resources remain in their original relative paths.

## 11. Team Members

This project was developed collaboratively by a team of four members as part of a university Information Technology course.

| No. | Team Member | GitHub Profile |
|---|---|---|
| 01 | **Noushin Alighardashi** | [@noishin](https://github.com/noishin) |
| 02 | **Arefeh Hosseini** | [@Arefehoseini](https://github.com/Arefehoseini) |
| 03 | **Madieh Masoumi** | [@mahdieh13851106-cell](https://github.com/mahdieh13851106-cell) |
| 04 | **Maryam Bigdeli** | [@bigdelı-maryam](https://github.com/bigdeli-maryam) |

## 12. Roles and Responsibilities

The project was developed collaboratively by four team members, with each member contributing to different aspects of project management, interface development, data analysis, visualization, testing, and technical documentation.

### 1. Noushin Alighardashi

**Project Lead & Frontend/UI Developer**

- Leading and coordinating the project team and managing the overall development workflow.
- Planning project activities, supervising progress, and coordinating team responsibilities.
- Publishing and deploying the dashboard using GitHub Pages.
- Implementing Dark Mode functionality.
- Designing and implementing data tables for structured information presentation.
- Developing interactive filtering functionality for data exploration.
- Enhancing the website's visual design, layout, and overall user experience.
- Improving the dashboard's visual consistency, usability, and interface presentation.

GitHub: [@noishin](https://github.com/noishin)

### 2. Arefeh Hosseini

**Data Management, Statistical Analysis & Technical Documentation Specialist**

- Designing and implementing the wafer records table.
- Developing the correlation matrix and advanced data analysis components.
- Implementing Process Stage Intelligence to support the analysis of different manufacturing stages.
- Developing an IQR-based statistical quality risk detection system.
- Implementing CSV export functionality for filtered dataset records.
- Improving interface compatibility with Dark and Light themes.
- Preparing the project's technical report and documenting its implementation and analytical workflow.

GitHub: [@Arefehoseini](https://github.com/Arefehoseini)

### 3. Madieh Masoumi

**Frontend Developer & Interface Testing Specialist**

- Developing and implementing frontend components of the dashboard.
- Working with HTML, CSS, and JavaScript to build the web application.
- Supporting the implementation of interactive dashboard features.
- Contributing to slider development and visual interface functionality.
- Preparing instructions for testing the dashboard locally on different computers and browsers.
- Providing guidance for checking data tables, search functionality, and charts.
- Documenting browser console error identification and troubleshooting procedures.
- Supporting debugging and code correction workflows.

GitHub: [@mahdieh13851106-cell](https://github.com/mahdieh13851106-cell)

### 4. Maryam Bigdeli

**Data Analysis, Visualization & Dashboard Features Specialist**

- Contributing to the definition and documentation of the project topic: Semiconductor Wafer Quality Analysis.
- Preparing introductory and descriptive content for the dashboard.
- Developing explanations of the dashboard's purpose, functionality, and analytical capabilities.
- Documenting the dashboard as an interactive platform for process monitoring and statistical anomaly detection.
- Implementing Dark Mode functionality.
- Adding an image slideshow to the dashboard.
- Preparing descriptions of parameter selection and interactive data exploration.
- Creating introductory messages and project-related documentation.

GitHub: [@bigdelı-maryam](https://github.com/bigdeli-maryam)

### Team Collaboration

Although each team member had primary responsibilities, the project involved collaboration across different development areas.

The integration of project management, interface design, frontend development, data management, statistical analysis, visualization, testing, and technical documentation contributed to the development of an interactive dashboard for exploring semiconductor manufacturing data and analyzing process-related quality indicators.

## 13. Project Scope and Limitations

The project focuses on exploratory data analysis, statistical summaries, and interactive visualization of semiconductor manufacturing records.

The following considerations are important when interpreting its results:

- Statistical outliers are indicators for further investigation, not confirmed manufacturing defects.
- Quality risk classifications are statistical screening indicators and do not confirm actual manufacturing failures.
- Correlation visualizations describe relationships between variables and do not establish causation.
- Dashboard statistics depend on the dataset currently incorporated into the application.
- Data completeness refers to the validity of the numeric parameter values evaluated by the dashboard.
- The project uses predefined statistical methods rather than a trained machine learning prediction model.
- The project is intended as an academic data analysis and visualization application, rather than a certified industrial quality-control system.

These considerations help ensure that the analytical outputs are interpreted appropriately.

## 14. Academic Context

| Category | Description |
|---|---|
| Project Title | Quality Defect Data Dashboard |
| Course | University Information Technology |
| Institution | Shahid Beheshti University (SBU) |
| Project Domain | Industrial Data Analysis |
| Application Area | Semiconductor Manufacturing |
| Main Focus | Wafer Quality and Process Analysis |
| Team Size | 4 Members |
| Dataset Source | Kaggle |
| Deployment Platform | GitHub Pages |

---
<!-- Animated Title -->
[کد Typing SVG]

<!-- Project Links -->
[کد Badgeها]

---

<!-- Dashboard Preview -->
![Dashboard Preview](dashboard-preview.png)

---

<!-- Technologies & Tools -->
[کد آیکون‌های فناوری]

---

<!-- Project Overview -->
### Quality Defect Data Dashboard

**From Manufacturing Data to Data-Driven Insights.**

*Developed collaboratively as a university academic project.*
