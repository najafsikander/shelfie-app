import { DimensionValue, View } from 'react-native'

const Spacer = ({ width = "100%", height = 40 }) => {
  return (
    <View style={{ width: width as DimensionValue, height }} />
  )
}

export default Spacer