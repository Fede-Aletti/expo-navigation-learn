import { Redirect } from "expo-router";
import "./global.css";

export default function App() {
  return <Redirect href="/drawer" />;

  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-2.5">
  //       <Text className="text-3xl font-work-black text-primary">
  //         Welcome to Nativewind!
  //       </Text>
  //       <Text className="text-3xl font-work-medium text-secondary">
  //         Welcome to Nativewind!
  //       </Text>
  //       <Text className="text-3xl font-work-light text-tertiary">
  //         Welcome to Nativewind!
  //       </Text>

  //       <Link href="/products">Productos</Link>
  //     </View>
  //   </SafeAreaView>
  // );
}
