# FLAPP ECOMMERCE

## Supuestos

1) Al momento de generar el carro de manera aleatoria, se decidió crearlo con una cantidad de elementos en un rango entre 1 y 6 ya que supuse que ese rango es acertado para el motivo de la tarea en términos de simplicidad, pero sin sobre simplificar. También, si se aumentaba aún más el número de productos, cada vez era menos probable enfrentarse a un caso de éxito, por lo que se complicaba el debuggeo.
2) Del mismo modo, se decidió que la cantidad de items de cada producto sea un número entre 1 y 5 por las mismas razones.
3) Al momento de hacer el request POST al endpoint http://localhost:5000/api/cart se asume que el producto existe dentro de la lista total de productos, ya que de ahí se obtiene en un principio (Al seleccionar la muestra de manera aleatoria).
4) En el punto donde se pide mostrar el descuento total en consola, se asume que se refiere al descuento unitario y no acumulado.
5) Se le hizo una pequeña modificación al body del request POST al endpoint http://localhost:5000/api/cart respecto a lo que se pedía en el enunciado. Esto se hizo para facilitar la implementación de la tarea y no afecta ni la funcionalidad ni el rendimiento de la aplicación web.
6) En la vista de checkout se hizo un esfuerzo por imitar un e-commerce. Pese a que el resultado es bastante simple, creo que cumple con los criterios de usabilidad y user-experience, por lo que no se dedicó más tiempo a seguir desarrollando.

## Execute

En el directorio raíz, en primer lugar ejecutar el comando
'''bash
make install
'''

Luego para correr el backend se ejecuta
'''bash
make start-backend
'''

Y por último, para le frontend
'''bash
make start-frontend
'''

Todo esto debe realizarse en el directorio raíz.