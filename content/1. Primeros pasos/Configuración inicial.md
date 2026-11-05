# 🛠️ Guía de Configuración de Entorno desde Cero 

Esta guía está diseñada para nuevos integrantes que aún no tienen herramientas instaladas en su computadora. Al finalizar, contarás con una terminal **Bash**, **Git**, **Python 3**, entornos virtuales y las librerías necesarias para ejecutar los proyectos del repositorio.

## 📌 Paso 0: Obtener una Terminal Linux (Bash)

En DroneOps desarrollamos sobre sistemas basados en Linux debido a la compatibilidad con ROS 2 y herramientas de robótica.

### En Windows:

1. Descarga el instalador oficial desde [git-scm.com/download/win](https://git-scm.com/download/win "null").
    
2. Ejecuta el instalador `.exe`.
    
3. Puedes dejar las opciones predeterminadas recomendadas (asegúrate de que la opción para instalar **Git Bash** esté marcada).
    
4. Al terminar la instalación, abre el menú de inicio de Windows y busca **"Git Bash"**. A partir de aquí, **todos los comandos de esta guía se ejecutarán dentro de Git Bash**.**
    

> 💡 **Editor recomendado:** Descarga e instala [VS Code](https://code.visualstudio.com/ "null") en Windows. Luego abre VS Code e instala la extensión **"WSL"**. Esto te permitirá programar directamente dentro de tu entorno Linux.

### Si usas macOS:

macOS ya cuenta con terminal UNIX nativa:

1. Abre la aplicación **Terminal** (búscala con `Cmd + Espacio`).
    
2. Instala Homebrew (el gestor de paquetes de macOS) ejecutando:
    
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    

### Si usas Ubuntu / Linux nativo:

Abre tu terminal directamente con el atajo: `Ctrl + Alt + T`.

## 📦 Paso 1: Actualizar el Sistema

Dentro de tu terminal Bash (Ubuntu/WSL), actualiza la lista de paquetes del sistema:

```
sudo apt update && sudo apt upgrade -y
```

_(En macOS ejecuta: `brew update && brew upgrade`)_

## 🐙 Paso 2: Instalar Git y Configurar tus Credenciales

Git es el sistema de control de versiones que usamos para colaborar en código.

1. **Instalar Git:**
    
    - En Ubuntu / WSL:
        
        ```
        sudo apt install -y git
        ```
        
    - En macOS:
        
        ```
        brew install git
        ```
        
2. **Configurar tu identidad (usa tus datos reales y el correo de tu cuenta de GitHub):**
    
    ```
    git config --global user.name "Tu Nombre Completo"
    git config --global user.email "tu_correo@ejemplo.com"
    ```
    
3. **Verificar instalación:**
    
    ```
    git --version
    ```
    

## 🐍 Paso 3: Instalar Python 3 y Gestores de Paquetes

Necesitaremos Python 3, `pip` (gestor de librerías) y `venv` (para aislar las dependencias de cada proyecto).

1. **Instalar Python, Pip y Venv:**
    
    - En Ubuntu / WSL:
        
        ```
        sudo apt install -y python3 python3-pip python3-venv build-essential
        ```
        
    - En macOS:
        
        ```
        brew install python
        ```
        
2. **Comprobar versiones:**
    
    ```
    python3 --version
    pip3 --version
    ```
    

## 🚀 Paso 4: Clonar el Repositorio de Aprendizaje

Crea una carpeta de trabajo en tu directorio principal y descarga el código:

```
# 1. Crear carpeta para proyectos de robótica y entrar en ella
mkdir -p ~/droneops_ws
cd ~/droneops_ws

# 2. Clonar el repositorio oficial
git clone https://github.com/DroneOps/Learning-Projects.git

# 3. Entrar a la carpeta descargada
cd Learning-Projects
```

## 🌐 Paso 5: Crear y Activar un Entorno Virtual de Python

**Nunca** instales paquetes de proyectos directamente en el Python global del sistema; siempre usa un entorno virtual (`venv`):

1. **Crear el entorno virtual (llamado `.venv`):**
    
    ```
    python3 -m venv .venv
    ```
    
2. **Activar el entorno virtual:**
    
    ```
    source .venv/bin/activate
    ```
    
    _(Notarás que ahora aparece `(.venv)` al inicio de tu línea de comandos)._
    
3. **Actualizar el instalador de paquetes:**
    
    ```
    pip install --upgrade pip
    ```
    

> ⚠️ **Nota:** Cada vez que abras una nueva terminal para trabajar en el proyecto, debes situarte en esta carpeta y ejecutar `source .venv/bin/activate`. Para salir del entorno virtual, simplemente escribe `deactivate`.

## 📚 Paso 6: Instalar Librerías Base para los Proyectos

Con el entorno virtual activado, instala las dependencias fundamentales que se usan a lo largo de los módulos de aprendizaje (`Tello`, `Control`, `Vision`, etc.):

```
pip install numpy scipy matplotlib opencv-python djitellopy
```

- **`djitellopy`**: Librería para comunicarte y controlar el dron DJI Tello.
    
- **`opencv-python`**: Visión computacional y procesamiento del stream de cámara.
    
- **`numpy` & `scipy`**: Operaciones matriciales, matemáticas y algoritmos para filtros (Kalman) y control.
    
- **`matplotlib`**: Graficación de respuestas dinámicas, errores de estimación y telemetría.
    

## ✅ Paso 7: Prueba Rápida de Verificación

Verifica que todo esté correctamente enlazado ejecutando este comando de una sola línea en tu terminal:

```
python3 -c "import cv2, numpy, djitellopy; print('¡Entorno configurado exitosamente para DroneOps!')"
```

Si en la pantalla lees `¡Entorno configurado exitosamente para DroneOps!`, tu estación de trabajo está lista.

## 🆘 Problemas Frecuentes

- **Error de permisos al usar `apt`:** Asegúrate de escribir `sudo` antes del comando y colocar la contraseña que definiste al crear el usuario.
    
- **OpenCV arroja error de librerías faltantes (`libGL.so.1`):** En entornos mínimos de Ubuntu/WSL, suele faltar el soporte de gráficos de sistema. Ejecuta:
    
    ```
    sudo apt install -y libgl1-mesa-glx libglib2.0-0
    ```
    
- **Duda con ROS 2:** Si tu enfoque es la carpeta `Ros2`, la instalación de paquetes se realiza de manera independiente mediante los repositorios de ROS 2. Acércate con el líder del área de Software para la guía de instalación específica de ROS 2 Humble.