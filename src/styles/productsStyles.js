import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const productsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.background,
  },

  headerContainer: {
    alignItems: "center",
    marginBottom: 6,
  },

  headerTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: COLORS.primary,
  },

  headerSub: {
    fontSize: 12,
    fontWeight: "700",
    color: COLORS.gray,
    marginTop: 3,
  },

  divider: {
    height: 2,
    backgroundColor: COLORS.primary,
    marginVertical: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 8,
    color: COLORS.dark,
  },

  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  cartBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },

  logoutBtn: {
    backgroundColor: "#444",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },

  btnText: {
    color: COLORS.white,
    fontWeight: "800",
  },

  catBtn: {
  borderWidth: 1,
  borderColor: "#bbb",
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 18,
  marginRight: 8,
  backgroundColor: COLORS.white,
  alignItems: "center",
  justifyContent: "center",
  },

  catBtnActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  catText: {
  color: "#333",
  fontWeight: "700",
  fontSize: 12,
  textTransform: "capitalize",
  },

  catTextActive: {
    color: COLORS.white,
  },

  card: {
    width: "48%",
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    elevation: 3,
  },

  img: {
    height: 110,
    width: "100%",
  },

  pTitle: {
    marginTop: 8,
    fontWeight: "600",
    color: COLORS.dark,
  },

  price: {
    marginTop: 6,
    fontWeight: "900",
    fontSize: 16,
    color: COLORS.primary,
  },

  footer: {
  backgroundColor: COLORS.primary,
  paddingVertical: 8,
  paddingHorizontal: 10,
  borderRadius: 10,
  marginTop: 6,
  },

  footerTitle: {
    color: COLORS.white,
    fontWeight: "900",
    fontSize: 14,
    textAlign: "center",
  },

  footerSub: {
    color: COLORS.white,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 1,
    fontSize: 11,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});