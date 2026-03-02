import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    justifyContent: "center",
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: COLORS.primary,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 18,
    color: COLORS.gray,
  },
  label: {
    marginTop: 10,
    fontWeight: "700",
    color: COLORS.dark,
  },
  input: {
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 12,
    padding: 12,
    marginTop: 6,
    backgroundColor: COLORS.white,
  },
  btn: {
    marginTop: 18,
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  btnText: {
    color: COLORS.white,
    fontWeight: "900",
    fontSize: 16,
  },
  note: {
    marginTop: 14,
    color: COLORS.gray,
    fontSize: 12,
    textAlign: "center",
  },
});