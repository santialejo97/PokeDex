<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<hr>

# Ejecutar en Desarrollo

1. Clonar el respositorio del proyecto que se encuentra en gitHub.
2. Ejecutar el comando.

```
yarn install
```

3. Tener nest CLI installado

```
npm -g install @nestjs/cli
```

4.  Levantar la base de datos.

```
docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar la copia a **.env**.

6. Llenar las variables de entorno definidas en el **.env**.

7. Ejecutar la aplicacion de desarrollo con el siguiente comando.

```
yarn start:dev
```

8. Reconstruir la base de datos con la seed

```
http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- NestJS
- Postman
