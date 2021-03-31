import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {

    const {state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <Button 
                title="Add Post"
                onPress={addBlogPost}
            />
            <FlatList
                data={state}
                keyExtractor={(blogPosts) => blogPosts.title}
                renderItem= {({item}) => {
                    return <View style={styles.rowStyle}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name="trash" size={24} color="black" style={styles.iconStyle} />
                            </TouchableOpacity>
                        </View>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }, 
    title: {
        fontSize: 18
    },
    iconStyle: {
        color: '#000'
    }
});

export default IndexScreen;