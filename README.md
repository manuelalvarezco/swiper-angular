# SwiperAngular

Este proyecto está realizado con la version 8.3.8.

## Development server

Para instalar las dependencias se debe correr el comando`npm install`

## Code scaffolding
Comando `ng serve` pacra correr el desarrollo en `http://localhost:4200/`. 

## Procedimiento

- Se instala la librería de Swiper `npm install swipe --save`
- Se incluye la librería en los estilos del angular.json `./node_modules/swiper/css/swiper.css`

## Api paises

Para este ejemplo se utiliza una Api RestCountries `https://restcountries.eu/rest/v2/lang/es` en un servicio de ejemplo
el cual es llamado en en el app.component.ts y renderisado con un ngFor en la vista para mostrar la imagen de cada pais.
