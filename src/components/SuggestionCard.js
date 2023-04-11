import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SuggestionCard = ({name,country}) => {
    const navigation = useNavigation()
    const userData= JSON.stringify({Name: name, Country: country})

    const handlePress = async () => {
      try {
        await AsyncStorage.setItem("userData", userData)
        navigation.navigate("HomeScreen")
      } catch (error) {
        console.log(error)
      }
    }
  return (
   
    <View className="flex-1">
        <TouchableOpacity className="bg-white/75 ml-6  rounded-2xl w-[90%] h-14 justify-between flex-row mb-2" onPress={handlePress}>
        <Text className="pt-3 pl-3 text-[#000] text-lg font-Montserrat">{name}</Text>
        <Text className="pt-4 pr-3 text-black/60 text-sm font-Montserrat">{country}</Text>
        </TouchableOpacity>

        {/* {lat:lat,lon:lon} */}
      </View>
  )
}

export default SuggestionCard