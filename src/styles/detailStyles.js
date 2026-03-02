import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const detailStyles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 10,
    backgroundColor: COLORS.background,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    height: 240,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "900",
    color: COLORS.dark,
  },

  category: {
    color: COLORS.gray,
    fontWeight: "700",
    textTransform: "capitalize",
  },

  price: {
    fontSize: 22,
    fontWeight: "900",
    color: COLORS.primary,
  },

  box: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },

  section: {
    fontWeight: "900",
    marginBottom: 6,
  },

  desc: {
    color: "#333",
    lineHeight: 20,
  },

  btn: {
    marginTop: 10,
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  btnText: {
    color: COLORS.white,
    fontWeight: "900",
  },
});