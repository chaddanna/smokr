import React, { FunctionComponent } from "react";
import { View, Text } from "react-native";
import { EntryData } from "../../../EntriesContext";
import { styles } from "./index-styles";

type EntryProps = {
  entry: EntryData;
};

export const Entry: FunctionComponent<EntryProps> = ({ entry }) => {
  return (
    <View style={styles.entry}>
      <Text>
        {entry.id}: {entry.title}, {entry.date}, {entry.cooker} {entry.notes}
      </Text>
    </View>
  );
};
