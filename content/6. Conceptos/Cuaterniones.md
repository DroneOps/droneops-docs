La ventaja de los cuaterniones es que te permiten hacer una rotación en los 3 ejes al mismo tiempo.  Al parecer también tiene beneficios computacionales y gasta menos bateria.
Mientas que los ángulos de euler lo hacen uno por uno. 

# Álgebra de cuaterniones

Un cuaternión unitario $q \in \mathbb{H}$ se compone de una parte escalar real y una parte vectorial imaginaria:

$$
q = \begin{bmatrix} q_w \\ \bar{q} \end{bmatrix} = \begin{bmatrix} q_w \\ q_x \\ q_y \\ q_z \end{bmatrix} \in \mathbb{H}
$$

Donde $q_w \in \mathbb{R}$ es el escalar y $\bar{q} = [q_x, q_y, q_z]^T \in \mathbb{R}^3$ es el vector imaginario.

## Producto Cuaternión
$$ \mathbf{q} \otimes \mathbf{r} = (q_0 r_0 - \mathbf{q} \cdot \mathbf{r}) + (r_0 \mathbf{q} + q_0 \mathbf{r} + \mathbf{q} \times \mathbf{r}) $$

> [!IMPORTANT]
> [Modelo dinámico de un cuadrotor con cuaterniones](https://www.researchgate.net/publication/279448184_Quadrotor_Quaternion_Control)

También los cuaterniones resuelven el gimbal lock que es cuando 2 angulos se vuelven uno mismo entonces hacer rotaciones es el mismo movimiento.

# Ejemplo de Gimbal Lock con ángulos de euler.

![[Pasted image 20261104183301.png]]
![[Pasted image 20261104183309.png]]

En este ejemplo el pitch es el rojo, el azu es el yaw y el verde el roll.
Entonces en un ejemplo en el que un drone esté volteando para arriba mover el yaw y el roll es exactamente lo mismo.  Se pierde un eje de movimiento. 

