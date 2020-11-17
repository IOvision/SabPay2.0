import React from 'react'
import {View, StyleSheet, Text} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import colors from '../../assets/colors';

export default function DeliveryStatus({data, counter, style}) {
  const stepIndicatorStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 40,
    separatorStrokeWidth: 3,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: colors.primary,
    separatorFinishedColor: colors.primary,
    stepIndicatorFinishedColor: colors.primary,
    stepIndicatorLabelFontSize: 15,
    currentStepIndicatorLabelFontSize: 15,
    stepIndicatorUnFinishedColor: colors.mediumGrey,
    labelSize: 15,
    separatorUnFinishedColor: colors.mediumGrey,
    stepIndicatorLabelUnFinishedColor: colors.white,
    labelColor: colors.primary,
    currentStepLabelColor: colors.primary,
  };
  return (
    <View style={[styles.container, style]}>
       <StepIndicator
        customStyles={stepIndicatorStyles}
        stepCount={data.length}
        direction="vertical"
        currentPosition={counter}
        labels={data.map((item) => item.status)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    flex: 1,
    flexDirection: 'row',
  },
});