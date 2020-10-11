import { StyleSheet } from "react-native";
import { colors, typography } from "../../../../styles";

export const styles = StyleSheet.create({
  field: {
    marginTop: 14,
    width: "100%",
  },
  label: {
    color: colors.text,
    fontSize: typography.text,
    textTransform: "capitalize",
    marginBottom: 4,
  },
  input: {
    backgroundColor: colors.white,
    borderWidth: 0,
    padding: 10,
    alignItems: "flex-start",
    width: "100%",
  },
  errorText: {
    color: colors.red,
    fontSize: typography.meta,
    marginTop: 4,
  },
});
