import React, { Dispatch, SetStateAction } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import colors from '../../assets/colors'
import { BodyText } from '../atoms/Text'

export interface Props {
    list: string[],
    selected: number,
    setSelected: Dispatch<SetStateAction<number>>
}

const ButtonGroups: React.FC<Props> = ({list, selected, setSelected}) => {
    return (
        <View style={{display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 10, marginBottom: 10}}>
            <View style={{flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center', paddingHorizontal: 10}}>
                {
                    list.map((string, index) => {
                        return (
                            <View key={index} style={{flex: 1}}>
                                <TouchableOpacity 
                                    style={index===selected ? [styles.deliveryOption, styles.selected] : [styles.deliveryOption]} 
                                    activeOpacity={0.9}
                                    onPress={() => setSelected(index)}
                                >
                                    <BodyText style={index===selected ? {color: colors.primary} : null}>{string}</BodyText>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default ButtonGroups

const styles = StyleSheet.create({
    deliveryOption: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.mediumGrey,
        borderRadius: 5,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
        marginHorizontal: 2
    },
    selected: {
        borderColor: colors.primary
    }
})
