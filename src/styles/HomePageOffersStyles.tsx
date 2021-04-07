import { StyleSheet, Dimensions, ViewStyle } from 'react-native'
const windowWidth = Dimensions.get('window').width;

interface Style {
    container1: ViewStyle,
    container2: ViewStyle,
    view1: ViewStyle,
    view2: ViewStyle,
    view3: ViewStyle,
    view4: ViewStyle,
    circleView: ViewStyle,
    image: ViewStyle
}

const styles = StyleSheet.create<Style>({
    container1: {
        height: 150,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flex: 1,
        marginBottom: -5,
        flexDirection: "row",
    },
    container2: {
        height: 150,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        flex: 1,
        marginBottom: -5,
        flexDirection: "row"
    },
    view1: {
        display: "flex", flex: 1, backgroundColor: "yellow", borderTopLeftRadius: 10, justifyContent: "center", alignItems: "center"
    },
    view2: {
        display: "flex", flex: 1, backgroundColor: "violet", borderTopRightRadius: 10, justifyContent: "center", alignItems: "center"
    },
    view3: {
        display: "flex", flex: 1, backgroundColor: "aqua", borderBottomLeftRadius: 10, justifyContent: "center", alignItems: "center"
    }, 
    view4: {
        display: "flex", flex: 1, backgroundColor: "pink", borderBottomRightRadius: 10, justifyContent: "center", alignItems: "center"
    },
    circleView: { 
        position: "absolute",
         width: 100,
         height: 100, 
         backgroundColor: "purple", 
         borderRadius: 50, 
         alignSelf: "center", 
         marginTop: windowWidth/4,
         justifyContent: "center",
         alignItems: "center"
    },
    image: {
        width: "60%",
        height: "70%"
    }
})  

export default styles