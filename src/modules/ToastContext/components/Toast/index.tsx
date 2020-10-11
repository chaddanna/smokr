import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TOAST_TYPES } from "../../types";
import { colors } from "../../../../styles";
import { styles } from "./index-styles";

export type ToastProps = {
  message: string;
  type: TOAST_TYPES;
};

export const Toast: FunctionComponent<ToastProps> = ({ message, type }) => {
  const iconStyles = {
    [TOAST_TYPES.SUCCESS]: {
      name: "md-checkmark-circle",
      color: colors.green,
    },
    [TOAST_TYPES.WARNING]: {
      name: "md-checkmark-circle",
      color: colors.yellow,
    },
    [TOAST_TYPES.ERROR]: {
      name: "md-checkmark-circle",
      color: colors.red,
    },
  };
  return (
    <View style={{ ...styles.toast, borderColor: iconStyles[type].color }}>
      <Ionicons
        name={iconStyles[type].name}
        color={iconStyles[type].color}
        size={18}
      />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};
