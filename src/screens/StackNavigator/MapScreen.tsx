import React, { useState, useEffect } from 'react';
import {Text, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps'
import RNLocation from "react-native-location";
import PurpleRoundBtn from '../../components/atoms/PurpleRoundBtn'
import Background from '../../components/atoms/Background';
import RoundView from '../../components/atoms/RoundView';
import { BodyText, CaptionText, HeaderText } from '../../components/atoms/Text';

export interface Props {
    navigation: any
}

const MapScreen: React.FC<Props> = ({navigation}) => {
  MapboxGL.setAccessToken('sk.eyJ1IjoiYmV0YXZpc2lvbmlvIiwiYSI6ImNrajJqOHV3bDAxaW0ycG52ODY2N2dnejYifQ.x5BERYSGry9zBk22iLjMsw');
    const [marker, setMarker] = useState([28.73873873873874, 77.1007792729739])
    const [latitude, setLatitude] = useState(undefined)
    const [longitude, setLongitude] = useState(undefined)
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
          <View style={{margin: 10}}>
            <CaptionText>Location</CaptionText>
            <BodyText>Latitude: {latitude}</BodyText>
            <BodyText>Longitude: {longitude}</BodyText>
            <PurpleRoundBtn style={{alignSelf: "flex-end"}} text="Confirm >>" onPress={() => navigation.replace("Change Store", {
              latitude: latitude,
              longitude: longitude
            })}/>
          </View>
        );
    }


    return (
        <View style={{display: "flex", flex: 1}}>
            <Background />
            <MapboxGL.MapView
                style={{display: "flex", flex: 1}}
                onPress={(feature) => setCoordinates(feature)} 
                zoomEnabled={true}
                surfaceView={true}
                logoEnabled={false}
                compassEnabled={true}>
                <MapboxGL.Camera 
                  zoomLevel={4}
                  centerCoordinate={[79.001124, 22.966484]}/>
                <MapboxGL.PointAnnotation
                    key="key"
                    id="id"
                    title="Test"
                    coordinate={marker}>
                </MapboxGL.PointAnnotation>
            </MapboxGL.MapView>
            {renderLastClicked()}
        </View>
    )
}

export default MapScreen