import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAuth, clearAuth, setLoading } from "../slices/authSlice";

const AUTH_KEY = "FAKESTORE_AUTH";

 //loadAuthFromStorage.
 //Carga la sesión desde AsyncStorage al iniciar la app.
 
export const loadAuthFromStorage = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const raw = await AsyncStorage.getItem(AUTH_KEY);
    if (raw) dispatch(setAuth(JSON.parse(raw)));
  } finally {
    dispatch(setLoading(false));
  }
};

/*
  loginThunk (simulado)
  Acepta SOLO: quesoquemado12 / 1234aa
  Genera token ficticio
  Guarda en AsyncStorage
  Actualiza Redux
 */

export const loginThunk = (username, password) => async (dispatch) => {
  const u = String(username || "").trim();
  const p = String(password || "");

  if (u === "quesoquemado12" && p === "1234aa") {
    const authData = {
      token: "token_quesoquemado_2026",
      user: { username: u },
    };

    await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(authData));
    dispatch(setAuth(authData));
    return;
  }

  throw new Error("Credenciales inválidas");
};

/*
  logoutThunk
  Elimina datos del usuario del almacenamiento local.
  También limpia el estado global.
 */

export const logoutThunk = () => async (dispatch) => {
  await AsyncStorage.removeItem(AUTH_KEY);
  dispatch(clearAuth());
};