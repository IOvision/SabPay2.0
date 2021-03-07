import React, { useState, useEffect, useRef } from 'react'
import { View, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors'
import SearchBar from '../../components/atoms/SearchBar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { BodyText } from '../../components/atoms/Text'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import Inventory from '../../models/Inventory'

const { width } = Dimensions.get('window')

export interface Props {
    navigation: any,
    inventory: Inventory
}

const CategoryListTab: React.FC<Props> = (props) => {
    const [tags, setTags] = useState<string[]>([])
    const [search, setSearch] = useState<string>("")
    const inputRef = useRef(null)

    useEffect(() => {
        let tags: string[] = []
        for (let item in props.inventory.tags) {
            tags = tags.concat(props.inventory.tags[item])
        }
        setTags(tags)
        inputRef.current.focus()
    }, [])
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
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
                inputRef={inputRef}
                editable={true}
                value={search}
                onChangeText={(text) => setSearch(text)}
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
        inventory: state.inventoryReducer.inventory
    }
}

export default connect(mapStateToProps)(CategoryListTab)

