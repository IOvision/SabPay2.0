import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import User from '../../models/User'
import { BodyText } from '../atoms/Text'
import Colors from '../../assets/colors'
import { Dimensions, View, Text } from 'react-native'
import { Divider, RadioButton } from 'react-native-paper'
import colors from '../../assets/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import LocationView from '../molecules/LocationView'
import Animated, { block, clockRunning, cond, debug, Easing, set, startClock, stopClock, timing, Value } from 'react-native-reanimated'

export interface Props {
    user: User,
    setSelected: React.Dispatch<React.SetStateAction<number>>,
    selected: string
}

export interface Handle {
    openAddress: () => void
}

const {height, width} = Dimensions.get('window')

const AddressDetails: React.ForwardRefRenderFunction<Handle, Props> = forwardRef(({user, setSelected, selected}, ref) => {
    const [translateY, setTranslateY] = useState(height)
    const [state, setState] = useState("old")
    useImperativeHandle(ref, () => ({
        openAddress() {
            setTranslateY(0)
        }
    }))

    function runTiming(clock, value, dest) {
        const state={
            finished: new Value(0),
            position: value,
            time: new Value(0),
            frameTime: new Value(0)
        }

        const config = {
            duration: 1000,
            toValue: dest,
            easing: Easing.inOut(Easing.cubic)
        }

        return block([
            cond(clockRunning(clock), 0, [
                set(state.finished, 0),
                set(state.time, 0),
                set(state.position, value),
                set(state.frameTime, 0),
                set(config.toValue, dest),
                startClock(clock),
            ]),
            timing(clock, state, config),
            cond(state.finished, debug('stop clock', stopClock(clock))),
            state.position
        ]);
    }

    const toggleView = () => {
        setTranslateY(height)
    }
    
    return (
        <Animated.View style={{flex: 1, height, width, position: 'absolute', backgroundColor: 'transparent', transform:[{translateY}]}}>
            <View style={{height, width, position: 'absolute', opacity: 0.8, backgroundColor: 'black'}} />
            {
                state == "old" ? <View style={{flex: 1, height, marginTop: height/3, backgroundColor: 'white', padding: 15}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <BodyText style={{fontSize: 24, color: Colors.primary}}>Select an address</BodyText>
                    <Icon name="close" color={Colors.grey} size={22} onPress={toggleView} />
                </View>
                <Divider style={{marginVertical: 10}} />
                <TouchableOpacity onPress={() => setState("new")}>
                    <View style={{
                        flexDirection: 'row', 
                        backgroundColor: 'white', 
                        borderWidth: 2, 
                        borderColor: colors.primary,
                        borderRadius: 5, 
                        padding: 7, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                    }}>
                        <Icon name="plus" color={Colors.primary} size={22} />
                        <Text style={{
                            fontSize: 18, 
                            textAlign: 'center', 
                            color: colors.primary,
                            marginLeft: 5
                        }}>Add address</Text>
                    </View>
                </TouchableOpacity>
                <BodyText style={{fontSize: 24, color: Colors.primary, marginTop: 20}}>Saved Addresses</BodyText>
                <Divider style={{marginBottom: 10}} />
                <RadioButton.Group onValueChange={(value: string) => setSelected(parseInt(value))} value={selected.toString()}>
                    {
                        user.address.map((text, index) => (
                            <View key={index.toString()}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5 }}>                                
                                    <BodyText style={{fontSize: 18}}>{text}</BodyText>
                                    <RadioButton color={colors.primary} value={index.toString()} />   
                                </View>
                                <Divider style={{marginVertical: 5}} />
                            </View>
                        ))
                    }
                </RadioButton.Group>
            </View>
        : <View style={{flex: 1, height, marginTop: height/3, backgroundColor: 'white', padding: 15}}><LocationView state={state} setState={setState}/></View>
            }
            </Animated.View>
    )
})

export default AddressDetails