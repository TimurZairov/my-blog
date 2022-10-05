import React, {useState} from "react";
import {
    Alert,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity, TouchableWithoutFeedback,
    View
} from "react-native";
import {Nav} from "../components/Nav";
import {THEME} from "../theme";
import {useDispatch} from "react-redux";
import {addPost} from "../store/reducers/actions/post";
import {PickImage} from "../components/PickImage";


export const CreateScreen = ({navigation, route}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState(null)
    const dispatch = useDispatch()


    const postHandler = () => {
        if(title.trim() === '' || description.trim() === '' || image === null){
            Alert.alert('Заполните все плоля')
        }else {
            const post = {
                title,
                url: image.uri,
                body: description,
                favorite: false
            }
            dispatch(addPost(post))
            setTitle('')
            setDescription('')
            navigation.navigate('Домой')
            setImage(null)
        }
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback>
                <View style={styles.AndroidSaveArea}>
                    <Nav/>
                    <View style={styles.createWrapper}>
                        <Text style={styles.createTitle}>
                            Создать новый пост
                        </Text>
                        <TextInput style={styles.createText} placeholder={'Вветите название поста'} value={title}
                                   onChangeText={setTitle}/>
                        <TextInput style={[styles.createText, styles.createTextDesc]}
                                   placeholder={'Вветите описание поста поста'} multiline={true} value={description}
                                   onChangeText={setDescription}/>
                        <PickImage image={image} setImage={setImage}/>
                        <TouchableOpacity style={styles.createBtn} onPress={postHandler} activeOpacity={0.7}>
                            <Text style={{color: THEME.BACK_BTN_COLOR}}>Создать пост</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    AndroidSaveArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        position: "relative"
    },
    createWrapper: {
        paddingHorizontal: 22
    },
    createTitle: {
        textAlign: "center",
        marginTop: 15,
        fontSize: 16,
        fontFamily: 'rubik-light'
    },
    createText: {
        width: '100%',
        height: 40,
        borderRadius: 8,
        marginTop: 15,
        padding: 10,
        borderColor: THEME.SECONDARY_FONT_COLOR,
        borderWidth: 1
    },
    createTextDesc: {
        height: 150,
        textAlign: 'left',
    },
    createBtn: {
        width: '100%',
        height: 50,
        backgroundColor: THEME.ADD_POST_BTN,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    }
});