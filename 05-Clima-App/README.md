# Clima App
Esta es una aplicacion de consola diseñada para trabajar con 2 apis distintas las cuales realizaran la busqueda de un lugar y retornara su informacion geografica, y la otra devolvera el estado del clima mediante la latitud y la longitud del lugar seleccionado por el usuario.

## Funciones
Esta aplicacion tiene una interfaz de usuario en sonsola en la cual tendras las siguientes opcciones:

* Buscar Ciudad
* Historial

Durante la busqueda de la ciudad se despliega una lista con lugares relacionados con los que pide el usuario reflejados en una lista dinamica para la seleccion de la misma.

El historial guarda el ultimo lugar buscando creando una lista.

## APIS
Api de geolocalizacion: https://www.mapbox.com

Api del clima: https://openweathermap.org

! IMPORTANTE: Al momento de instalar la app es necesario tener las API KEYS asignadas en el archivo .env

# Dependencias

```
axios: ^0.24.0
colors ^1.4.0
dotenv: ^10.0.0
inquirer: ^8.2.0
```