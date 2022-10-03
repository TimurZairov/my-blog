import React, {useCallback, useEffect, useState} from "react";
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import {THEME} from "../theme";
import {AntDesign} from '@expo/vector-icons';

export const PickImage = ({setImg, img}) => {

    const [image, setImage] = useState(null)
    const pickImage = async () => {
        let res = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        })
        if (!res.cancelled) {
            setImage(res)
            setImg(res.uri)
            setImage(null)
        }else {
            return
        }
    }

    return (

        <View>
            {image ? <Image source={{uri: image.uri}}
                            style={{width: '100%', height: 200, marginTop: 15, borderRadius: 10}}/> :
                <TouchableOpacity activeOpacity={.7} onPress={pickImage}
                                  style={{
                                      width: '100%',
                                      height: 200,
                                      backgroundColor: THEME.SECONDARY_FONT_COLOR,
                                      borderRadius: 8,
                                      marginTop: 15,
                                      justifyContent: 'center',
                                      alignItems: 'center'
                                  }}>
                    <AntDesign name="pluscircle" size={45} color="white" style={{opacity: .6}}/>
                </TouchableOpacity>}
        </View>
    )

}