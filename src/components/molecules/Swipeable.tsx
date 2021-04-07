import React from 'react'
import { View, StyleSheet, Image, Dimensions} from 'react-native'
import { Pages } from 'react-native-pages'
// import Skeleton from "../atoms/Skeleton";

const {width} = Dimensions.get('window')

export interface Props {
    data: string[]
}

const Swipeable: React.FC<Props> = ({data}) => {
    // if(isLoading) {
    //     return (
    //         <View style={styles.container}>
    //             <View >
    //                 <Skeleton borderRadius={10} height={150} width={width-30} />
    //             </View> 
    //         </View>
    //     )
    // }
    const children = () => {
        return data.map((element) => {
            return (
                <Image style={styles.children} source={{uri: `${element}`}} key={element}/> 
            )
        })
    }
    return (
        <View style={styles.container}>
           <Pages>
                {children()}
           </Pages> 
        </View>
    )
}

export default Swipeable

const styles = StyleSheet.create({
    container: {
        height: 150,
        flex: 1,
        marginBottom: 40,
    },
    children: {
        flex: 1, 
        backgroundColor: 'red',
        borderRadius: 10,
        height: 150,
        width: width-30,
    }
})
