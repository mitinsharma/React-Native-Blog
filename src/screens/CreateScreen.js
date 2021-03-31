import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const {addBlogPost } = useContext(Context);
    const [title, setTitle] = useState(''); 
    const [content, setContent] = useState(''); 

    return (
        <View style={styles.view}>
           <Text>Enter Title:</Text>
           <TextInput value={title} onChangeText={ (v) => setTitle(v)} style={styles.inputStyle}/>
           <Text>Enter Content:</Text>
           <TextInput value={content} onChangeText={ (v) => setContent(v)} style={styles.inputStyle}/>
            <Button title="Add Blog Post" onPress={() => { 
                addBlogPost(title, content, () => {
                    navigation.navigate('Index');
                });
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        padding: 10
    },
   inputStyle: {
        borderWidth:1,
        padding: 5,
        marginTop:5,
        marginBottom:15,
        fontSize:16
   }
});

export default CreateScreen;