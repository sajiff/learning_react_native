import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PicketItem from './PicketItem'

export default function AppPicker({ items, icon, placeholder, selectedItem, onSelectItem }) {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
                <View style={styles.container} >
                    {icon && <MaterialCommunityIcons
                        name={icon}
                        size={30}  
                        color={colors.medium}
                        style={styles.icon}
                    />}
                    <AppText style={styles.text} title={selectedItem ? selectedItem.label : placeholder }></AppText>
                    <MaterialCommunityIcons
                        name='chevron-down'
                        size={30}  
                        color={colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='fade' >
                <Screen>
                    <Button title='close' onPress={() => setModalVisible(false)} />
                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString() }
                        renderItem={ ({item}) => <PicketItem 
                            label={item.label}
                            onPress={() => {setModalVisible(false)
                            onSelectItem(item);}} /> }
                    />
                </Screen>
            </Modal>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    }
})
