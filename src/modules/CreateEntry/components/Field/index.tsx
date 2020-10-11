import React, { FunctionComponent } from "react";
import { FieldError } from "react-hook-form";
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  View,
  Text,
  TextInput,
} from "react-native";
import DatePicker from "react-native-datepicker";
import { styles } from "./index-styles";

type FieldProps = {
  name: string;
  type: string;
  value: string;
  onChange: (text: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  error: FieldError;
};

export const Field: FunctionComponent<FieldProps> = ({
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
}) => (
  <View style={styles.field}>
    <Text style={styles.label}>{name}</Text>
    {type === "date" ? (
      <DatePicker
        style={{ width: "100%" }}
        date={value}
        mode="date"
        format="ll"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateInput: { ...styles.input },
        }}
        onDateChange={onChange}
      />
    ) : (
      <TextInput
        style={styles.input}
        value={value}
        onBlur={onBlur}
        onChangeText={onChange}
      />
    )}
    {error && <Text style={styles.errorText}>{error.message}</Text>}
  </View>
);
