import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const {state, addBlogPost, deleteBlogPost } = useContext(Context);
    const blogPost = state.find((post) => post.id === navigation.getParam('id'));

    return (
        <View>
           <Text>{blogPost.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
   
});

export default CreateScreen;