import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PicketItem from './PicketItem'

export default function AppPicker({ items, icon, placeholder, selectedItem, onSelectItem, width="100%", PickerItemComponent= PicketItem, numberOfColumns=1 }) {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
                <View style={[styles.container, {width}]} >
                    {icon && <MaterialCommunityIcons
                        name={icon}
                        size={30}  
                        color={colors.medium}
                        style={styles.icon}
                    />}
                    {selectedItem ? (
                    <AppText style={styles.text} title={selectedItem.label} />
                    ) : (
                    <AppText style={styles.placeholder} title={placeholder}/> 
                    )}
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
                        renderItem={ ({item}) => <PickerItemComponent 
                            item={item}
                            label={item.label}
                            onPress={() => {setModalVisible(false)
                            onSelectItem(item);}} /> }
                        numColumns={numberOfColumns}
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
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    }
})
