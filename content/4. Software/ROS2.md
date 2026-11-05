Muy probablemente que no aparezca que existe ros2 es porque hace falta el comando:

## Antes de hacer colcon

```bash
# estableces env
source /opt/ros/jazzy/setup.bash
echo $ROS_DISTRO
```

## Colcon con symlink
Se supone que al hacer symlink hace links simbolicos y no vuelve copiar los arcvhivos a install.
- Ahorra memoria
- Hace que cuando modifique cualquier archivo no tenga que volver a hacer colcon
```bash
colcon build --symlink-install
python -m colcon build
```
## Librerias ros2
```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

### Para recordar como escribir un código
[Simple Node](https://docs.ros.org/en/jazzy/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html)

### Build pkgs 
```bash

colcon build --packages-select 
```

#### Matar al deamon

```bash
# 1. Matar todos los procesos huérfanos de crazybridge, optitrack y ros2
pkill -9 -f "crazybridge|optitrack_client|rerun|ros2"

# 2. Detener la caché del demonio de descubrimiento de ROS 2
ros2 daemon stop
```

Este es un comando para matar al proceso ya que a a veces cuando matas la terminal nada mas asi se quedan procesos colgados.

