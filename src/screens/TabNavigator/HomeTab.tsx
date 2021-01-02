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
    const [isSpecialOffersLoading, setIsSpecialOffersLoading] = useState<boolean>(true)
    const [specialOffers1, setSpecialOffers1] = useState([])
    const [specialOffers2, setSpecialOffers2] = useState([])

    useEffect(() => {
        getSpecialOffers((err, resp) => {
            if(err) 
                return console.log(err)
            let result = [];
            for (let i = 2; i > 0; i--) {
                result.push(resp.splice(0, Math.ceil(resp.length / i)));
            }
            setSpecialOffers1(result[0])
            setSpecialOffers2(result[1])
            return console.log(resp)
        })
        getMerchantDetails(merchant.SK, (err, resp) => {
            if(err)
                return console.log(err)
            merchant.storeSp = resp[0].storeSp
            merchant.offers = resp[0].offers
            merchant.exclude = resp[0].exclude
            merchant.tags = resp[0].tags
            setIsLoading(false)
            setIsSpecialOffersLoading(false)
            return console.log(resp)
        })
    }, [])
    const dealsOfTheDay = [ "https://pngimg.com/uploads/dog/dog_PNG50348.png", "https://freepngimg.com/thumb/dog/23730-1-dog-file.png", "https://pngimg.com/uploads/dog/dog_PNG50360.png", "https://static.wixstatic.com/media/2cd43b_afa39a2ccac54a9b8122257b451a461f~mv2_d_1300_1639_s_2.png/v1/fill/w_174,h_219,fp_0.50_0.50/2cd43b_afa39a2ccac54a9b8122257b451a461f~mv2_d_1300_1639_s_2.png"]
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <SearchWithBackground home={true} navigation={navigation} name={merchant.name} address={merchant.address}/>
            <ScrollView style={{display: "flex", flex: 1, padding: 15, backgroundColor: "white"}}>
                <CaptionText style={{marginBottom: 10, marginTop: 10}}>Shop By Category</CaptionText>
                <HomePageCategoryList data={merchant.tags} baseUrl={""} navigation={navigation} isLoading={isLoading}/>
                <CaptionText style={{marginBottom: 10}}>Special Offers</CaptionText>
                <Swipeable data={specialOffers1} isLoading={isSpecialOffersLoading}/>
                <CaptionText style={{marginBottom: 10}}>Store Specials</CaptionText>
                <StoreSpecialList object={merchant.storeSp} isLoading={isLoading}/>
                <Swipeable data={specialOffers2} isLoading={isSpecialOffersLoading}/>
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

const mapDispatchToProps = (dispatch) => {
    return {
        set: (merchant: Merchant) => dispatch(setMerchant(merchant)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTab)
