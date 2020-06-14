import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Posts, Comments } from './pages'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="PostsPage">

                <Tab.Screen
                    name="CommentsPage"
                    component={Comments}
                    options={{
                        title: "Profilim"
                    }}
                />

                <Tab.Screen
                    name="PostsPage"
                    component={Posts}
                    options={{
                        title: "Sepetim"
                    }}
                />


            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Router;