### Unix-Like
Linux es un sistema operativo que se rige en la filosofía de unix, que es un sistema operativo mucho más viejo creado por AT&T y este lo privatizó, por lo que se empezaron a crear muchísimas ramas. Por lo que alguien decidió crear desde cero siguiendo las normas POSIX, pero no comparte absolutamente ninguna linea de código con unix pero si su filosofía de hacerlo todo modular y en C, no en ensamblador como antes se creía.
### GNU 
La parte GNU(GNU is Not Unix) si así es el nombre, un bucle infinito. Es la parte del usuario, todas las herramientas otra vez estandarizado con POSIX.
### POSIX Portable Operating System Interface
Es un estándar en el que empresas y el IEEE del todo el mundo quedaron de acuerdo con las normas de un sistema operativo para que tuviera tiene que ser en C, tener cierta sintaxis, etc.

### Partes de un SO
Tengo que enteder cual es la diferencia entre las diferentes partes de un sistema:
- Kernel de linux es la parte que gestiona el harware.
- GNU ya que linux en realidad es GNU linux, es la parte de programas escenciales para interacutar con el sistema, bash, ls, cat, etc.
- GRUB el gestor de arranque
- systemd, el [[Daemon]] que inicia todo.
- Gestor de paquetes [[Ubuntu y Pkgs]]
- Entorno grafico, wayland.
- Entorno de escritorio, Gnome, hyprland
- Gestor de red o audio.


[[Ubuntu y Pkgs]] ya viene con todo configurado.
[[ArchLinux]] arranca con lo mínimo escencial, pacman, librerias basicas, systemd.
