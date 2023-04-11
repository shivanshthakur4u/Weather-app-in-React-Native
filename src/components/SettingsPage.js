import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Gradient from "./Gradient";
import { Feather } from "@expo/vector-icons";
import SuggestionCard from "./SuggestionCard";

const SettingsPage = () => {


  const [text, setText]=useState("")
  const [Data, setData]=useState(null)

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': 'rapid api',
        "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
      },
    };
   const updatedText = text.toLowerCase().replace(" ","%20")
   console.log(updatedText)
    fetch(
      
       `https://ai-weather-by-meteosource.p.rapidapi.com/find_places_prefix?text=${updatedText}&language=en`,
      options
    )
      .then((response) => response.json())
      .then((response) => {setData(response)})
      .catch((err) => alert(err));

      console.log(Data)

      
      
  }, [text]);
  return (
    <Gradient>
      <View className="mt-10">
        <TextInput
          className="border border-[#f5f5f5] rounded-2xl mx-3 my-3 h-14 text-[#f5f5f5] pl-3 font-Montserrat text-base"
          placeholder="Enter Place name..."
          placeholderTextColor={"#f5f5f5"}
          onChangeText={(text)=>{setText(text)}}
        />
        <View className="absolute top-[28px] right-8">
          <TouchableOpacity>
            <Feather name="search" size={26} color="#f5f5f5" />
          </TouchableOpacity>
        </View>
      </View>

      { text ? <FlatList data={Data}  renderItem={({item})=><SuggestionCard key={item.lat} name={item.name} country={item.country} lat={item.lat} lon={item.lon}/>} /> : null}
    </Gradient>
  );
};

export default SettingsPage;
