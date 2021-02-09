import React, {useState, useEffect} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Font from 'expo-font';
import * as Permissions from 'expo-permissions';

import WelcomeScreen from './screens/WelcomeScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import UserScreen from './screens/UserScreen';

const {Navigator, Screen} = createStackNavigator();


const App = (props) => {

  const [loading, setLoading] = useState(true);

  const loadRessources = async() => {
    try {
      const result = await new Promise.all([
        await Font.loadAsync({
          Poppins: require("./assets/fonts/Poppins-Regular.ttf")
        }),
        // askAsync : permissions returns only for location permissions
        Permissions.askAsync(Permissions.LOCATION),
      ])

      const status = result[1].status;
      
      if(status === 'granted') {
        setLoading(false);
      } else {
        props.navigation.push('Onboarding');
      }
    } catch(e) {
        console.error(" load ressources error : ", e);
    }
  }
  useEffect(()=> {
    loadRessources();
  }, []);
  
  if (loading) {
    <View style={styles.container}>
      <ActivityIndicator/>
    </View>
  } 
  
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={options =>{
          return {
            headerShown: false
          }
        }}
      >
        <Screen 
          name="Welcome" 
          component={WelcomeScreen} 
        />
        <Screen 
          name="Onboarding" 
          component={OnboardingScreen} 
        />
        <Screen 
          name="User" 
          component={UserScreen} 
        />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;


// ---Default header Config---

{/* <Navigator
        screenOptions={options =>{
          return {
            // headerStyle: { backgroundColor:"transparent", borderColor:"transparent", border: 0.1 }
            headerShown: false
          }
        }}
      >
        <Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={ options => {
            // console.log("options", options);
            return {
              headerLeft: null,
              headerRight: () => {
                return (
                  <Text style={rigthNavStyle} > Skip</Text>
                )
              },
              title: null,
              // headerStyle: {},
              // headerTitleStyle: {}
            }
            }
          }
        />
      </Navigator>
     */}
