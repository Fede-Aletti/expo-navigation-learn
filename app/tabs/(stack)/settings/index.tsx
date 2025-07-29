import { CustomButton } from "@/components/shared/custom-button";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-3xl font-work-black text-primary">Settings!</Text>

        <CustomButton variant="text-only" onPress={() => router.back()}>
          Go back
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}
