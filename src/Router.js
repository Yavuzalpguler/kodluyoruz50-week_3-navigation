import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Posts, Comments } from './pages'

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="PostsPage">

                <Stack.Screen
                    name="CommentsPage"
                    component={Comments}
                    options={{
                        headerTitle: "Yorumlar",
                        headerShown: false,
                        gestureEnabled: false
                    }}
                    />

                <Stack.Screen
                    name="PostsPage"
                    component={Posts}
                    options={{
                        headerTitle: "Gönderiler",
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;