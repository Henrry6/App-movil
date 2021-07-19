import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Inicio from './Inicio'
import Courosel from './Carousel'
import Movies from './Movies'
import Search from './Search'
import List from './List';



const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Lista" component={List} />
        <Tab.Screen name="Buscar" component={Search} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={HomeTab} />
        <Drawer.Screen name="Buscar peliculas" component={Movies} />
        <Drawer.Screen name="Courosel" component={Courosel} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}