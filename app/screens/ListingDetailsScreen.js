import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} title='Red Jacket for sale'></AppText>
                <AppText style={styles.subTitle} title='$100'></AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/sajid.jpg")}
                        title="Sajid Islam"
                        subTitle='5 listings'
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,

    },
    detailsContainer : {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 7,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 50,
    }
})
export default ListingDetailsScreen;