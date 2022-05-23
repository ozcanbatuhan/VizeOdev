/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const UserListPage = ({ navigation }) => {

    const [Users, setUsers] = useState({});

    const api = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {

        fetch(api)
            .then(res => res.json())
            .then((data) => {
                setUsers(data);
            });
    });

    const goToUserDetails = (id) => {
        navigation.navigate('UserDetailPage', { userId: id });
    };

    const renderUsers = ({ item }) => {
        return <>
            <View style={{ backgroundColor: '#b0e0e6', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 25 }} >
                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 25 }} onPress={() => goToUserDetails(item.id)}>
                    <Text style={{
                        width: 160,
                        height: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 5,
                        marginBottom: 10,
                        color: '#191970',
                        fontSize: 15,
                    }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        </>;
    };

    return (
        <View>
            <FlatList
                data={Users}
                renderItem={renderUsers}
            />
        </View>
    );
};



export default UserListPage;
