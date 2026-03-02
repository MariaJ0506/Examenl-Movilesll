import React from "react";
import {View,Text,FlatList,Image,TouchableOpacity,TextInput,Alert,} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, setQty } from "../store/slices/cartSlice";
import { clearCartStorage } from "../store/thunks/cartThunks";
import { cartStyles as styles } from "../styles/cartStyles";

//CartScreen.
//Muestra los productos agregados al carrito.
//Calcula el subtotal y total general.
//Permite eliminar, cancelar o simular pago.

export default function CartScreen() {
  const dispatch = useDispatch();
  const items = useSelector((s) => s.cart.items);

  const itemsSubtotal = items.map((x) => ({
    ...x,
    subtotal: x.price * x.qty,
  }));

  const total = itemsSubtotal.reduce((acc, x) => acc + x.subtotal, 0);

  function pay() {
    if (itemsSubtotal.length === 0) {
      Alert.alert("Carrito vacío", "Agregá productos antes de pagar.");
      return;
    }
    Alert.alert("Pago simulado", `Total pagado: $${total.toFixed(2)}`);
    dispatch(clearCartStorage());
  }

  function cancel() {
    if (itemsSubtotal.length === 0) return;
    Alert.alert("Cancelar compra", "¿Seguro que querés vaciar el carrito?", [
      { text: "No" },
      { text: "Sí", onPress: () => dispatch(clearCartStorage()) },
    ]);
  }

  function renderItem({ item }) {
    return (
      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.img} resizeMode="contain" />

        <View style={{ flex: 1 }}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>

          <Text style={styles.small}>Precio: ${item.price}</Text>

          <View style={styles.qtyRow}>
            <Text style={styles.small}>Cantidad:</Text>
            <TextInput
              style={styles.qtyInput}
              keyboardType="numeric"
              value={String(item.qty)}
              onChangeText={(t) => dispatch(setQty({ id: item.id, qty: t }))}
            />
          </View>

          <Text style={styles.sub}>Subtotal: ${item.subtotal.toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          style={styles.delBtn}
          onPress={() => dispatch(removeItem(item.id))}
        >
          <Text style={{ color: "white", fontWeight: "900" }}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={itemsSubtotal}
        keyExtractor={(x) => String(x.id)}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.empty}>No hay productos en el carrito.</Text>}
        contentContainerStyle={{ paddingBottom: 12 }}
      />

      <View style={styles.footer}>
        <Text style={styles.total}>TOTAL: ${total.toFixed(2)}</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: "#444" }]} onPress={cancel}>
            <Text style={styles.btnText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={pay}>
            <Text style={styles.btnText}>Pagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}