import React from 'react'
import {View, StyleSheet, ViewStyle } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import colors from '../../assets/colors';

export interface Props {
  style: ViewStyle,
  counter: string
}

const DeliveryStatus: React.FC<Props> = ({counter, style}) => {
  const data = [
    {
      "id": 0,
      "status": "Order Placed"
    }, 
    {
      "id": 1,
      "status": "Order Confirmed"
    }, 
    {
      "id": 2,
      "status": "Out for delivery"
    }, 
    {
      "id": 3,
      "status": "Order Delivered"
    }
  ]
  let counterId;
  if(counter === "order placed")
    counterId = 0
  else if(counter === "order confirmed")
    counterId = 1
  else if(counter === "Out for delivery")
    counterId = 2
  else
    counterId = 3

  //order placed, order confirmed, Out for delivery, order delivered
  const stepIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: colors.primary,
    separatorFinishedColor: colors.primary,
    stepIndicatorFinishedColor: colors.primary,
    stepIndicatorLabelFontSize: 12,
    stepIndicatorLabelFinishedColor: "#FFF",
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorUnFinishedColor: colors.mediumGrey,
    labelSize: 15,
    separatorUnFinishedColor: colors.mediumGrey,
    stepIndicatorLabelUnFinishedColor: colors.white,
    labelColor: colors.mediumGrey,
    currentStepLabelColor: colors.primary,
    labelFontFamily: 'OpenSans-Regular',
  };
  return (
    <View style={[styles.container, style]}>
       <StepIndicator
        customStyles={stepIndicatorStyles}
        stepCount={data.length}
        direction="vertical"
        currentPosition={counterId}
        labels={data.map((item) => item.status)}
      />
    </View>
  )
}

export default DeliveryStatus

const styles = StyleSheet.create({
  container: {
    height: 150,
    flex: 1,
    flexDirection: 'row',
  },
});