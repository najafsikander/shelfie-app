
import { Colors } from '../../constants/Colors'
import { Text, useColorScheme, StyleProp, TextStyle } from 'react-native'

const ThemedText = ({ style, title = false, ...props }: { style?: StyleProp<TextStyle>; title?: boolean; [key: string]: any }) => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme ?? "light"]

  const textColor = title ? theme.title : theme.text

  return (
    <Text 
      style={[{ color: textColor }, style]}
      {...props}
    />
  )
}

export default ThemedText