import React from "react";
import {
    FlatList,
    Image,
    Platform,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";
import {THEME} from "../theme";
import Ionicons from '@expo/vector-icons/Ionicons';
import {LinearGradient} from 'expo-linear-gradient';
// components
import {FavoriteSlider} from "../components/FavoriteSlider";
import {Posts} from "../components/Posts";
//Data
import {DATA} from "../../Data";


export const MainScreen = ({navigation}) => {
    // const goToPosts = () => {
    //     navigation.navigate('Посты')
    // }

    return (
        <View style={styles.AndroidSaveArea}>
            <LinearGradient
                // Background Linear Gradient
                colors={[THEME.MAIN_BG, THEME.WHITE_BG]}
                style={styles.background}
                start={{
                    x: 0.2499,
                    y: 0
                }}
                end={{
                    x: 0.25,
                    y: 0.0
                }}
            />
            <View style={styles.nav}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Ionicons name={'menu'} size={32} color={THEME.MAIN_FONT_COLOR}/>
                </TouchableOpacity>
                <View style={styles.wrap}>
                    <Ionicons name="search" size={30} color={THEME.MAIN_FONT_COLOR}/>
                    <Image source={require('../../assets/images/avatar.jpg')} style={styles.imgAvatar}/>
                </View>
            </View>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                ListHeaderComponent={<FavoriteSlider/>}
                renderItem={({item}) =><Posts item={item}/>}
            />



        </View>

    )
}

const styles = StyleSheet.create({
    AndroidSaveArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        position: "relative"
    },
    background: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    nav: {
        height: 60,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    wrap: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    imgAvatar: {
        width: 50,
        height: 50,
        borderRadius: 100
    },
});
