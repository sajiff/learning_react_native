import React from 'react'
import { StyleSheet } from 'react-native'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

export default function AppFormPicker({items, name, placeholder, width, PickerItemComponent, numberOfColumns}) {
    const {errors, setFieldValue, touched, values} = useFormikContext()

    return (
        <>
            <AppPicker
                items={items}
                numberOfColumns={numberOfColumns}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
                PickerItemComponent={PickerItemComponent}
            />
            <ErrorMessage
                error={errors[name]}
                visible={touched[name]}
            />
        </>
    )
}

const styles = StyleSheet.create({})
