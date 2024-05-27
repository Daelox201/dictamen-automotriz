import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 90,
  },
  date: {
    fontSize: 11,
    marginBottom: 10,
    textAlign: "right",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 10,
  },
  section_title: {
    marginBottom: 10,
    fontSize: 11,
  },
  tableValuations: {
    width: "60%",
    alignSelf: "center",
  },
  tableMainData: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#eaeaea",
  },
  tableRow: {
    height: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  tableRowBorder: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "black",
  },
  tableRowRight: {
    paddingRight: 2,
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: "black",
  },
  tableCellHeader: {
    width: "20%",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "right",
  },
  tableCellHeaderValue: {
    width: "40%",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "right",
  },
  tableCellHeaderBlue: {
    width: "20%",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center",
    color: "blue",
  },
  tableCell: {
    width: "30%",
    fontWeight: "normal",
    fontSize: 11,
  },
  tableCellData: {
    width: "20%",
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 10,
  },
  hologram: {
    textAlign: "center",
    fontSize: 16,
    color: "blue",
  },
  footer: {
    textAlign: "center",
    marginTop: 35,
  },
  footer_textBold: {
    fontSize: 11,
    fontWeight: "bold",
  },
  footer_textNormal: {
    fontSize: 11,
    fontWeight: "light",
    marginBottom: 5,
  },
  firm: {
    alignSelf: "center",
    width: "50%",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    marginBottom: 5,
  },
  logoHidalgo: {
    position: 'absolute', // Posiciona el logo de forma absoluta
    top: 15, // Ajusta la distancia desde la parte superior
    left: 30, // Ajusta la distancia desde la izquierda
    width: 100, // Ancho del logo
    height: 50, // Alto del logo
  },
  logoUpp: {
    position: 'absolute', // Posiciona el logo de forma absoluta
    top: 5, // Ajusta la distancia desde la parte superior
    left: 450, // Ajusta la distancia desde la izquierda
    width: 160, // Ancho del logo
    height: 80, // Alto del logo
  },

  logo: {
    width: '100%', // Ajusta el ancho del logo al 100%
    height: '100%', // Ajusta el alto del logo al 100%
  },
});
