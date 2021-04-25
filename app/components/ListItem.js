import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

import AppText from './AppText'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions} >
            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress} >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}></Image>}
                    <View style={styles.detailsContainer} >
                        <AppText style={styles.title} title={title}></AppText>
                        {subTitle && <AppText style={styles.subTitle} title={subTitle}></AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: colors.medium,
        
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    }
})
