# ¿Somos familiares?

Este proyecto consta del frontend de la aplicación ¿Somos familiares?, empleada en el proyecto del curso Administración de Proyectos de Sistemas. ¿Somos familiares? es una aplicación que calcula la probabilidad de que dos personas sean familiar, además de calcular el posible paretesco de ellas. Recibe dos imágenes de rostros y las almacena en un bucket de AWS S3, luego envía la dirección de estas imágenes a Azure Cognitive Services para obtener un Face ID y emplearlo finalmente para obtener el porcentaje de igualdad y el posible parentesco entre las personas de las imágenes enviadas.

## Requisitos para levantar el proyecto localmente

<img src="https://img.shields.io/badge/%2B14.18.1-Node.js-green" /> <img src="https://img.shields.io/badge/%2B17.0.2-React.js-33caff" /> <img src="https://img.shields.io/badge/%2Br134-Three.js-black" />

## Levantar el proyecto localmente

>Instalar dependencias
```
npm install  
```
>Iniciar servidor
```
npm start  
```

Esto inicia la aplicación en modo de desarrollo.\
Se debe navegar hacia [http://localhost:3000](http://localhost:3000) para verla en el navegador.

## Deployment

Esta página corre en un entorno de [AWS Amplify](https://master.dajdzxaodznkg.amplifyapp.com/).
