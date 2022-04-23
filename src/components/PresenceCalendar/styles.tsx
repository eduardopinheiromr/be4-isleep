import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  weekGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  day: {
    width: "14.28%",
    height: "60px",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  month: {
    width: "100%",
    height: "50px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    textTransform: "capitalize",
  },
  currentDay: {
    fontWeight: "bold",
    borderColor: "lightgreen",
    backgroundColor: "lightgreen",
    height: "100%",
  },
  weekDay: {
    width: "14.28%",
    height: "60px",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
});
