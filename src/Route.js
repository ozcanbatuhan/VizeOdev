/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserListPage from './UserListPage';
import UserDetailPage from './UserDetailPage';
import PostListPage from './PostListPage';
import PostDetailPage from './PostDetailPage';
import MainPage from './MainPage';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainPage" >
                <Stack.Screen name="MainPage" component={MainPage} />
                <Stack.Screen name="UserListPage" component={UserListPage} />
                <Stack.Screen name="UserDetailPage" component={UserDetailPage} />
                <Stack.Screen name="PostListPage" component={PostListPage} />
                <Stack.Screen name="PostDetailPage" component={PostDetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Route;

