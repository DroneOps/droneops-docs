---
title: Documentación DroneOps
---

<h6>INTRODUCCIÓN</h6>

# Bienvenido a la documentación droneops

Aquí documentamos la arquitectura tecnológica de software y los procedimientos dedicados a la operación integral, segura y autónoma de Aeronaves No Tripuladas (UAVs).

## Aprendizajes

El ecosistema de desarrollo y vuelo dentro del equipo abarca desde la física de vuelo básica hasta sistemas autónomos avanzados:

| | |
| :--- | :--- |
| **Fundamentos de Vuelo & FPV** | Mecánica de multirrotores y control dinámico. |
| **Control Programático & SDKs** | Automatización básica y rápida de prototipado en Python usando librerías como `djitellopy` y APIs de control de vuelo. |
| **Visión Computacional en Tiempo Real** | Procesamiento de video in-flight con OpenCV y modelos para detección de objetivos, seguimiento de marcadores y análisis de flujo óptico. |
| **Robótica Avanzada & Autonomía** | Middleware industrial utilizando ROS / ROS 2, control de estado en C++ y Python, integración de nodos de navegación y simulación en Gazebo. |

<br>

## Visión Técnica de DroneOps

A nivel de ingeniería, nuestras áreas de trabajo cubren todo el ciclo de vida del vuelo y el flujo de datos:

**1. Planificación de Misión y Control de Vuelo (GCS)**
* **Waypoints y Misiones Autónomas:** Programación en 2D/3D definiendo latitud, longitud, altitud relativa/MSL, velocidad y orientación de payload (QGroundControl, Mission Planner, UgCS).
* **Gestión BVLOS:** Implementación de enlaces de comunicación redundantes (LTE/5G, radio enlace en banda S/C/ISM).
* **Failsafes & Contingencias:** Configuración de protocolos automatizados en el Flight Controller (Pixhawk/ArduPilot/PX4): Return-to-Home (RTH) por bajo voltaje, pérdida de RC/GCS o geofencing activo.

**2. Gestión de Flotas y Autonomía (Drone-in-a-Box & UTM)**
* **Sistemas Drone-in-a-Box (DiaB):** Despliegue automatizado, aterrizaje de precisión mediante visión computacional o RTK, y estaciones de recarga/climatización.
* **Integración UTM:** Sincronización en tiempo real con proveedores de servicios de tráfico aéreo mediante Remote ID y e-ID.

**3. Captura y Sensorización de Datos**
* **Fotogrametría y LiDAR:** Configuración de sensores RGB con Global Shutter, sensores multiespectrales y unidades LiDAR con retornos múltiples.
* **Posicionamiento de Alta Precisión:** Corrección centimétrica mediante RTK (Real-Time Kinematic) y PPK (Post-Processed Kinematic).
* **Termografía Industrial:** Inspección radiométrica (FLIR) y calibración de emisividad para evaluación técnica.

**4. Pipeline de Datos (Edge Computing & Cloud)**
* **Edge Computing:** Computación a bordo (NVIDIA Jetson Orin) para procesamiento en tiempo real (YOLO), evitación de obstáculos con SLAM y filtrado de datos.
* **Pipeline ETL:** Ingesta de metadatos EXIF/XMP, generación de nubes de puntos (Point Clouds), Módulos Digitales de Elevación (DEM/DSM) y ortomosaicos.