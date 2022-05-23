/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Button, View } from 'react-native';


function MainPage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to userlist page"
                onPress={() => navigation.navigate('UserListPage')}
            />
            <Button
                title="Go to postlist page"
                onPress={() => navigation.navigate('PostListPage')}
            />

        </View>
    );
}


export default MainPage;
