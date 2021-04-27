import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Apptext from '../AppText'

export default function ErrorMessage({error, visible}) {
    if(!visible || !error) return null;

    return (
        <Apptext 
            style={styles.error}
            title={error}
        />
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})
