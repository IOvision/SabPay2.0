import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function App() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'purple',
        padding: 16,
        height: 450,
      }}
    >
      <Text style={{
        fontSize: 24, 
        fontWeight: 'bold', 
        alignSelf: 'center',
        color: 'white'
        }}
      >Profile</Text>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'papayawhip',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button
          title="Open Bottom Sheet"
          //snap to works on indedx of array, here snapTo(0) = snapTo 450
          onPress={() => sheetRef.current.snapTo(0)}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        //height of bottom sheet, need to be in decreasing order
        snapPoints={[450, 100, 100]}
        borderRadius={20}
        renderContent={renderContent}
      />
    </>
  );
}