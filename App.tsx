import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/modules/Navigation";
import { EntriesWrapper } from "./src/modules/EntriesContext";
import { ToastWrapper } from "./src/modules/ToastContext";

export default function App() {
  return (
    <NavigationContainer>
      <ToastWrapper>
        <EntriesWrapper>
          <Navigation />
        </EntriesWrapper>
      </ToastWrapper>
    </NavigationContainer>
  );
}
