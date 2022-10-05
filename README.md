# microservice-employees-node-js

Elaborar un microservicio para la tabla empleados el cual sea capaz de Insertar, actualizar, borrar y consultar CRUD, los puertos por defecto, usuario, clave y nombre de la base de datos son:

PORT=1234
database_port=5432
databasename= employees
datauser: postgres
clave: Clave1234

## Instalación

```
git clone https://github.com/sebasam/microservice-employees-node-js.git

cd microservice-employees-node-js

npm i
```

## Ir a la carpeta src

```
cd src
```

## Migrar la base

``` bash
npx sequelize-cli db:migrate
```

## Seeders

``` bash
npx sequelize-cli db:seed:all
```

Volver a la carpeta principal con cd .. 
``` bash
cd ..
```

y ejecutar el comando

``` bash
npm test
```

## Requerimientos técnicos

**1. Modelado de Base de Datos**
* **Departamento:** deberá tener,
    * codigo.
    * Nombre.
    * Presupuesto.
* **Empleado:** deberá tener,
    * codigo.
    * nif.
    * Nombre.
    * Apellido1.
    * Apellido2 (opcional).
    * Departamento asociado.
    
 **3. Endpoints**

Para los Departamentos se utilizarán los siguientes endpoints:
* GET /api/departments Trae todos los departamentos (utilizando el seeder anterior hará que cuente con 5, de lo contrario también pueden ser creados).
* POST /api/departments Enviando un nombre de departamento y un presupuesto podremos crearlo.
        nombre:
        presupuesto:
*DELETE /api/departments/:id Elimina el departamento sí existe.

Para los Empleados se utilizarán los siguientes endpoints:
* GET /api/employees Trae todos los empleados.
* GET /api/employees/:id Consulta a un empleado por ID.
* POST /api/employees Crea un nuevo empleado, requiere parametros como el nif(Usuario único), nombre, apellido1, apellido2(opcional) y el codigo del departamento para el cual trabaja.

* DELETE /api/employees/delete/:id Elimina un empleado por su ID sí existe.
* UPDATE /api/employees/update/:id Actualiza un empleado por su ID sí existe, se pueden actualizar los campos nif y codigo_departamento.

Para la persistencia de la base de datos, se implementó softDelete.

En la carpeta de collections se encuentran los endpoints de POSTMAN debidamente documentados para su uso respectivo.
