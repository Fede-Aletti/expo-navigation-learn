import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView scrollEnabled={false} {...props}>
      <View className="justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="justify-center items-center bg-white rounded-full size-24">
          <Text className="text-primary font-work-black text-3xl">FA</Text>
        </View>
      </View>

      {/* DRAWER ITEMS */}

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
