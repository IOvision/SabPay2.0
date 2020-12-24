import React, { useState, useEffect } from 'react';
import {Text, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps'
import RNLocation from "react-native-location";
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'

export interface Props {
    navigation: any
}

const MapScreen: React.FC<Props> = ({navigation}) => {
  MapboxGL.setAccessToken('sk.eyJ1IjoiYmV0YXZpc2lvbmlvIiwiYSI6ImNrajJqOHV3bDAxaW0ycG52ODY2N2dnejYifQ.x5BERYSGry9zBk22iLjMsw');
    const [marker, setMarker] = useState([28.73873873873874, 77.1007792729739])
    const [latitude, setLatitude] = useState(undefined)
    const [longitude, setLongitude] = useState(undefined)
    const [screenPointX, setScreenPointX] = useState(undefined)
    const [screenPointY, setScreenPointY] = useState(undefined)
    const [location, setLocation] = useState({})

    let locationSubscription = null
    useEffect(() => {
      RNLocation.configure({
        distanceFilter: 5.0
      });
      
      RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
          detail: "fine",
          rationale: {
            title: "Location permission",
            message: "We use your location to demo the library",
            buttonPositive: "OK",
            buttonNegative: "Cancel"
          }
        }
      }).then(granted => {
        if (granted) {
          _startUpdatingLocation();
        }
      });
    }, [])

    const _startUpdatingLocation = () => {
      console.log("start")
      locationSubscription = RNLocation.subscribeToLocationUpdates(
        locations => {
          // this.setState({ location: locations[0] });
          console.log("update: " + Object.keys(locations[0]))
          setLocation(locations[0])
          setLatitude(locations[0].latitude)
          setLongitude(locations[0].longitude)
          setMarker([locations[0].longitude, locations[0].latitude])
        }
      );
    };

    const hasValidLastClick = () => {
        return (
          typeof latitude === 'number' &&
          typeof longitude === 'number'
        );
      }

    const setCoordinates = (event: any) => {
        const {geometry, properties} = event;
        setLatitude(geometry.coordinates[1])
        setLongitude(geometry.coordinates[0])
        setScreenPointX(properties.screenPointX)
        setScreenPointY(properties.screenPointY)
        setMarker([geometry.coordinates[0], geometry.coordinates[1]])
    }

    const renderLastClicked = () => {
        if (!hasValidLastClick) {
            return (
              <View>
                <Text>Click the map!</Text>
              </View>
            );
        }
        return (
            <View>
                <PurpleRoundBtn text="Confirm" onPress={() => navigation.replace("Change Store", {
                  latitude: latitude,
                  longitude: longitude
                })}/>
                <PurpleRoundBtn text="Reset" onPress={_startUpdatingLocation}/>
                <Text>Latitude: {latitude}</Text>
                <Text>Longitude: {longitude}</Text>
                <Text>Screen Point X: {screenPointX}</Text>
                <Text>Screen Point Y: {screenPointY}</Text>
            </View>
        );
    }


    return (
        <View style={{display: "flex", flex: 1, backgroundColor: "yellow"}}>
            <MapboxGL.MapView
                style={{display: "flex", flex: 1, backgroundColor: "red"}}
                onPress={(feature) => setCoordinates(feature)} 
                zoomEnabled={true}
                surfaceView={true}>
                <MapboxGL.Camera 
                  zoomLevel={10}
                />
                <MapboxGL.PointAnnotation
                    key="key1"
                    id="id1"
                    title="Test"
                    coordinate={marker}>
                </MapboxGL.PointAnnotation>
            </MapboxGL.MapView>
            {renderLastClicked()}
        </View>
    )
}

export default MapScreen