import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const {state} = useContext(Context);
    const blogPost = state.find((post) => post.id === navigation.getParam('id'));

    return (
        <View style={styles.viewStyle}>
           <Text style={styles.titleStyle}>{blogPost.title}</Text>
           <Text style={styles.contentStyle}>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={ () => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <Feather name="edit" size={24} color="black" size={24} style={styles.navIconStyle} />
        </TouchableOpacity>
    };
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 10
    }, 
    titleStyle: {
        fontSize: 24
    },
    contentStyle: {
        paddingVertical:10,
        fontSize:18
    },
    iconStyle: {
        color: '#000'
    }, 
    navIconStyle: {
        paddingHorizontal:10
    }
});

export default ShowScreen;