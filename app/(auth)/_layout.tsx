import { Stack } from "expo-router"
import { StatusBar } from "react-native"
import { useUser } from "../../hooks/useUser";
import GuestOnly from "../components/auth/GuestOnly";

export default function AuthLayout() {
  const {user} = useUser();
  console.log("AuthLayout User: ", user);
  return (
    <GuestOnly>
      <StatusBar/>
      <Stack 
        screenOptions={{ headerShown: false, animation: "none" }} 
      />
    </GuestOnly>
  )
}