import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Gradient from "../components/Gradient";

import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainCard from "../components/MainCard";
import DataCard from "../components/DataCard";
import { useFocusEffect } from '@react-navigation/native';
const HomeScreen = ({ navigation}) => {
  const [Data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(0);

  // "lat": "28.65195N", "lon": "77.23149E",
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      animation: "slide_from_bottom",
    });
  }, [navigation]);





  
useFocusEffect(
  React.useCallback(() => {
    const fetchData = async (city, country) => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'rapid api',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}%2C${country}&days=3`, options);
      const data= await response.json();
      setData(data);
      setLoading(false);
    };

    const getData = async () => {
      const value = await AsyncStorage.getItem('userData');
      const Fvalue = JSON.parse(value);
      if (Fvalue) {
        fetchData(Fvalue.Name, Fvalue.Country);
      } else {
        fetchData('Delhi', 'India');
      }
    };
    
    setLoading(true);
    getData();
    
    return () => {
      setLoading(false);
    }
  }, [])
)

  
  


  // console.log(Data);



  return (
    <Gradient>
      {!loading ? (
        <>
          <View className="flex-1  items-center">
          <View className="absolute left-5 top-[46px] gap-24 flex-row">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <Feather name="settings" size={26} color="#698269" />
        </TouchableOpacity>
        <Text className="text-[#f5f5f5] font-Montserrat text-lg font-semibold">
          Weather Forecast
        </Text>
      </View>
            <MainCard
              day={Data.location.localtime.length > 0 ? Data.location.localtime.substring(0,10)+'':Data.location.localtime}
              temp={Data.current.temp_c || ""}
              name={Data.location.name}
              country={Data.location.country}
              icon={Data.current.condition.icon}
              text={Data.current.condition.text}
              feelsLike={Data.current.feelslike_c}
               humidity={Data.current.humidity||""}
              visibility={Data.current.vis_km||""}
              wind={Data.current.wind_kph}
              navigation={navigation}
            />

<View className="justify-between flex-row -mt-[160px] gap-x-[30px] mr-[12px]">
              <TouchableOpacity
                onPress={() => {
                  setActive(0);
                 
                //  {active === "Today" ?  setLdata(Ldata.forecast.forecastday[0].hour):<></>}
                }}
              >
                <Text
                  className={`${
                    active == 0 ? "text-[#EBB02D]" : "text-[#f5f5f5]"
                  } text-lg`}
                >
                  Today
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setActive(1);
                
                 
                }}
              >
                <Text
                  className={`${
                    active == 1 ? "text-[#EBB02D]" : "text-[#f5f5f5]"
                  } text-lg`}
                >
                  Tomorrow
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setActive(2);
              
                }}
              >
                <Text
                  className={`${
                    active == 2 ? "text-[#EBB02D]" : "text-[#f5f5f5]"
                  } text-lg`}
                >
                  Day After Tomorrow
                </Text>
              </TouchableOpacity>
            </View>
            {/* {console.log(lData)} */}
          
           {Data  ? <DataCard lData={Data?.forecast?.forecastday[active]?.hour||[]}/>:<><ActivityIndicator size={"large"} color={"#f5f5f5"}/></> }

             
           
          

            
          </View>
        </>
      ) : (
        <ActivityIndicator
          size={"large"}
          color={"#f5f5f5"}
          className=" mt-80"
        />
      )}
    </Gradient>
  );
};

export default HomeScreen;
