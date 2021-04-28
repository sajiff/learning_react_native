import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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
                        <AppText style={styles.title} title={title} numberOfLines={1}></AppText>
                        {subTitle && <AppText style={styles.subTitle} title={subTitle} numberOfLines={2}></AppText>}
                    </View>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={25}
                        color={colors.medium}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
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
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    }
})
