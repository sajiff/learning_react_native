import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeperator from '../components/ListItemSeperator'

const menuItems = [
    {
        title: 'my listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        }
    },
    {
        title: 'my messages',
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        }
    }
]
export default function AccountScreen() {
    return (
        <Screen style={styles.screen} >
            <View style={styles.container} >
                <ListItem
                    title="sajid islam"
                    subTitle="anindasajid@gmail.com"
                    image={require('../assets/sajid.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItems => menuItems.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({ item }) => 
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon
                        name='logout'
                        backgroundColor="#ffe66d"
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    }
})
