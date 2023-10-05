import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Text, Keyboard, TouchableWithoutFeedback } from "react-native"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const TermScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <Text style={styles.header_text}>Terms & Conditions</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.content_header_text}>Carshare is a community where anyone can belong</Text>
                    <Text style={styles.content_main_text}>
                        To ensure this, we’re asking you to commit to respecting everyone on Carshare. I agree to treat everyone in the Carshare community – regardless of their race, religion, national origin, ethnicity, skin colour, disability, sex, gender identity, sexual orientation or age – with respect, and without judgement or bias.
                        <Text style={styles.learn_text}>Learn more</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.agree_button} onPress={() => navigation.navigate('LocationOnScreen')}>
                    <Text style={styles.button_text}>Agree & Join</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.decline_button}>
                    <Text style={styles.button_text}>Decline</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
    },
    header: {
        marginTop: 31 * scaleFactor,
    },
    header_text: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34,
        wordWrap: 'break-word'
    },
    content: {
        marginLeft: 5 * scaleFactor,
        marginTop: 46 * scaleFactor
    },
    content_header_text: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '600',
        wordWrap: 'break-word',
    },
    content_main_text: {
        marginTop: 10 * scaleFactor,
        color: 'rgba(0,0,0,0.60)',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 32,
    },
    learn_text: {
        color: 'rgb(0,0,0)',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 32,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    footer: {
        width: '100%',
        marginBottom: 30 * scaleFactor,
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
    decline_button: {
        marginTop: 25 * scaleFactor,
        width: '100%',
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E43D3D',
        borderRadius: 20
    },
    button_text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        wordWrap: 'break-word'
    }
})

export default TermScreen
