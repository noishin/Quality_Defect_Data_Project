# 📊 Quality Defect Data Dashboard

### An Interactive Dashboard for Semiconductor Wafer Quality and Process Analysis

<p align="center">
  <strong>From Manufacturing Data to Data-Driven Insights</strong>
</p>

<p align="center">
  <a href="https://noishin.github.io/Quality_Defect_Data_Project/">
    <img src="https://img.shields.io/badge/LIVE%20DEMO-Explore%20Dashboard-00b894?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/noishin/Quality_Defect_Data_Project">
    <img src="https://img.shields.io/badge/GITHUB-Source%20Code-181717?style=for-the-badge&logo=github" alt="GitHub Repository">
  </a>
  <a href="https://www.kaggle.com/datasets/meruvakodandasuraj/semiconductor-wafer-defect-classification-dataset/data">
    <img src="https://img.shields.io/badge/DATASET-Kaggle-20BEFF?style=for-the-badge&logo=kaggle" alt="Kaggle Dataset">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-Frontend-orange?logo=html5" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-Styling-blue?logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-Interactive-yellow?logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/Chart.js-Visualization-ff6384?logo=chartdotjs" alt="Chart.js">
  <img src="https://img.shields.io/badge/Team-4%20Members-blueviolet" alt="Team">
</p>

---

## 📑 Table of Contents

- [1. Project Overview](#1-project-overview)
- [2. Project Objectives](#2-project-objectives)
- [3. Dashboard Preview](#3-dashboard-preview)
- [4. Key Performance Indicators](#4-key-performance-indicators)
- [5. Analytical Features](#5-analytical-features)
- [6. Statistical Methodology](#6-statistical-methodology)
- [7. Dataset](#7-dataset)
- [8. Technologies and Tools](#8-technologies-and-tools)
- [9. Project Structure](#9-project-structure)
- [10. Access and Installation](#10-access-and-installation)
- [11. Team Members](#11-team-members)
- [12. Roles and Responsibilities](#12-roles-and-responsibilities)
- [13. Project Scope and Limitations](#13-project-scope-and-limitations)
- [14. Academic Context](#14-academic-context)

---

## 1. Project Overview

Quality Defect Data Dashboard is an interactive web-based data analysis and visualization project developed to explore semiconductor wafer manufacturing data and monitor important process-related quality indicators.

Semiconductor manufacturing involves multiple production stages and requires careful monitoring of operational parameters. Understanding variations in these parameters can provide valuable insights into manufacturing processes and help identify unusual observations that may require further investigation.

This project transforms semiconductor manufacturing records into an interactive analytical environment through statistical indicators, data visualizations, process comparisons, and wafer-level records.

The dashboard is designed to provide a comprehensive overview of the available dataset while making process-related information easier to explore, interpret, and communicate.

Rather than presenting raw records alone, the project combines statistical summaries and visual analytics to support a more structured understanding of semiconductor manufacturing data.

## 2. Project Objectives

The primary objectives of this project are:

- To explore and organize semiconductor wafer manufacturing data.
- To monitor key process indicators through a KPI-based dashboard.
- To analyze temperature, pressure, and etch-rate measurements.
- To visualize the distribution of wafers across manufacturing stages.
- To examine variations in process parameters.
- To investigate relationships between selected manufacturing variables.
- To compare process characteristics across different manufacturing stages.
- To identify statistically unusual observations using an outlier detection method.
- To provide an interactive interface for searching and exploring individual wafer records.

## 3. Dashboard Preview

The dashboard provides a centralized interface for monitoring manufac
turing indicators and exploring process-related information.

<p align="center">
  <img src="assets/dashboard-preview.png" alt="Quality Defect Data Dashboard - Main Interface" width="100%">
</p>

*Figure 1. Main dashboard interface displaying key performance indicators in dark mode.*

Explore the live application:

[🚀 Open Quality Defect Data Dashboard](https://noishin.github.io/Quality_Defect_Data_Project/)

## 4. Key Performance Indicators (KPIs)

The dashboard presents six primary indicators that summarize the current dataset.

| KPI | Current Value | Description |
|---|---:|---|
| Total Wafers | 199 | Total production records displayed |
| Process Stages | 5 | Number of unique manufacturing stages |
| Average Temperature | 449.47 °C | Average process temperature |
| Average Pressure | 759.75 Torr | Average chamber pressure |
| Average Etch Rate | 94.37 nm/min | Average etching rate |
| Data Completeness | 100.0% | Percentage of valid numeric parameter values |

These indicators provide an initial overview of the dataset and serve as a starting point for more detailed analysis.

*Note: The reported values correspond to the current dashboard dataset and may change if the underlying data is updated.*

## 5. Analytical Features

The dashboard includes several analytical modules designed to examine different aspects of semiconductor manufacturing data.

### 5.1. Process Distribution

This module visualizes the number of wafers recorded in each manufacturing stage.

It provides an overview of how records are distributed across the production process and makes differences between stages easier to identify.

### 5.2. Parameter Variation

This section examines the variation of a selected manufacturing parameter across individual wafer records.

It allows users to explore how process measurements change throughout the dataset and identify patterns or unusual fluctuations.

### 5.3. Parameter Correlation

This module explores the relationship between temperature and etch rate.

The purpose is to visualize how changes in one process variable relate to variations in another and support exploratory analysis of manufacturing parameters.

### 5.4. Process Stage Comparison

This section compares the average value of a selected parameter across different manufacturing stages.

It helps users examine differences in process behavior and understand how selected measurements vary between production stages.

### 5.5. Process Quality Monitoring

The dashboard includes a statistical monitoring module based on the Interquartile Range (IQR) method.

This module identifies observations that fall outside the statistical range of the selected process parameters and flags them for further investigation.

The detected observations are treated as statistical outliers, not automatically as defective wafers.

### 5.6. Wafer Quality Records

The dashboard includes a structured table for displaying and exploring individual manufacturing records.

The table provides users with access to wafer-level information and makes it easier to examine the underlying dataset.

This component helps organize manufacturing records in a readable format and complements the dashboard's graphical visualizations.

## 6. Statistical Methodology

An important part of the project is the use of descriptive statistics and statistical outlier detection.

### Interquartile Range (IQR)

The IQR method is used to identify observations that are statistically distant from the central distribution of a parameter.

The interquartile range is calculated as:

\[
IQR = Q_3-Q_1
\]

Where:

- \(Q_1\): First quartile (25th percentile)
- \(Q_3\): Third quartile (75th percentile)

The method uses the lower and upper statistical boundaries to identify potential outliers.

\[
Lower\ Bound = Q_1-1.5(IQR)
\]

\[
Upper\ Bound = Q_3+1.5(IQR)
\]

Observations outside these boundaries are flagged as potential statistical anomalies.

Important interpretation:

A statistical outlier does not necessarily represent a manufacturing defect. Such observations require further investigation and sho
