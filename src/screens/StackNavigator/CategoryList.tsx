import React, { useState, useEffect } from 'react'
import { View, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors'
import SearchBar from '../../components/atoms/SearchBar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { BodyText } from '../../components/atoms/Text'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import Merchant from '../../models/Merchant'

const { width } = Dimensions.get('window')

export interface Props {
    navigation: any,
    merchant: Merchant
}

const CategoryListTab: React.FC<Props> = (props) => {
    const [tags, setTags] = useState<string[]>([])
    useEffect(() => {
        let tags: string[] = []
        for (let item of props.merchant.tags) {
            tags = tags.concat(item.tag)
        }
        setTags(tags)
    }, [])
    return (
        <View style={{flex: 1}}>
            <View style={{
                backgroundColor: colors.primary, 
                width: width/2,
                height: 130,
                marginTop: -75,
                borderRadius: 50,
                position: 'absolute',
                alignSelf:'center',
                transform: [
                    {scaleX: 2.5}
                ]
            }} />
            <SearchBar
                placeholder="What are you looking for?"
                style={{marginHorizontal: 30, marginTop: 30}}
                editable={true}
            />
            <FlatList
                style={{marginTop: 20}}
                data={tags}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity style={{padding: 15, flexDirection: 'row', justifyContent: 'space-between'}} activeOpacity={0.9} 
                            onPress={() => props.navigation.navigate("Items", {
                                tag: item
                                })}>
                            <BodyText>{item.replace(/_/gi, " ")}</BodyText>
                            <Icon name='chevron-right' size={24} color='black' />
                        </TouchableOpacity>
                    )
                }}
                ItemSeparatorComponent={() => <View style={{backgroundColor: colors.mediumGrey, height: 1}} />}
            />
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        merchant: state.merchantReducer.merchant
    }
}

export default connect(mapStateToProps)(CategoryListTab)

