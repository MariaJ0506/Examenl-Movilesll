# Examenl-Movilesll

Esta app la llame Fake Store App y esta desarrollada en un entorno móvil la cual permite hacer:

Autenticación del usuario 
Visualización de los productos 
Botón de categorías 
Detalle de los productos 
Carrito de compras 

Esta app usa Redux para un mejor manejo del estado global y Axios para lo que seria la Api Rest. 

Los paso a paso para crearlo fueron los siguientes:

npx create-expo-app FakeStoreApp
cd FakeStoreApp 

Con lo siguiente instale las dependencias que iba a necesitar:

npm install @reduxjs/toolkit react-redux
npm install axios
npm install @react-native-async-storage/async-storage
npm install @react-navigation/native
npm install @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context

Y una vez que ya tenia todo listo tanto en android como en visual, lo ejecute con el comando que el profe nos enseño:

npx expo start 

Las funcionalidades de la app son las siguientes:

El listado de los productos es consumido por el Api, esta con una forma en tipo catalogo y tiene un diseño bastante básico. 

El filtro por categorías es que esta de forma horizontal y se puede diferenciar y seleccionar por botones. 

El detalle del producto es que viene con la imagen, el nombre, la categoría a la que pertenece, el precio, su descripción y un botón para poder agregarlo al carrito.  

El carrito de compras viene con una cantidad en la cual se puede editar, ya sea agregar mas de ese mismo objeto o quitarle, eliminar el producto, el total de objetos, el total en dinero, un botón para cancelar la compra y otro que simula la compra. 