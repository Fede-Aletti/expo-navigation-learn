import React from "react";
import { Pressable, Text, View, type PressableProps } from "react-native";

interface CustomButtonProps extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  className?: string;
  variant?: "contained" | "text-only";
}

export const CustomButton = React.forwardRef(
  (
    {
      children,
      color = "primary",
      className,
      variant = "contained",
      onPress,
      onLongPress,
      ...props
    }: CustomButtonProps,
    ref: React.Ref<View>
  ) => {
    const btnColor = {
      primary: "bg-primary",
      secondary: "bg-secondary",
      tertiary: "bg-tertiary",
    };

    const textColor = {
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    };

    if (variant === "text-only") {
      return (
        <Pressable
          className={`p-3 ${className}`}
          onPress={onPress}
          onLongPress={onLongPress}
          ref={ref}
        >
          <Text className={`text-center font-work-medium ${textColor[color]}`}>
            {children}
          </Text>
        </Pressable>
      );
    }

    return (
      <Pressable
        className={`p-3 rounded-lg ${btnColor[color]} ${className} active:opacity-90`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className="text-white text-center font-work-medium">
          {children}
        </Text>
      </Pressable>
    );
  }
);
CustomButton.displayName = "CustomButton";
