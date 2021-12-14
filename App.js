import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Import Screen
import Home from './Screens/Home';
import DetailsChap from './Screens/DetailsChap';
import DetailsBooks from './Screens/DetailsBooks';
import Lista from './Screens/Lista';
import DetailsInfo from './Screens/DetailsInfo';

//import navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{
            headerTitle: 'Registro magico',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="DetailsChap"
          component={DetailsChap}
          options={{
            headerTitle: 'Identificación magica',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Books"
          component={DetailsBooks}
          options={{
            headerTitle: 'Libro',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Info"
          component={DetailsInfo}
          options={{
            headerTitle: 'Información',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#000',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#fff',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
