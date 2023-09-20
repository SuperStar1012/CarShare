import React, { useEffect } from "react"
import { Dimensions, View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native"
import OnBoardingImage_1 from '../../assets/images/onboarding/onboarding_2.svg'
import SliderImage_1 from '../../assets/images/onboarding/slider_2.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 430

const OnBoardingScreen_2 = ({ navigation }) => {

    useEffect(() => {

    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.skip_button}>Skip</Text>
                </View>
                <View style = {{alignItems: 'center'}}>
                    <OnBoardingImage_1 width={317 * scaleFactor} height={317 * scaleFactor} style={{ marginTop: 29 * scaleFactor }} />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.headerText}>Renters can make reservations through the application by paying</Text>
                <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac magna non.</Text>
                <SliderImage_1 width={46 * scaleFactor} height={10 * scaleFactor} style={styles.slider_image} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button_container} onPress={() => navigation.navigate("Login-Register")}>
                    <Text style={styles.button_text}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        paddingTop: 41 * scaleFactor,
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
        backgroundColor: "white"

    },
    headerText: {
        paddingLeft: 24 * scaleFactor,
        paddingRight: 24 * scaleFactor,
        marginTop: 48 * scaleFactor,
        color: 'black',
        fontSize: 22,
        // fontFamily: 'Montserrat',
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 33,
        wordWrap: 'break-word'
    },
    contentText: {
        marginTop: 20 * scaleFactor,
        paddingLeft: 24 * scaleFactor,
        paddingRight: 24 * scaleFactor,
        color: 'rgba(0,0,0,0.50)',
        fontSize: 17,
        // fontFamily: 'Urbanist',
        fontWeight: '400',
        lineHeight: 24,
        wordWrap: 'break-word',
        textAlign: 'center'
    },
    skip_button: {
        textAlign: 'right',
        marginRight: 4 * scaleFactor,
        color: '#00A86B',
        fontSize: 18,
        // fontFamily: 'Montserrat',
        fontWeight: '500',
        wordWrap: 'break-word'
    },
    content: {
        alignItems: 'center'
    },
    slider_image: {
        marginTop: 60 * scaleFactor
    },
    button_container: {
        width: '100%',
        marginTop: 70 * scaleFactor,
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A86B',
        boxShadow: '0px 4px 17px rgba(0, 168, 107, 0.20)',
        borderRadius: 20,
        overflow: 'hidden',
        gap: 10,
        display: 'inline-flex',
    },
    button_text: {
        color: 'white',
        fontSize: 18,
        // fontFamily: 'Urbanist',
        fontWeight: '700',
        wordWrap: 'break-word'
    }
}

)

export default OnBoardingScreen_2
