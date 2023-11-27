import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import EllipseImage from '../../assets/images/user/home/ellipse.svg'
import ElementImage from '../../assets/images/user/home/element.svg'
import LocationImage from '../../assets/images/user/home/location.svg'
import VecotorImage from '../../assets/images/user/home/vector.svg'
import DocumentImage from '../../assets/images/user/home/document-filter.svg'
import HomeCarImage from '../../assets/images/user/category/home_car_image.svg'

import CardImage1 from '../../assets/images/user/home/card_28'
import ArrowImage from '../../assets/images/user/home/arrow.svg'
import MapImage from '../../assets/images/user/home/map_icon.svg'

import HomeButton from '../../components/buttons/HomeButton'
import HomeCard from '../../components/cards/HomeCard'
import HomeCarCard from "../../components/cards/HomeCarCard";
import FooterMenu from "../../components/menus/FooterMenu";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import MessageScreen from "./MessageScreen";
import NotificationScreen from "./NotificationScreen";


const { width, height } = Dimensions.get('window')
const scaleFactor = width / 414

const MainScreen = ({ navigation }) => {
    const [menu, setMenu] = useState("home");
    const missHandle = () => {
        // setModalVisible(false)
        Keyboard.dismiss()
    }
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={styles.container}>
                {
                    menu == "home" ? <HomeScreen navigation={navigation} /> : (menu == "profile" ? <ProfileScreen navigation={navigation}  /> : (menu == "chat" ? <MessageScreen navigation={navigation} /> : (menu == "notification" ? <NotificationScreen navigation={navigation} /> : <></>)))
                }
                <View style={styles.footer}>
                    <FooterMenu navigation={navigation} myMenu={menu} setMyMenu={setMenu} />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        zIndex: 3,
        width: '100%',
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
        borderBottomLeftRadius: 20 * scaleFactor,
        borderBottomRightRadius: 20 * scaleFactor
    },
    header_menu: {
        zIndex: 3,
        marginTop: 33 * scaleFactor,
        position: 'relative',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    location_header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    location_header_text: {
        marginLeft: 8 * scaleFactor,
        color: 'white',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Inter',
        fontWeight: '500',
    },
    search_menu: {
        marginBottom: 21 * scaleFactor,
        marginTop: 40 * scaleFactor,
        paddingLeft: 15 * scaleFactor,
        paddingRight: 15 * scaleFactor,
        width: '100%',
        borderColor: 'white',
        borderWidth: 1 * scaleFactor,
        borderStyle: 'solid',
        height: 50 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search_text: {
        marginLeft: 8 * scaleFactor,
        height: 50 * scaleFactor,
        width: 286 * scaleFactor,
        color: 'white',
        fontSize: 13 * scaleFactor,
        fontFamily: 'Mulish',
        fontWeight: '400',
        letterSpacing: 0.26,
    },
    content: {
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
        zIndex: 2
    },
    car_type_content: {
        marginTop: 21 * scaleFactor,
        marginBottom: 22 * scaleFactor,
        flexDirection: 'row'
    },
    category_header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 21 * scaleFactor
    },
    category_header_text: {
        color: 'black',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
    category_header_see: {
        color: '#00A86B',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 15,
    },
    category_content: {
        // flexDirection: 'row'
    },
    recommendations: {
        marginTop: 35 * scaleFactor,
    },
    rec_topic: {
        color: '#1E2022',
        fontSize: 19 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '600',
        letterSpacing: 1
    },
    recommendations_header: {
        marginTop: 17 * scaleFactor,
    },
    recommendations_content: {
        width: "100%",
        marginTop: 21 * scaleFactor,
        flexDirection: 'column',
    },
    footer: {
        zIndex: 0,
    },
    map_icon: {
        zIndex: 3,
        position: 'absolute',
        top: height * 0.7 * scaleFactor,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25 * scaleFactor,
        left: width * scaleFactor - 66 - 25,
        width: 66 * scaleFactor,
        height: 66 * scaleFactor,
        backgroundColor: '#00A86B',
        boxShadow: '0px 15px 13px rgba(0, 0, 0, 0.04)',
        borderRadius: 9999,
        borderWidth: 2,
        borderColor: 'white',
        borderStyle: 'solid'
    },
    map_text: {
        marginTop: 4 * scaleFactor,
        color: 'white',
        fontSize: 10 * scaleFactor,
        fontFamily: 'Poppins',
        fontWeight: '500'
    }

})

export default MainScreen
