import React, { useEffect, useMemo, useState } from "react";
import {View,Text,FlatList,TouchableOpacity,Image,ActivityIndicator,} from "react-native";
import { api } from "../api/fakestore";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../store/thunks/authThunks";
import { productsStyles as styles } from "../styles/productsStyles";


//ProductsScreen
//Muestra el listado de los productos.
//Permite filtrar por categoría.
//Consume API mediante Axios.
 

export default function ProductsScreen({ navigation }) {
  const dispatch = useDispatch();
  const username = useSelector((s) => s.auth.user?.username);

  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadCategories() {
    const res = await api.get("/products/categories");
    setCategories(res.data || []);
  }

  async function loadProducts(category) {
    setLoading(true);
    try {
      const url =
        category === "all"
          ? "/products"
          : `/products/category/${encodeURIComponent(category)}`;

      const res = await api.get(url);
      setProducts(res.data || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCategories();
    loadProducts("all");
  }, []);

  const categoryList = useMemo(() => ["all", ...categories], [categories]);

  function renderCategory(cat) {
    const active = selected === cat;

    return (
      <TouchableOpacity
        onPress={() => {
          setSelected(cat);
          loadProducts(cat);
        }}
        style={[styles.catBtn, active && styles.catBtnActive]}
      >
        <Text style={[styles.catText, active && styles.catTextActive]}>
          {cat === "all" ? "Todos" : cat}
        </Text>
      </TouchableOpacity>
    );
  }

  function renderProduct({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Detail", { id: item.id })}
      >
        <Image source={{ uri: item.image }} style={styles.img} resizeMode="contain" />
        <Text numberOfLines={2} style={styles.pTitle}>
          {item.title}
        </Text>
        <Text style={styles.price}>${item.price}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Fake Store App</Text>
        <Text style={styles.headerSub}>{username ? `Usuario: ${username}` : ""}</Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.sectionTitle}>Categorías:</Text>

      <FlatList
        data={categoryList}
        horizontal
        keyExtractor={(x) => x}
        renderItem={({ item }) => renderCategory(item)}
        style={{ maxHeight: 70, marginBottom: 12 }}
        contentContainerStyle={{ paddingHorizontal: 4 }}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.topButtons}>
        <TouchableOpacity style={styles.cartBtn} onPress={() => navigation.navigate("Cart")}>
          <Text style={styles.btnText}>Carrito</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutBtn} onPress={() => dispatch(logoutThunk())}>
          <Text style={styles.btnText}>Salir</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
          <Text>Cargando productos...</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(x) => String(x.id)}
          renderItem={renderProduct}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      )}

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>Primera Prueba Parcial</Text>
        <Text style={styles.footerSub}>Desarrolla por:</Text>
        <Text style={styles.footerSub}>María Enríquez</Text>
      </View>
    </View>
  );
}