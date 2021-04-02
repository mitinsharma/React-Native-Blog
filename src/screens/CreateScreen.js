import React, { useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import BlogPostForm from '../Components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const {addBlogPost } = useContext(Context);

    return (
        <View>
           <BlogPostForm onSubmit={(title, content) => {
               addBlogPost(title, content, () => navigation.navigate('Index'));
           }}/>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CreateScreen;