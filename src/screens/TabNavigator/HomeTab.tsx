import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import Swipeable from '../../components/molecules/Swipeable'
import { CaptionText } from '../../components/atoms/Text'
import HomePageCategoryList from '../../components/molecules/HomePageCategoryList'
import StoreSpecialList from '../../components/molecules/StoreSpecialList'
import HomePageOffers from '../../components/molecules/HomePageOffers'
import SearchWithBackground from '../../components/molecules/SearchWithBackground'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import Merchant from '../../models/Merchant'

export interface Props {
    navigation: any,
    merchant: Merchant
}

const HomeTab: React.FC<Props> = ({navigation, merchant}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500)
    }, [])

    const data1 =  [
        {
            key: "0",
            image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
        },
        {
            key: "2",
            image: "https://static01.nyt.com/images/2019/11/26/science/00SCI-DOGLOVE-promo/00SCI-DOGLOVE-promo-superJumbo-v2.jpg",
        },
    ]
    
    const data2 =  [
        {
            key: "0",
            image: "https://static01.nyt.com/images/2019/11/26/science/00SCI-DOGLOVE-promo/00SCI-DOGLOVE-promo-superJumbo-v2.jpg",
        },
        {
            key: "2",
            image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
        },
    ]
    const dealsOfTheDay = [ "https://pngimg.com/uploads/dog/dog_PNG50348.png", "https://freepngimg.com/thumb/dog/23730-1-dog-file.png", "https://pngimg.com/uploads/dog/dog_PNG50360.png", "https://static.wixstatic.com/media/2cd43b_afa39a2ccac54a9b8122257b451a461f~mv2_d_1300_1639_s_2.png/v1/fill/w_174,h_219,fp_0.50_0.50/2cd43b_afa39a2ccac54a9b8122257b451a461f~mv2_d_1300_1639_s_2.png"]
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <SearchWithBackground home={true} navigation={navigation} name={merchant.name} address={merchant.address}/>
            <ScrollView style={{display: "flex", flex: 1, padding: 15, backgroundColor: "white"}}>
                <CaptionText style={{marginBottom: 10, marginTop: 10}}>Shop By Category</CaptionText>
                <HomePageCategoryList data={merchant.tags} navigation={navigation} isLoading={isLoading}/>
                <CaptionText style={{marginBottom: 10}}>Special Offers</CaptionText>
                <Swipeable data={data1} isLoading={isLoading}/>
                <CaptionText style={{marginBottom: 10}}>Store Specials</CaptionText>
                <StoreSpecialList object={merchant.storeSp} isLoading={isLoading}/>
                <Swipeable data={data2} isLoading={isLoading}/>
                <CaptionText style={{marginBottom: 10}}>Deals of the Day</CaptionText>
                <HomePageOffers isLoading={isLoading} data={dealsOfTheDay}/>
                <View style={{height: 30}}></View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        merchant: state.merchantReducer.merchant
    }
}

export default connect(mapStateToProps)(HomeTab)
