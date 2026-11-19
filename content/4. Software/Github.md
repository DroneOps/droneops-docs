# Git y GitHub — Apuntes

## 1. ¿Qué es un repositorio?

Un **repositorio (repo)** es un espacio donde se almacena un proyecto, incluyendo sus archivos, historial de cambios y versiones. Todo esto con el fin de facilitar la colaboracion en proyectos.

Existen dos tipos principales:

- **Repositorio local :** se encuentra en nuestra computadora.
- **Repositorio remoto :** está alojado en un servidor, generalmente mediante plataformas como GitHub. 
![[Screenshot 2026-11-19 at 2.05.00 p.m..png]]
## 2. Áreas de trabajo de Git

Git utiliza diferentes áreas para organizar y controlar los cambios de un proyecto.

Su propósito principal es **permitir experimentar, modificar y corregir código sin afectar directamente las versiones ya guardadas**.

### A. Workspace (Directorio de trabajo)
![[Screenshot 2026-11-19 at 2.10.27 p.m..png]]
Es el espacio de nuestra computadora donde podemos abrir, crear y modificar los archivos del proyecto utilizando editores como VS Code.

Los archivos pueden clasificarse en:

- **Tracked (Rastreados):** archivos que Git ya conoce y cuyos cambios puede detectar.
- **Untracked (No rastreados):** archivos nuevos que todavía no han sido agregados al seguimiento de Git.

### B. Staging Area (Área de preparación o Index)

Es un espacio intermedio entre el directorio de trabajo y el repositorio local.

Funciona como un **filtro de control**, donde seleccionamos los cambios que queremos incluir en el próximo commit.

El comando `git add` permite enviar cambios a esta área.

### C. Local Repository (Repositorio local)

Es la base de datos del proyecto almacenada en nuestra computadora.

Aquí se guarda el historial de versiones y los commits realizados.

El comando `git commit` registra permanentemente en el historial local los cambios preparados en el Staging Area.

### D. Remote Repository (Repositorio remoto)

Es una versión del repositorio alojada en un servidor, como GitHub.

Permite compartir código, colaborar con otras personas y sincronizar cambios entre diferentes computadoras.

El comando `git push` permite enviar los commits locales al repositorio remoto.

## 3. ¿Qué es un commit?

Un **commit** es una captura (*snapshot*) del estado de los archivos preparados en un momento determinado.

Cada commit representa un punto en el historial del proyecto al que podemos regresar posteriormente.

También permite identificar qué cambios se realizaron, cuándo y por quién.

## 4. Diferencia entre Git y GitHub

- **Git:** sistema de control de versiones que permite registrar cambios, crear ramas y administrar el historial de un proyecto.
- **GitHub:** plataforma en línea que permite alojar repositorios Git y colaborar con otros desarrolladores.

**Git funciona sin GitHub**, pero GitHub utiliza Git para administrar las versiones de los proyectos.
![[Screenshot 2026-11-19 at 2.11.20 p.m..png]]
## 5. Flujo básico de trabajo

El recorrido habitual de los cambios es:

**Workspace → Staging Area → Local Repository → Remote Repository**

| Comando                   | Función                                          |
| ------------------------- | ------------------------------------------------ |
| `git status`              | Consultar el estado de los archivos y cambios.   |
| `git add .`               | Preparar los cambios para el próximo commit.     |
| `git commit -m "mensaje"` | Crear un commit con los cambios preparados.      |
| `git push`                | Enviar los commits al repositorio remoto.        |
| `git pull`                | Traer e integrar cambios del repositorio remoto. |
| `git clone <GitHub_url>`  | Descarga un repo a tu                            |

## 6. Recursos

**Git Cheat Sheet (Guía rápida de comandos):**

https://git-scm.com/cheat-sheet

**Concepto clave:** Git administra el historial de cambios, mientras que GitHub facilita almacenar y compartir ese historial en línea.

Por Chai gpt