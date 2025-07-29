import { CustomButton } from "@/components/shared/custom-button";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className="text-3xl font-work-black text-primary">Profile!</Text>

        <CustomButton variant="text-only" onPress={() => router.back()}>
          Go back
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}
