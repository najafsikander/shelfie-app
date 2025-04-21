import { StyleSheet, useColorScheme, View } from 'react-native'
import { Colors } from '../../constants/Colors'
import React from 'react'

import { ViewStyle } from 'react-native'

interface ThemedCardProps {
  style?: ViewStyle;
  [key: string]: any;
}

const ThemedCard: React.FC<ThemedCardProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? "light"]

  return (
    <View 
      style={[{ backgroundColor: theme.uiBackground}, styles.card, style]}
      {...props}
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20
  }
})