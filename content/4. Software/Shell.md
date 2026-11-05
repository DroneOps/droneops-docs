Es la capa arriba del kernel. **Kernel** es la parte que se encarga del hardware. El shell es la parte superior que actúa como interfaz entre el usuario y el kernel. Todo en conjunto forma la [[Unix & GNU-Linux]] junto con los programas ya preinstalados.
### Interpretes de Shell 
Hay muchos interpretes para Shell pero la cosa es que todos siguen la convención POSIX, que es un standard que toma como base el lenguaje Bourne Shell (Sh).
#### Bash
Bash  Bourne Again SHell es un intérprete de comandos shell. 
Es un [[Lenguaje Interpretado y Tipado]] 
### Zsh
Encima de bash lo que hace es mejorar ciertas funciones.
# Comandos básicos a conocer

```bash
# moverse en el directorio
pwd # imprime la ruta actual

ls -la # imprime archivos oculos
cd
mkdir
touch
cp
mv
rm 

# Inspección rápida
cat 
head -n 10 <archivo> #imprime las primeras 10 lineas de codifo
tail -n 10 <archivo> # imprime las ultimas 10
tail -f app.log # se queda escuchando y muestra las lineas que salen en el codigo 

grep "palabra" app.log # busca una palabra en un arcchivo

| # pipeline, permite tomar una salida de un comando y pasarla como entrada al siguiente.

cat app.log | grep "500" | wc -l # delo que sale en cat busca la palabra grep y cuenca cuantas veeces sucede con wc

python script.py > salida.txt # sobreescribe lo que hay en salida.txt con la salida del script.

python script.py >> salida.txt #  añade al final del archivo lo qeu sale


chmod +x script.sh # da permiso de ejecucion 

ps aux # muestra los procesos que están corriendo

kill -9 <PID> # mata el proceso con su ID



```
## Código de bash
Todo el código que corras se queda en el proceso de bash que ejecutes
### Sintaxis Básica
```bash
variable="Hola"      # Asignación correcta
echo "$variable"     # Acceso al valor
```
####  Condicionales 
```bash
if [[ "$variable" == "Hola" ]]; then
    echo "Coincide"
elif [[ "$variable" == "Mundo" ]]; then
    echo "Otro caso"
else
    echo "No coincide"
fi
```
#### Ciclos
```bash
for elemento in item1 item2 item3; do
    echo "$elemento"
done
```
```bash
contador=0
while [[ $contador -lt 5 ]]; do
    echo "$contador"
    ((contador++))   # Evaluación aritmética
done
```
Funciones
```bash
mi_funcion() {
    local parametro1="$1"   # Argumento posicional
    echo "Recibido: $parametro1"
    return 0
}

mi_funcion "argumento"
```
### Comandos Extra
```bash
ctrl + r # para buscar en terminal
man <comando> # para abrir el manual de cierto comando
sed ## es un comando para buscar y remplazar las palabras por otras.
```
