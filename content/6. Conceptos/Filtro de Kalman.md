![[Pasted image 20261104184117.png]]

### EXTENDIDO

> [!LINEALIDAD]
> Sirve para sensores lineales y no lineales. Pero respecto al estado no al tiempo, si la entrada es igual a la salida entonces el sensor por ejemplo es completamente lineal. Pero si ocupas un estado para calcular otro por ejemplo un ángulo  con ecuaciones no lineales, entonces es no lineal. [[Linealidad]]

![[Pasted image 20261104184133.png]]

![[Pasted image 20261104184142.png]]

![[Pasted image 20261104184200.png]]

---

Además del filtro de Kalman simple y extendido existe el uscented que se traduce sin enmascarar, no me voy a meter muy profundamente a este pero utiliza la transformación unscented utilizando conjuntos deterministas de puntos de muestra seleccionados llamados punto sigma que se propagan a través de las ecuaciones. 

| Extended                                                                                                                                                                                                                                                                                                                                                                                                     | Unscented                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - **Sistemas con baja no linealidad:** Si las curvas de tus ecuaciones son suaves, el EKF es suficiente.<br>- **Hardware limitado:** Consume menos memoria y ciclos de reloj si las matrices Jacobianas son fáciles de calcular.<br>- **Alta frecuencia de muestreo:** Ideal si necesitas actualizar el estado del sistema miles de veces por segundo (como en algunos sistemas de navegación aeroespacial). | - **Sistemas altamente no lineales:** Si tu sistema tiene giros bruscos o ecuaciones trigonométricas complejas (como radares o robots móviles).<br>- **Funciones no diferenciables:** Si tus ecuaciones tienen discontinuidades y **no puedes calcular el Jacobiano** (derivadas).<br>- **Búsqueda de mayor estabilidad:** El UKF no diverge tan fácilmente como el EKF cuando el sistema se vuelve caótico.<br><br>--- |
Y también existe en ensemble que usa montecarlo.

