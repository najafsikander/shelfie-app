import { Stack } from "expo-router";
import { View, Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <>
    <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navBackground,
          },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="(auth)" options={{headerShown:false}}/>
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
      </Stack>
    </>
  );
}
