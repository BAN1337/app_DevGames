import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Search from "../pages/Search";
import Categorys from "../pages/Categorys";
import Detail from "../pages/Detail";
import MyFavorites from "../pages/MyFavorites";

const AppStack = createNativeStackNavigator()

export default function AppRoutes() {
    return (
        <AppStack.Navigator
            screenOptions={{
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#050B18'
                }
            }}
        >
            <AppStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <AppStack.Screen
                name="Search"
                component={Search}
                options={{
                    title: 'Search'
                }}
            />

            <AppStack.Screen
                name="Categorys"
                component={Categorys}
                options={({ route }) => ({
                    title: route.params.data.name,
                })}
            />

            <AppStack.Screen
                name="Detail"
                component={Detail}
                options={{
                    headerShown: false
                }}
            />

            <AppStack.Screen
                name="MyFavorites"
                component={MyFavorites}
                options={{
                    title: 'My Favorites'
                }}
            />
        </AppStack.Navigator>
    )
}