import React from 'react'
import { View, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors'
import SearchBar from '../../components/atoms/SearchBar'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { BodyText } from '../../components/atoms/Text'

const { width } = Dimensions.get('window')
const data = [
    {
        id: 1,
        name: "Atta, Rice"
    },
    {
        id: 2,
        name: "Surf, Vim",
    },
    {
        id: 3,
        name: "Dal Masala"
    },
    {
        id: 4,
        name: "Oil, Ghee"
    },
    {
        id: 5,
        name: "Jam, Ketchup"
    },
    {
        id: 6,
        name: "Biscuits, Namkeen"
    },
    {
        id: 7,
        name: "Soap, Handwash"
    },
    {
        id: 8,
        name: "Noodles, Soup"
    },
    {
        id: 9,
        name: "Breakfast Items"
    }
]

export interface Props {
    navigation: any
}

const CategoryListTab: React.FC<Props> = (props) => {

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
                data={data}
                keyExtractor={({id}) => id.toString()}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity style={{padding: 15, flexDirection: 'row', justifyContent: 'space-between'}} activeOpacity={0.9} onPress={() => props.navigation.navigate("Items")}>
                            <BodyText>{item.name}</BodyText>
                            <Icon name='chevron-right' size={24} color='black' />
                        </TouchableOpacity>
                    )
                }}
                ItemSeparatorComponent={() => <View style={{backgroundColor: colors.mediumGrey, height: 1}} />}
            />
        </View>
    )
}

export default CategoryListTab
