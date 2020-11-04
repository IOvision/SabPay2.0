import React from 'react'
import { Text } from 'react-native'
import TextStyle from '../../styles/TextStyle'

export const HeaderText = () => {
    return (
        <Text style={TextStyle.headerText}>{children}</Text>
    )
}

export const BodyText = ({children}) => {
    return (
        <Text style={TextStyle.bodyText}>{children}</Text>
    )
}

export const CaptionText = ({children}) => {
    return (
        <Text style={TextStyle.captionText}>{children}</Text>
    )
}