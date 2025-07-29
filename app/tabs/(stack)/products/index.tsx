import { products } from "@/store/products-store";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

export default function ProductsScreen() {
  return (
    <View className="flex-1 p-4 pb-10 gap-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-4">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="text-lg font-work-medium">{item.description}</Text>

            <View className="flex-row justify-between">
              <Text className="text-lg font-work-black">{item.price}</Text>
              <Link href={`/tabs/products/${item.id}`} asChild>
                <Text className="text-lg font-work-medium text-primary">
                  Ver más
                </Text>
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
}
