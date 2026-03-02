import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";

//AppNavigator
//Controla la navegación principal de la aplicación.
//Muestra Login si no hay token.
//Muestra la tienda una vez que el usuario este autenticado.

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { token, loading } = useSelector((s) => s.auth);

  if (loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!token ? (
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Fake Store - Login" }} />
        ) : (
          <>
            <Stack.Screen name="Products" component={ProductsScreen} options={{ title: "Fake Store App" }} />
            <Stack.Screen name="Detail" component={ProductDetailScreen} options={{ title: "Detalle:" }} />
            <Stack.Screen name="Cart" component={CartScreen} options={{ title: "Carrito" }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}