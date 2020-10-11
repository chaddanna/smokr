import { StyleSheet } from "react-native";
import { colors } from "../../../../styles";

export const styles = StyleSheet.create({
  toast: {
    backgroundColor: colors.white,
    borderRadius: 4,
    borderLeftWidth: 4,
    flexDirection: "row",
    paddingHorizontal: 18,
    paddingVertical: 12,
    top: 60,
    left: 20,
    right: 20,
    position: "absolute",
    zIndex: 99,
  },
  message: {
    marginLeft: 12,
  },
});
