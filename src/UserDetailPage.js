/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text, ActivityIndicator, StyleSheet } from 'react-native';

function UserDetailPage({ route }) {
    const [UserDetails, setUserDetails] = useState(0);

    const [loading, setLoading] = useState(true);

    const { userId } = route.params;

    console.log('furkan', userId);


    const api = 'https://jsonplaceholder.typicode.com/users/' + userId;


    useEffect(() => {

        fetch(api)
            .then(res => res.json())
            .then((data) => {

                setUserDetails(data);
                setLoading(false);

            });
    });

    return (
        <>
            {
                loading == true ? <ActivityIndicator size="small" color="#0000ff" /> : <>
                    <Text style={styles.text}>ID: {UserDetails.id}</Text>
                    <Text style={styles.text}>Name: {UserDetails.name}</Text>
                    <Text style={styles.text}>Username: {UserDetails.username}</Text>
                    <Text style={styles.text}>Email: {UserDetails.email}</Text>
                    <Text style={styles.text}>Street: {UserDetails.address.street}</Text>
                </>
            }
        </>
    );
}

export default UserDetailPage;

const styles = StyleSheet.create({
    text: {
        width: 160,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        marginBottom: 10,
        color: '#191970',
        fontSize: 15,
    },
});
