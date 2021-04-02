import React, { useContext} from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import BlogPostForm from '../Components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const { state, updateBlogPost } = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find((post) => post.id === id);


    return (
        <View style={styles.view}>
           <BlogPostForm 
            initialValues={ {title: blogPost.title, content: blogPost.content} }
            onSubmit={(title, content) => {
                updateBlogPost(id, title, content, () => navigation.navigate('Index'));
           }}/>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default EditScreen;