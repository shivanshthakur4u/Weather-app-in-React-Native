import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
import Sun from "../../assets/sunimagecloud.png";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
const Home = ({navigation}) => {

  return (
    <LinearGradient
      className="w-[100%] h-[100%] flex  items-center relative"
      start={{ x: -0.2, y: 0.1 }}
      end={{ x: 0.8, y: 1 }}
      locations={[0.23, 0.35, 0.58]}
      colors={["#17184c", "rgba(26,26,76,255)", "#17184c"]}
    >
      <Image source={Sun} className=" mt-[70px]" />
      <View
        className="flex flex-col
  items-center"
      >

<View className="rounded-full bg-[#cfc2a2] w-[300px] h-[300px] opacity-5 absolute -left-60 -top-[150px]"></View>
<View className="rounded-full bg-[#cfc2a2] w-[300px] h-[300px] opacity-5 absolute -right-60 top-[10px]"></View>
        <Text className="mt-4 text-[#f5f5f5] text-4xl font-Montserrat font-semibold text-center ">
          Weather{" "}
          <Text className="text-[#EBB02D]">Feeds & Reports</Text>
        </Text>
      </View>

      <View className="flex flex-col items-center mt-5 px-8">
        <Text className="text-[#f5f5f5]/75 text-center text-sm font-Montserrat">Detailed weather Reports and Feeds of all over the world with best user Experiece</Text>
      </View>

<View className="mt-8">
 <TouchableOpacity className="rounded-lg bg-[#EBB02D]" onPress={()=>{
  navigation.navigate("HomeScreen")
 }}>
 <Text className="text-center px-[118px] py-[18px] text-xl font-Montserrat font-bold">Get Started</Text>
 </TouchableOpacity>
</View>
    
    </LinearGradient>
  );
};

export default Home;
