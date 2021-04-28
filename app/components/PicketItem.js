import React from 'react'
import { StyleSheet, TouchableOpacity} from 'react-native'
import AppText from './AppText'

export default function PicketItem({item, label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} >
            <AppText style={styles.text} title={item.label} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
    }
})
