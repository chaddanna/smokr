import React, { useContext } from "react";
import { View, Text } from "react-native";
import { EntriesContext } from "../../EntriesContext";
import { Container } from "../../../components/Container";
import { Entry } from "./Entry";
import { styles } from "./index-styles";

export const Entries = () => {
  const { entries } = useContext(EntriesContext);
  return (
    <Container>
      <View style={styles.entries}>
        {entries.length > 0 ? (
          entries.map((e) => <Entry key={e.id} entry={e} />)
        ) : (
          <View>
            <Text style={styles.emptyText}>No entries were found.</Text>
          </View>
        )}
      </View>
    </Container>
  );
};
