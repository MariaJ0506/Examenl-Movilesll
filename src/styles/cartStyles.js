import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const cartStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: COLORS.background,
  },

  row: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    padding: 10,
    marginBottom: 10,
    gap: 10,
    backgroundColor: COLORS.white,
    elevation: 2,
  },

  img: {
    width: 70,
    height: 70,
  },

  title: {
    fontWeight: "800",
    color: COLORS.dark,
  },

  small: {
    color: COLORS.gray,
    marginTop: 4,
    fontWeight: "600",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 6,
  },

  qtyInput: {
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: 60,
    textAlign: "center",
    backgroundColor: COLORS.white,
  },

  sub: {
    marginTop: 6,
    fontWeight: "900",
    color: COLORS.primary,
  },

  delBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: COLORS.danger,
    alignItems: "center",
    justifyContent: "center",
  },

  empty: {
    textAlign: "center",
    marginTop: 30,
    fontWeight: "700",
    color: COLORS.gray,
  },

  footer: {
    borderTopWidth: 1,
    borderColor: "#eee",
    paddingTop: 10,
  },

  total: {
    fontSize: 18,
    fontWeight: "900",
    textAlign: "right",
    marginBottom: 10,
  },

  actions: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-end",
  },

  btn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },

  btnText: {
    color: COLORS.white,
    fontWeight: "900",
  },
});