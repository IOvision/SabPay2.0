import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Animated, { call, interpolate } from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from "../../assets/colors";
import { HeaderText } from "../atoms/Text";

const { width, height } = Dimensions.get("window");
const { cond, eq, add, set, Value, event } = Animated;
export default class PlaceOrderDrag extends React.Component {
    constructor(props) {
        super(props)
        this.onDrop = this.onDrop.bind(this)
        this.dragX = new Value(0)
        this.offsetX = new Value(0)
        this.gestureState = new Value(-1)
        this.onGestureEvent = event([
            {
                nativeEvent: {
                    translationX: this.dragX,
                    state: this.gestureState
                }
            }
        ])
        const addX = add(this.offsetX, this.dragX)
        this.transX = cond(eq(this.gestureState, State.ACTIVE), addX, [
            cond(eq(this.gestureState, State.END), call([addX], this.onDrop))
        ])
        this.opacity = interpolate(this.transX, {
            inputRange: [0, width],
            outputRange: [1, 0.1],
        })
        this.priceOpacity = interpolate(this.transX, {
            inputRange: [0, width],
            outputRange: [1, -1]
        })
        this.textOpacity = interpolate(this.transX, {
            inputRange: [0, width],
            outputRange: [0, 2]
        })
        this.textY = interpolate(this.transX, {
            inputRange: [0, width],
            outputRange: [0, -width+80]
        })
    }
    
    saveDropZone = e => {
        const { width, height, x, y } = e.nativeEvent.layout
        this.top = y
        this.bottom = y + height
        this.left = x
        this.right = x + width
    }
    onDrop([x]) {
        if (x >= this.left){
            this.props.navigation.navigate("OrderPlacedScreen")
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Animated.View style={{opacity: this.priceOpacity}}><HeaderText style={{fontSize: 18}}>Rs. 285</HeaderText></Animated.View>
            <Animated.View style={{opacity: this.textOpacity, transform: [{translateX: this.textY}]}}><HeaderText style={{fontSize: 18}}>Order Placed!</HeaderText></Animated.View>
        </View>
        <View style={{marginTop: 10}}>
            <View style={{backgroundColor: colors.primary, padding: 5, borderRadius: 10}}>
                <PanGestureHandler
                maxPointers={1}
                onGestureEvent={this.onGestureEvent}
                onHandlerStateChange={this.onGestureEvent}
                >
                <Animated.View
                    style={[
                    {
                        opacity: this.opacity,
                        transform: [
                        {
                            translateX: this.transX,
                        },
                        ],
                    },
                    ]}
                >
                    <Icon name='cart' size={35} color='white' />
                </Animated.View>
                </PanGestureHandler>
                <View onLayout={this.saveDropZone} style={{width: 80, height: 45, alignSelf: 'flex-end', position: 'absolute'}} />
            </View>
        </View>
      </View>
    );
  }
}

const CIRCLE_SIZE = 70;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  box: {
    backgroundColor: "tomato",
    marginLeft: -(CIRCLE_SIZE / 2),
    marginTop: -(CIRCLE_SIZE / 2),
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderColor: "#000"
  },
});