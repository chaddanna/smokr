import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Container } from "../../../components/Container";
import { EntryData, EntriesContext } from "../../EntriesContext";
import { ToastContext, TOAST_TYPES } from "../../ToastContext";
import { Field } from "./Field";
import { styles } from "./index-styles";

export const CreateEntry = () => {
  const { control, handleSubmit, errors, reset } = useForm();
  const { addEntry } = useContext(EntriesContext);
  const { displayToast, setMessage, setType } = useContext(ToastContext);
  const fields = [
    { name: "title", type: "text" },
    { name: "date", type: "date" },
    { name: "cooker", type: "text" },
    { name: "notes", type: "text" },
  ];
  function handlePress(data: EntryData) {
    const newEntry: EntryData = {
      ...data,
      id: new Date().getTime().toString(),
    };
    addEntry(newEntry);
    setMessage(`Entry "${data.title}" was created`);
    setType(TOAST_TYPES.SUCCESS);
    displayToast();
    reset();
  }
  return (
    <Container>
      <View style={styles.createEntry}>
        {fields.map((f) => (
          <Controller
            key={f.name}
            control={control}
            name={f.name}
            rules={{ required: `${f.name} is required` }}
            defaultValue=""
            render={({ onChange, onBlur, value }) => (
              <Field
                name={f.name}
                type={f.type}
                onBlur={onBlur}
                value={value}
                onChange={(value) => onChange(value)}
                error={errors[f.name]}
              />
            )}
          />
        ))}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handlePress)}
        >
          <Text style={styles.buttonText}>Add Entry</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};
