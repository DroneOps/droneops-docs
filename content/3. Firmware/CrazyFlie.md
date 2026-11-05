El Crazyflie: **STM32F405**: 
- **F4**: Significa que pertenece a la serie "High Performance" con núcleo Cortex-M4.
- **05**: La variante específica (velocidad máxima a 168 MHz, con puertos USB y buses CAN/SPI).
Hay demansiada documentación en el crazyflie, está muy bien armado pero quedate con esta página.

```
cfclient # para abrir
```
[Build and Flash](https://github.com/bitcraze/crazyflie-firmware/blob/master/docs/building-and-flashing/build.md)
[Cliente](https://github.com/bitcraze/crazyflie-clients-python/blob/master/docs/installation/install.md)
[GUI](https://www.bitcraze.io/documentation/repository/crazyflie-clients-python/master/userguides/userguide_client/#firmware-configuration)
[Conectar](https://www.bitcraze.io/documentation/repository/crazyflie-lib-python/master/user-guides/sbs_connect_log_param/)

```
# UDEV RULES

sudo groupadd plugdev # crear un grupo para las conexiones plug an play
sudo usermod -a -G plugdev $USER # añade el usuario al grupo con la flag -a asegura de no borrarlo en otros grupos

cat <<EOF | sudo tee /etc/udev/rules.d/99-bitcraze.rules > /dev/null # 

# Crazyradio (Operación Normal)
SUBSYSTEM=="usb", ATTRS{idVendor}=="1915", ATTRS{idProduct}=="7777", MODE="0666", GROUP="plugdev"

# Bootloader del Crazyradio
SUBSYSTEM=="usb", ATTRS{idVendor}=="1915", ATTRS{idProduct}=="0101", MODE="0666", GROUP="plugdev"

# Crazyflie (Conexión directa por USB)
SUBSYSTEM=="usb", ATTRS{idVendor}=="0483", ATTRS{idProduct}=="5740", MODE="0666", GROUP="plugdev"

# Bootloader del Crazyflie en modo DFU
SUBSYSTEM=="usb", ATTRS{idVendor}=="0483", ATTRS{idProduct}=="df11", MODE="0666", GROUP="plugdev"
EOF

# cambiar las reglas reinciando el archivo y avisar al kernel
sudo udevadm control --reload-rules && sudo udevadm trigger


```

Las udev rules (userspace device management) son archivos de configuracion que le dictan al sistema operativo como manejar el hardware en el momento que se conectan o desconectan. Puedes asignar como nombres o grupos a las cosas que se conectan. como ponerle nombre a un dispositivo siempre como pixhawk .
### Definiciones comando
- `SUBSYSTEM=="usb"`: Solo aplica si el dispositivo conectado es USB.
    
- `ATTRS{idVendor}=="1915"`, `ATTRS{idProduct}=="7777"`: Son el "Vendor ID" (VID) y "Product ID" (PID). Estos códigos hexadecimales identifican exactamente qué aparato conectaste. `1915` es el identificador registrado del fabricante Bitcraze, y `7777` corresponde específicamente al Crazyradio.
    
- `MODE="0666"`: Otorga permisos de lectura y escritura (`rw-rw-rw-`) al dispositivo.
    
- `GROUP="plugdev"`: Asigna la propiedad del puerto USB al grupo que creaste en el primer paso.

Udev es un [[Daemon]], un daemon es un proceso que se ejecuta en segundo plano de forma autónoma sin terminal, escucha y ejecuta la tarea solo cuando es necesario, luego vuelve a dormir. Cuando algo tiene una d, es de daemon.

Systemd es el daemon maestro, en robotica se programan daemons para que un robot haga las tareas solas sin necesidad de ros2 por ejemplo.

```
scf # syncCrazyflie

scf.cf # Crazyflie

scf.cf.comander # commander
```
revisar [[Python]] para entender porque se usa punto  y punto.


> [!NOTE] URI
> Uniform Resource Identifier. 
> uri = uri_helper.uri_from_env(default='radio://0/120/2M/E7E7E7E7E7')
>     1. radio interface / 0
>     2. radio channel / 120
>     3. radio bandwidth / 2M
>     4. Crazyflie direction ID
> 

### Para volarlo con el optitrack

```cardlink
url: https://github.com/covenant-tec
title: "Covenant & Tec"
description: "Collaboration between Covenant Engineering  & Tec de Monterrey related to drone R&D - Covenant & Tec"
host: github.com
favicon: https://github.githubassets.com/favicons/favicon.svg
image: https://avatars.githubusercontent.com/u/318260126?s=280&v=4
```


### Para mandar external pose

```cardlink
url: https://www.bitcraze.io/documentation/repository/crazyflie-lib-python/master/api/cflib/crazyflie/extpos/
title: "extpos | Bitcraze"
host: www.bitcraze.io
```

### Los logs.

Por defecto en el firmware se imprimen algunos. Pero kevin hizo esta funcion para mostrar otros.
### `self._setup_oot_logs()`


### Para flashear:
```
cd /run/media/mojarras7/Wiwi/crazyflie-optitrack/firmware/crazyflie-firmware

  2. Inicializa y descarga los submódulos:
    git submodule update --init --recursive
  (Esto tardará un momento descargando las librerías de STM32 y FreeRTOS).
  3. Vuelve a la carpeta de la app y compila de nuevo:
    cd examples/app_out_of_tree_controller
    make clean
    make


  Si el make termina correctamente sin errores (verás que genera un texto sobre cf2.bin con el tamaño de la memoria), entonces ya puedes
  flashear ejecutando nuevamente:

    make cload RADIO=radio://0/80/2M/E7E7E7E7E7
```

