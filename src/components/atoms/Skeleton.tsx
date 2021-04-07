import { View } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
import React from 'react'
// import Animated, { Clock, Easing, startClock, useCode, block, set, cond, Value, timing, eq} from 'react-native-reanimated'

export interface Props {
    width: number, 
    height: number, 
    borderRadius: number,
    style?: any
  }

const Skeleton: React.FC<Props> = ({width, height, borderRadius, style}) => {
    // const animatedValue = new Animated.Value(0)
    // const clock = new Clock();

    // const runTiming = clock => {
    //     const state = {
    //         finished: new Value(0),
    //         position: new Value(0),
    //         frameTime: new Value(0),
    //         time: new Value(0),
    //     }
    //     const config = {
    //         toValue: new Value(1),
    //         duration: 1000,
    //         easing: Easing.inOut(Easing.ease)
    //     };
    //     return block([
    //         timing(clock, state, config),
    //         cond(eq(state.finished, 1), [
    //             set(state.finished, 0),
    //             set(state.position, 0),
    //             set(state.frameTime, 0),
    //             set(state.time, 0)
    //         ]),
    //         state.position
    //     ])
    // }

    // useCode(() => block([
    // startClock(clock), set(animatedValue, runTiming(clock))
    // ]), []);


    // const translateX = animatedValue.interpolate({
    //     inputRange: [0,1],
    //     outputRange: [-1, width/2]
    // })
    return ( 
        <View style={[style, {backgroundColor: "#f0f0f0", height: height, width: width, borderRadius: borderRadius}]}>
        </View>
    )
}

export default Skeleton