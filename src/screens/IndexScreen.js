import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {

    const {state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPosts) => blogPosts.title}
                renderItem= {({item}) => {
                    return (
                            <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.rowStyle}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" size={24} color="black" style={styles.iconStyle} />
                                </TouchableOpacity>
                            </View>
                            </TouchableOpacity>);
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => <TouchableOpacity onPress={ () => navigation.navigate('Create')}>
            <Feather name="plus" size={24} color="black" size={24} />
        </TouchableOpacity>
    };
}

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