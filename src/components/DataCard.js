import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { ActivityIndicator } from 'react-native'
import Cards from './Cards'

const DataCard = ({lData}) => {
  return (
    <View>
       { lData ? <FlatList horizontal   keyExtractor={(item) => item.time_epoch.toString()}  data={lData} renderItem={({item}, index)=>{return(
             <Cards icon={item.condition.icon} condition={item.condition.text} time={item.time} temp_c={item.temp_c}/>
           )}}/>:<><ActivityIndicator size={"large"} color={"#f5f5f5"} className=""/></>}
    </View>
  )
}

export default DataCard