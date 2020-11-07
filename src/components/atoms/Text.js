import React from 'react'
import { Text } from 'react-native'
import TextStyles from '../../styles/TextStyle'

export const HeaderText = ({children, style}) => {
    return (
        <Text style={[TextStyles.headerText, style]}>{children}</Text>
    )
}

export const BodyText = ({children, style}) => {
    return (
        <Text style={[TextStyles.bodyText, style]}>{children}</Text>
    )
}

export const CaptionText = ({children, style}) => {
    return (
        <Text style={[TextStyles.captionText, style]}>{children}</Text>
    )
}