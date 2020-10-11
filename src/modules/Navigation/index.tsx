import "react-native-gesture-handler";
import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { CreateEntry } from "../CreateEntry";
import { Entries } from "../Entries";
import { colors } from "../../styles";

const Tab = createBottomTabNavigator();

enum Routes {
  Create = "Create",
  Entries = "Entries",
}

type Route = {
  name: Routes;
  component: FC;
  options?: {};
};

type Icons = {
  [key: string]: string;
};

export function Navigation() {
  const icons: Icons = {
    [Routes.Create]: "ios-checkbox-outline",
    [Routes.Entries]: "ios-list",
  };
  const routes: Route[] = [
    { name: Routes.Create, component: CreateEntry },
    { name: Routes.Entries, component: Entries },
  ];
  return (
    <Tab.Navigator
      initialRouteName={Routes.Create}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.text,
        style: {
          backgroundColor: colors.white,
          paddingVertical: 10,
        },
      }}
      screenOptions={({ route: { name } }) => ({
        tabBarIcon: (styles) => <Ionicons name={icons[name]} {...styles} />,
      })}
    >
      {routes.map((r) => (
        <Tab.Screen key={r.name} {...r} />
      ))}
    </Tab.Navigator>
  );
}
