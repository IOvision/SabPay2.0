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
import { getSpecialOffers, getMerchantDetails } from '../../requests'
import { setMerchant } from '../../redux/actions/merchant';

export interface Props {
    navigation: any,
    merchant: Merchant,
    set: (a: Merchant) => void,
}

const HomeTab: React.FC<Props> = ({navigation, merchant, set}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [specialOffers1, setSpecialOffers1] = useState<Array<String>>([])
    const [specialOffers2, setSpecialOffers2] = useState<Array<String>>([])

    useEffect(() => {
        Promise.all([getSpecialOffers(), getMerchantDetails(merchant.SK)])
        .then(data => {
            const first = data[0]
            const second = data[1]
            let result = [];
            for (let i = 2; i > 0; i--) {
                result.push(first.splice(0, Math.ceil(first.length / i)));
            }
            setSpecialOffers1(result[0])
            setSpecialOffers2(result[1])
            merchant.storeSp = second.storeSp
            merchant.offers = second.offers
            merchant.exclude = second.exclude
            merchant.tags = second.tags
            setIsLoading(false)
        })
    }, [])
    const dealsOfTheDay = [ "https://pngimg.com/uploads/dog/dog_PNG50348.png", "https://freepngimg.com/thumb/dog/23730-1-dog-file.png", "https://pngimg.com/uploads/dog/dog_PNG50360.png", "https://static.wixstatic.com/media/2cd43b_afa39a2ccac54a9b8122257b451a461f~mv2_d_1300_1639_s_2.png/v1/fill/w_174,h_219,fp_0.50_0.50/2cd43b_afa39a2ccac54a9b8122257b451a461f~mv2_d_1300_1639_s_2.png"]

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <SearchWithBackground home={true} navigation={navigation} name={merchant.name} address={merchant.address}/>
            <ScrollView style={{display: "flex", flex: 1, padding: 15, backgroundColor: "white"}}>
                <CaptionText style={{marginBottom: 10, marginTop: 10}}>Shop By Category</CaptionText>
                <HomePageCategoryList data={merchant.tags} baseUrl={""} navigation={navigation}  isLoading={isLoading}/>
                <CaptionText style={{marginBottom: 10}}>Special Offers</CaptionText>
                <Swipeable data={specialOffers1} />
                <CaptionText style={{marginBottom: 10}}>Store Specials</CaptionText>
                <StoreSpecialList object={merchant.storeSp} />
                <Swipeable data={specialOffers2} />
                <CaptionText style={{marginBottom: 10}}>Deals of the Day</CaptionText>
                <HomePageOffers data={dealsOfTheDay}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        set: (merchant: Merchant) => dispatch(setMerchant(merchant)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTab)
