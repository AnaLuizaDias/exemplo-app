import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons }  from '@expo/vector-icons';

import Home from './pages/Home';
import Busca from './pages/Busca';
import Perfil from './pages/Perfil';
import Pedidos from './pages/Pedidos';
import Carteira from './pages/Carteira';

const BottomTab = createBottomTabNavigator();
// const stack = createNativeStackNavigator();

// function HomeRoutes() {
//     return (
//         <StackNavigator>
//             <Stack.Screen name = "Home" component = {Home}/>
//         </StackNavigator>
//     )
// }

export default function Routes() {
    return (
        <NavigationContainer>
            <BottomTab.Navigator activeColor="#333" inactiveColor="gray">
                <Buttomtab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <BottomTab.Screen
            name="Pedidos"
            component={Busca}
            options={{
                tabBarLabel: 'Busca',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="assignment" color={color} size={26} />
                )
            }}
            />
            <BottomTab.Screen
            name="Perfil"
            component={Busca}
            options={{
                tabBarLabel: 'Busca',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="assignment" color={color} size={26} />
                )
            }}
            />
            <BottomTab.Screen
            name="Pedidos"
            component={Busca}
            options={{
                tabBarLabel: 'Busca',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="assignment" color={color} size={26} />
                )
            }}
            />
        </NavigationContainer>
    )
}
