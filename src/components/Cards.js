import { View, Text, Image } from 'react-native'
import React from 'react'

const Cards = ({icon,condition,time,temp_c}) => {
  return (
    
    <View className="rounded-3xl w-[150px] h-[150px] bg-[#ecd8a2]/5 top-5 mx-3 mb-8">
    <View className="flex-row">
      <View className="flex-col" >
      <Image source={{uri:`https:${icon}`}}  className=" w-12 h-10 top-3 left-20"/> 

      </View>
      <View className="top-[26px] left-13 px-[5px]"><Text className="-left-9 text-[#f5f5f5]/75">{time.substring(11)}</Text></View>
    </View>

    <View className="w-[80%] flex justify-center items-center">
       <Text className=" text-[#f5f5f5] top-4 left-[40px] px-2">{condition}</Text>
    </View>

<Text className="text-[#f5f5f5] font-Montserrat font-bold top-3 left-7 pt-1 text-2xl">
  {temp_c}<Text className="text-[#EBB02D]">°C</Text>
</Text>
</View>
  )
}

export default Cards