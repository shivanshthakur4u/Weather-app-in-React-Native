import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const Gradient = ({children}) => {
  return (
    <LinearGradient
    className="w-[100%] h-[100%]"
  
    colors={["#17184c", "#17184c"]}
  >
  {children}
  </LinearGradient>
  )
}

export default Gradient