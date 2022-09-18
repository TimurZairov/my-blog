import React from "react";
import {Text, View, StyleSheet, ScrollView} from "react-native";
import {THEME} from "../theme";


// const Item = ({title}) => (
//     <View style={styles.tabsWrapper}>
//         <Text style={styles.tabItem}>{title}</Text>
//     </View>
// )

export const Tabs = () => {
    // const renderItem = ({item}) => (<Item title={item.title}/>)

    const tabs = [
        {
            id: 1,
            title: 'Последнее',
        },
        {
            id: 2,
            title: 'Популярное',
        },
        {
            id: 3,
            title: 'Мои Избранные',
        },
        {
            id: 4,
            title: 'Мои мысли',
        },
    ]

    const tab = tabs.map(item => {
        return <Text key={item.id} style={styles.tabItem}>{item.title}</Text>
    })

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.tabsWrapper} horizontal={true} showsHorizontalScrollIndicator={false}>
                {tab}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 22,
        marginTop: 40,
        height: 50,
    },
    tabsWrapper: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    tabItem: {
        fontSize: 20,
        color: THEME.POST_FONT_COLOR,
        fontFamily: 'rubik-medium',
        marginRight: 50
    }
})