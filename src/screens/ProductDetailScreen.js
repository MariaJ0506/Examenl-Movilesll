import React, { useEffect, useState } from "react";
import {View,Text,Image,TouchableOpacity,ActivityIndicator,ScrollView,Alert,} from "react-native";
import { api } from "../api/fakestore";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";
import { detailStyles as styles } from "../styles/detailStyles";

//ProductDetailScreen.
//Muestra la información detallada del producto seleccionado.
//Permite agregar el producto al carrito.


export default function ProductDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, [id]);

  function addToCart() {
    if (!product) return;

    dispatch(
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );

    Alert.alert("Agregado", "Producto agregado al carrito.");
    navigation.navigate("Cart");
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Cargando detalle...</Text>
      </View>
    );
  }

  if (!product) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.img} resizeMode="contain" />

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.category}>Categoría: {product.category}</Text>
      <Text style={styles.price}>${product.price}</Text>

      <View style={styles.box}>
        <Text style={styles.section}>Descripción</Text>
        <Text style={styles.desc}>{product.description}</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={addToCart}>
        <Text style={styles.btnText}>Agregar al carrito</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}