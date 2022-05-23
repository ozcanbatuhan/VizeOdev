/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const PostListPage = ({ navigation }) => {

    const [Posts, setPosts] = useState({});

    const limit = '?_limit=20';

    const api = 'https://jsonplaceholder.typicode.com/posts' + limit;

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then((data) => {
                setPosts(data);
            });
    });

    const goToPostDetails = (id) => {
        navigation.navigate('PostDetailPage', { postId: id });
    };

    const renderUsers = ({ item }) => {
        return <>
            <View style={{ backgroundColor: '#b0e0e6', flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 25 }} >
                <TouchableOpacity onPress={() => goToPostDetails(item.id)}>
                    <Text style={{
                        width: 300,
                        height: 25,
                        padding: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 5,
                        marginBottom: 10,
                        color: '#191970',
                        fontSize: 12,
                    }}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        </>;
    };

    return (
        <View>
            <FlatList
                data={Posts}
                renderItem={renderUsers}
            />
        </View>
    );
};



export default PostListPage;
