import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';


function AppText({title ,style}) {
    return (
        <Text style={[styles.text, style]}>{title}</Text>
    );
}

export default AppText;

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',

    }
})