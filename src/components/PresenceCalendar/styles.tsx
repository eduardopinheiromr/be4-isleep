import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  weekGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  day: {
    width: "14.28%",
    height: 60,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  monthDisplay: {
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  monthString: {
    textTransform: "capitalize",
  },
  currentDay: {
    width: "14.28%",
    height: 60,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
    fontWeight: "bold",
    backgroundColor: "lightgreen",
  },
  weekDay: {
    width: "14.28%",
    height: 60,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
