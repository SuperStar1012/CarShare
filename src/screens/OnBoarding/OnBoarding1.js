import React, { useEffect } from "react"
import { Dimensions, View, StyleSheet, Text, TouchableOpacity, SafeAreaView, BackHandler,Alert } from "react-native"
import OnBoardingImage_1 from '../../assets/images/onboarding/onboarding_1.svg'
import SliderImage_1 from '../../assets/images/onboarding/slider_1.svg'


const { width } = Dimensions.get('window')
const scaleFactor = width / 430

const OnBoardingScreen_1 = ({ navigation }) => {
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to exit?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, [navigation]);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.skip_button}>Skip</Text>
                </View>
                <OnBoardingImage_1 width={397.5 * scaleFactor} height={265 * scaleFactor} style={{ marginTop: 55 * scaleFactor }} />
            </View>
            <View style={styles.content}>
                <Text style={styles.headerText}>Owner can rent out their vehicles to individual in need</Text>
                <Text style={styles.contentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac magna non.</Text>
                <SliderImage_1 width={46 * scaleFactor} height={10 * scaleFactor} style={styles.slider_image} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button_container} onPress={() => navigation.navigate('OnBoardingScreen_2')}>
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
        paddingLeft: 16 * scaleFactor,
        paddingRight: 16 * scaleFactor,
        backgroundColor: "white"

    },
    headerText: {
        marginTop: 103 * scaleFactor,
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
        marginTop: 70 * scaleFactor
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
    footer: {
        paddingLeft: 8.5 * scaleFactor,
        paddingRight: 8.5 * scaleFactor
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

export default OnBoardingScreen_1
