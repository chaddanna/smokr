import { StyleSheet } from "react-native";
import { colors } from "../../../styles";

export const styles = StyleSheet.create({
  createEntry: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: colors.text,
    fontSize: 16,
  },
});
