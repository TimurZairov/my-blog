import React from "react";
import {Button, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {THEME} from "../theme";
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

export const MainScreen =({navigation}) => {

    const goToPosts = () => {
        navigation.navigate('Посты')
    }

    return (
        <View style={styles.AndroidSaveArea}>
            <Ionicons  name={ 'menu'}/>
            <View >
                <TouchableOpacity onPress={goToPosts} activeOpacity={0.8} >
                </TouchableOpacity>
                <Button title="Go to Posts"  onPress={() => navigation.push('Посты')} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    AndroidSaveArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: 'red'
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: THEME.POST_BG_COLOR,
        borderRadius: 50,
    },
    burger: {
        width: 30,
        height: 30,
        backgroundColor: THEME.MAIN_BG
    }
});
