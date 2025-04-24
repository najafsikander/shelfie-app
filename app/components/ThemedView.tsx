import { View, useColorScheme, StyleProp, ViewStyle } from "react-native";
import { Colors } from "../../constants/Colors";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView: React.FC<React.PropsWithChildren<{ style?: StyleProp<ViewStyle>, safe?:boolean }>> = ({ style, safe=false, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  if(!safe)return( <View style={[{backgroundColor: theme.background}, style]} {...props}>{children}</View>)

  const insets = useSafeAreaInsets();
  return(
    <View style={[{backgroundColor: theme.background, paddingTop:insets.top, paddingBottom:insets.bottom}, style]} {...props}>{children}</View>
  )
};

export default ThemedView;
