import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { styles } from "./index-styles";

export const Container: FunctionComponent = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};
