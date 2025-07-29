import CustomDrawer from "@/components/shared/custom-drawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";

const _layout = () => {
  return (
    <Drawer
      screenOptions={{
        overlayColor: "rgba(0, 0, 0, 0.4)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: "white",
        },
      }}
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen
        name="user/index"
        options={{
          title: "Perfil",
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={focused ? "indigo" : color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          title: "Horarios",
          drawerIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "calendar" : "calendar-outline"}
              color={focused ? "indigo" : color}
              size={size}
            />
          ),
        }}
      />
    </Drawer>
  );
};

export default _layout;
