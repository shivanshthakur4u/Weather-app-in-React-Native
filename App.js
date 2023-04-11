import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import { useFonts } from 'expo-font';
import HomeScreen from './src/Screens/HomeScreen';
import SettingsPage from './src/components/SettingsPage';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator()
const App = () => {
  const [showWelcomeScreen, setShowWelcomeScreen] = React.useState(true);

  React.useEffect(() => {
    AsyncStorage.getItem("userData").then(data => {
      if (data) {
        setShowWelcomeScreen(false);
      }
    });
  }, []);
  
  
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (

    
    <NavigationContainer>
      <Stack.Navigator>
        {showWelcomeScreen ? (<>
          <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false, animation: 'slide_from_bottom' }}
            />
             <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              name="Settings"
              component={SettingsPage}
              options={{ headerShown: false }}
            />
        
           </> 
        ) : (
          <>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
              name="Settings"
              component={SettingsPage}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>

  
  );
};

export default App;