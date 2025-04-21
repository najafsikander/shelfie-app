import { View, useColorScheme, StyleProp, ViewStyle } from "react-native";
import { Colors } from "../../constants/Colors";
import React from "react";

const ThemedView: React.FC<React.PropsWithChildren<{ style?: StyleProp<ViewStyle> }>> = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  return <View style={[{backgroundColor: theme.background}, style]} {...props}>{children}</View>;
};

export default ThemedView;
