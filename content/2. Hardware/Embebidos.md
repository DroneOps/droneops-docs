# Qué es un sistema embebido?
Es una computadora muy pequeña especializada para realizar una sola función.
- Tiene recursos limitados.
- Interactúa con el mundo físico directamente.
# Conceptos necesarios para entender los sistemas embebidos

-  [[Protocolos de comunicación|SPI]]
-  [[MOSFET]] 
- [[FreeRTOS]]
- [[Hard-Time]]
- [[Malloc]]
- [[Mutex y Semáforos]]
- [[Continuo vs Discreto]]
---
## Familias de microcontroladores
Un microcontrolador es una computadora completa dentro de un solo chip.
La stm es una sola familia de microcontrolador de *STMicroelectronics*

              ┌──────────────────────────────────────────────┐
              │             CHIP STM32F405                   │
              │                                              │
              │  ┌─────────────────┐    ┌─────────────────┐  │
              │  │  Núcleo CPU     │    │   Unidad FPU    │  │
              │  │ ARM Cortex-M4   │◄──►│  (Punto Flotante│  │
              │  │    @ 168 MHz    │    │    por hardware)│  │
              │  └────────┬────────┘    └─────────────────┘  │
              │           │                                  │
              │  ┌────────┴────────┐    ┌─────────────────┐  │
              │  │  Memoria RAM    │    │  Memoria FLASH  │  │
              │  │     192 KB      │    │     1024 KB     │  │
              │  │  (Variables)    │    │   (Tu código)   │  │
              │  └─────────────────┘    └─────────────────┘  │
              └──────────────────────────────────────────────┘
  *Diagrama de compomentes en el chip del microcontrolador*

- CPU: es la parte que procesa todas las instrucciones pero depende de otros componentes como la RAM, gráfica, etc.
- FPU **Floating Point Unit**: es solo una parte que se dedica a hacer cálculos con punto decimal.
- RAM: Random Access Unit. Es una memoria rapidísima que se dedica a entregar los datos rapidamente al procesador.
- Memoria Flash: Un disco duro interno que guarda datos.
- Periféricos: Puertos, Sensores, etc.
---
# **ARM**
ARM contrario a lo que piensan muchos no fabrica nada, solo es una empresa que se dedica a determinar como debería de funcionar un procesador por dentro.

- Cómo es el conjunto de instrucciones (el lenguaje máquina que entiende).
- Cómo se organizan los registros internos.
- Cómo fluyen los bits dentro de la CPU.
ARM no fabrica sus propios chips. Las consolas como nitendo switch usan ARM.
Curiosamente AMD también es lo mismo que ARM.

AMD manufactura en TMSC, el solo se encarga de los planos.

Luego, ARM le vende la licencia de esos planos a diferentes fabricantes del mundo:

- **Apple** compra licencias de ARM y fabrica sus procesadores M1, M2, M3 y los del iPhone, en especifico compra el lenguaje para que todas las aplicaciones funcionen en este chip.
- **Qualcomm** compra planos de ARM y fabrica los chips _Snapdragon_ de los teléfonos Android.
- **STMicroelectronics** compra planos de ARM para microcontroladores y fabrica la familia **STM32**.
- **Raspberry Pi** compra planos de ARM y hace el chip _RP2040_ de la Pico.

## Cortex
Cortex es la marca bajo la que diseñan el procesador, dependiendo de la tarea.


                      ARQUITECTURAS ARM CORTEX
		                        │
         ┌───────────────────────┼───────────────────────┐
         ▼                       ▼                       ▼
	    CORTEX - A              CORTEX - R              CORTEX - M
	  (Applications)            (Real-Time)          (Microcontrollers)
	  • Teléfonos, PCs        • Frenos ABS de autos   • Drones, lavadoras,
	  • Corre Linux/Android   • Quirófanos, satélites   sensores, IoT
	  • Gigabytes de RAM      • Cero tolerancia a     • Consume poquísima
	  • Gran consumo de         fallos de tiempo        energía y es
	    batería                                         determinista

Dentro de cada *familia* hay varias gamas.

- **Cortex-M0 / M0+**: Ultra simple, para cosas muy básicas como cepillos de dientes eléctricos o juguetes.
- **Cortex-M3**: Gama media de 32 bits.
- **Cortex-M4**: Gama media-alta. **Tiene instrucciones DSP (Digital Signal Processing) y una FPU.**
- **Cortex-M7**: Gama alta de altísima velocidad.

El chip que tienes en el [[CrazyFlie]] tiene adentro un núcleo **ARM Cortex-M4**.

--- 
## STM32

- **ST**: La empresa que fabricó el chip de silicio.
- **M**: Microcontroller.
- **32**: Significa que es una arquitectura nativa de **32 bits**. [[Arquitectura de Computadora]]
    - En un Arduino clásico (como el Arduino Uno), el chip es de **8 bits**. Eso significa que para sumar dos números grandes o multiplicar decimales, el procesador tiene que hacer malabares y partir el número en varios pedacitos de 8 bits.
    - En la STM32, un número entero o decimal de 32 bits entra entero en un registro y se procesa en **un solo golpe de reloj**.
### FPU 
La **FPU (Floating Point Unit)** es un procesador dedicado exclusivamente a hacer cálculos de punto flotante por hardware lo cual hace que el código sea rapidísimo. [[Operaciones de Punto Flotante]]
### Periféricos
1. **GPIO (General Purpose Input/Output)**: Los pines físicos. Los puedes programar para que saquen 3.3 V3.3 V (un 1 lógico) o 0 V0 V (un 0 lógico), o para que lean si un botón está presionado.
2. **Timers (Temporizadores de alta precisión)**: Relojes de hardware capaces de contar nanosegundos y generar las ondas de **PWM** que le dicen a los motores a qué velocidad girar, de forma 100% automática sin que la CPU tenga que estar contando a mano.
3. **Controladores de Comunicación (SPI, I2C, UART)**: Módulos dedicados a hablar con otros chips.
    - Por ejemplo, el sensor inercial (IMU) le escupe datos por **SPI** a 10 Megabits por segundo directamente a la memoria sin consumir casi CPU.

---
# RISC-V

Tanto ARM como RISC-V son  **RISC** significa: **R**educed **I**nstruction **S**et **C**omputer.
Su contraparte es **CISC**: **C**omplex **I**nstruction **S**et **C**omputer  El rey de CISC es **x86 (Intel/AMD)**.

CISC es de una filosofía de usar instrucciones más grandes. Como prepara un pastel de chocolate. Es una ventaja en que es mucho más fácil mandar instrucciones, pero el procesador por si mismo se vuelve más complejo y por lo tanto más caro.

El enfoque de RISC es hacerlo mucho más sencillo, en que solo se enfoque en los pequeños pasos. Agarrar Harina, mezclarla, etc. Esto es mucho más barato y no gasta tanto energéticamente. Hacen tareas complejas haciendolas ridículamente sencillas.

Este es el competidor directo open source de ARM, nació de la necesidad de que se necesitaba una arquitectura para poder enseñarle a los alumnos y que pudieran usarlo en sus proyectos. Nació en Berkley, y se llama five porque es el quinto proyecto de la arquitectura RISC.

Tienen grandes diferencias, RISC-V es muy modular y es 100% libre. El problema es que no está lo suficientemente maduro para que haya una transición masiva hacia RISC.

Actualmente no son muy usados pero poco a poco se usan más.

- **Western Digital y Seagate** ya fabrican discos duros y SSDs donde los chips internos que controlan los motores y la memoria flash son núcleos RISC-V.
- **Nvidia** usa pequeños núcleos RISC-V dentro de sus tarjetas gráficas para controlar el encendido y la energía.
- **Espressif** (los del famoso chip ESP32 para proyectos de electrónica) sacó el **ESP32-C3** y **ESP32-C6**, que son 100% núcleos RISC-V en vez de ARM.
