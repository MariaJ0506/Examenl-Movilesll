import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,Alert,ActivityIndicator,} from "react-native";
import { useDispatch } from "react-redux";
import { loginThunk } from "../store/thunks/authThunks";
import { loginStyles as styles } from "../styles/loginStyles";

export default function LoginScreen() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("quesoquemado12");
  const [password, setPassword] = useState("1234aa");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!username.trim() || !password) {
      Alert.alert("Faltan datos", "Ingresá usuario y contraseña.");
      return;
    }

    try {
      setLoading(true);
      await dispatch(loginThunk(username.trim(), password));
    } catch (e) {
      Alert.alert("Error", "Credenciales inválidas o problema de red.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fake Store App</Text>
      <Text style={styles.subtitle}>Inicio de sesión</Text>

      <Text style={styles.label}>Usuario</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        style={styles.input}
        placeholder="username"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholder="password"
      />

      <TouchableOpacity style={styles.btn} onPress={handleLogin} disabled={loading}>
        {loading ? <ActivityIndicator /> : <Text style={styles.btnText}>Ingresar</Text>}
      </TouchableOpacity>

      <Text style={styles.note}>Usuario: quesoquemado12</Text>
      <Text style={styles.note}>Contraseña: 1234aa</Text>
    </View>
  );
}