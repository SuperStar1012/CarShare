import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity, Platform, PermissionsAndroid, SafeAreaView, Text, Alert } from "react-native"
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import MapView, { Marker } from 'react-native-maps';

import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import LocationTicketImage from '../../../assets/images/auth/register/location-tick.svg'
import LocationModal from "../../../components/modals/LocationModal"
import Geolocation from '@react-native-community/geolocation';
import { useDispatch, useSelector } from "react-redux";
import { registerAccount } from "../../../states/redux/auth/actions";
import { API_BASE_URL } from '../../../config/serverApiConfig';

import axios from 'axios';

const { width } = Dimensions.get('window')
const scaleFactor = width / 414
const LocationScreen = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const userData = useSelector(state => state.auth.registerData)
    const dispatch = useDispatch();
    const requestLocationPermission = async () => {
        if (Platform.OS === 'ios') {
            const response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            return response === RESULTS.GRANTED;
        }
        const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        return response === RESULTS.GRANTED;
    };
    const getLocation = async () => {
        if (!await requestLocationPermission()) {
            console.error("Location permission not granted!");
            return;
        }
        await Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                return { latitude, longitude };
                // navigation.navigate("HomeScreen");
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        dispatch(registerAccount(userData));
        if (response.data == "Error") {
            Alert.alert('Error', 'This email was registered al', [
                {
                    style: 'cancel',
                }, { text: 'OK', onPress: ()=>navigation.navigate("Login-Register") },
            ]);
        }
        else {
            navigation.navigate("HomeScreen");
        }

    };
    // const { latitude, longitude } = getLocation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={{ flex: 1 }}>
                    {/* <MapView
                        style={{ flex: 1 }}
                        initialRegion={{
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>
                        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
                    </MapView> */}
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => navigation.goBack()}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>Permission</Text>
                    </View>
                    <View style={visible == true ? styles.disabled_content : styles.content}>
                        <LocationTicketImage width={296 * scaleFactor} height={296 * scaleFactor} />
                        <Text style={styles.content_text}>Keep Track of where you live in</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <LocationModal navigation={navigation} modalVisible={visible} setModalVisible={setVisible} />
                    <TouchableOpacity style={styles.agree_button} onPress={() => getLocation()}>
                        <Text style={styles.button_text}>Location On</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    body: {
        flex: 1,
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
    },
    header: {
        marginTop: 40 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    header_icon: {
        position: 'absolute',
        left: 0,
    },
    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34 * scaleFactor,
    },
    content_text: {
        marginTop: 22 * scaleFactor,
        color: 'rgba(27.63,27.63,27.63,0.70)',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '600',
    },
    content: {
        width: '100%',
        alignItems: 'center',
        marginTop: 87 * scaleFactor
    },
    disabled_content: {
        display: 'none',
        width: '100%',
        alignItems: 'center',
        marginTop: 87 * scaleFactor
    },
    footer: {
        width: '100%',
        marginBottom: 28 * scaleFactor,
    },
    agree_button: {
        width: '100%',
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A86B',
        boxShadow: '0px 4px 17px rgba(0, 168, 107, 0.20)',
        borderRadius: 20
    },
    button_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
    }
})

export default LocationScreen
