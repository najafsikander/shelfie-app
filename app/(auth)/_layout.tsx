import { Stack } from "expo-router"
import { StatusBar } from "react-native"
import { useUser } from "../../hooks/useUser";

export default function AuthLayout() {
  const {user} = useUser();
  console.log("AuthLayout User: ", user);
  return (
    <>
      <StatusBar/>
      <Stack 
        screenOptions={{ headerShown: false, animation: "none" }} 
      />
    </>
  )
}