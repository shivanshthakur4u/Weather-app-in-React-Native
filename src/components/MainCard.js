import { View, Text, TouchableOpacity, Image} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

const MainCard = ({ day, temp, name, country, summary,temp_max,temp_min, feelsLike,humidity,visibility,icon,text,wind,navigation}) => {
  const [show,setShow]=useState(true)

  return (
    <>
      

      <View className="rounded-3xl bg-[#ecd8a2] w-[370px] h-[350px] opacity-5 top-24" />
      <View className="justify-between flex-row gap-11">
        <Text className="text-[#f5f5f5]  -left-[50px] -top-[233px] text-3xl  font-Montserrat font-semibold">
          Current
        </Text>
        <Text className="text-white/75  -right-[50px] -top-[233px] pt-2 text-sm font-Montserrat ">
          {day}
        </Text>
      </View>
      <View className="-top-[215px] -right-[138px] ">
        <Text className="text-[12px] text-[#f5f5f5]/75">Wind Speed</Text>
        <Text className="text-[#f5f5f5] ml-1">{wind} kph</Text>
      </View>

      <View className="justify-between flex-row gap-11 top-2 w-[68%]">
        <View className="flex-row">
          <Text className="text-[#f5f5f5]  -left-[52px] -top-[275px] text-[37px]  font-Montserrat font-bold">
            {temp}<Text className="text-[#EBB02D]">°C</Text>
          </Text>
         
          <View className="text-white/75 -left-[52px] -top-[275px] text-lg font-Montserrat flex-row">
            {/* <Text> {Data.icon}</Text> */}
            <Image source={{uri:`https:${icon}`}} alt="img" className=" w-12 h-12"/>
            <Text className="text-[#f5f5f5]/75 w-20">{text}</Text>
          </View>
        </View>
      </View>

    

      <View className="flex-col  -top-[250px] -left-[90px] gap-y-3">
        <Text className="text-[#f5f5f5]  text-xl">Humidity: <Text className="text-[#EBB02D]">{humidity}</Text></Text>
        <Text className="text-[#f5f5f5] text-xl">Visibility: <Text className="text-[#EBB02D]">{visibility}{" "}km</Text></Text>
        <Text className="text-[#f5f5f5] text-xl">Feels Like: <Text className="text-[#EBB02D]">{feelsLike}{" "}°C</Text></Text>
      </View>

      <View className="flex-row -top-[220px] -left-[30px] gap-11 w-[82%]">
        <TouchableOpacity>
          <Feather name="map-pin" size={34} color="#EBB02D" />
        </TouchableOpacity>
        <Text className="text-[#f5f5f5]  top-[2px] font-Montserrat text-[23px] -left-9">
          {`${name}, ${country}`}
        </Text>
      </View>
    </>
  );
};

export default MainCard;
