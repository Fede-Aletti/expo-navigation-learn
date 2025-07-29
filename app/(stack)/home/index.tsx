
import { CustomButton } from "@/components/shared/custom-button";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-3xl font-work-black text-primary">Home!</Text>

        <Text className="text-3xl font-work-black text-primary">
          Navegar a:
        </Text>

        <View className="gap-2 mt-4">
          <Link href="/products" asChild>
            <CustomButton>Productos</CustomButton>
          </Link>
          <Link href="/profile" asChild>
            <CustomButton color="secondary">Perfil</CustomButton>
          </Link>
          <Link href="/settings" asChild>
            <CustomButton color="tertiary">Configuración</CustomButton>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
