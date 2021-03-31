import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const {state} = useContext(Context);
    const blogPost = state.find((post) => post.id === navigation.getParam('id'));

    return (
        <View>
           <Text>{blogPost.title}</Text>
           <Text>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
   
});

export default EditScreen;