import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Text, Keyboard, TouchableWithoutFeedback } from "react-native"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import OTPModal from "../../../components/modals/OTPModal"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const OTPScreen = ({ navigation }) => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [value3, setValue3] = useState("")
    const [value4, setValue4] = useState("")
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>

                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                            <ArrowLeftImage style={styles.header_icon} width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>Email Verification</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.content_topic}>Enter OTP</Text>
                        <Text style={styles.content_text}>Enter the 4 digit OTP verification Code</Text>
                        <Text style={styles.content_text}>we sent to loremipsum@gmail.com</Text>
                        <View style={styles.input_field}>
                            <TextInput style={value1 == "" ? styles.input_number : styles.input_specific_number} keyboardType="numeric" maxLength={1}  onChangeText={(e) => setValue1(e)} />
                            <TextInput style={value2 == "" ? styles.input_number : styles.input_specific_number} keyboardType="numeric" maxLength={1} onChangeText={(e) => setValue2(e)} />
                            <TextInput style={value3 == "" ? styles.input_number : styles.input_specific_number} keyboardType="numeric" maxLength={1} onChangeText={(e) => setValue3(e)} />
                            <TextInput style={value4 == "" ? styles.input_number : styles.input_specific_number} keyboardType="numeric" maxLength={1} onChangeText={(e) => setValue4(e)} />
                        </View>
                        <Text style={styles.footer_text}>Did not get the code? <Text style={styles.resend_text}>Resend</Text></Text>
                    </View>
                </View>
                <OTPModal navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.login_button} onPress={() => setModalVisible(true)}>
                        <Text style={styles.login_text}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
        paddingTop: 38.7 * scaleFactor
    },
    header: {
        flexDirection: 'row',
        width: '100%',

    },
    header_text: {
        width: '100%',
        color: 'black',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34 * scaleFactor,
        wordWrap: 'break-word',
        textAlign: 'center',
        marginLeft: -38.7 * scaleFactor / 2
    },
    content: {
        marginTop: 61 * scaleFactor,
    },
    content_topic: {
        color: 'black',
        fontSize: 34,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        // lineHeight: 24,
        wordWrap: 'break-word',
        textAlign: 'center',
        marginBottom: 45 * scaleFactor,

    },
    content_text: {
        color: 'rgba(0,0,0, 0.40)',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 24,
        wordWrap: 'break-word',
        textAlign: 'center'
    },
    input_field: {
        marginLeft: 40 * scaleFactor,
        marginRight: 40 * scaleFactor,
        marginTop: 45 * scaleFactor,
        width: 292 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input_number: {
        width: 52 * scaleFactor,
        height: 52 * scaleFactor,
        backgroundColor: 'rgba(217, 217, 217, 0.30)',
        borderRadius: 6,
        textAlign: 'center',
        color: '#00A86B',
        fontSize: 27,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        lineHeight: 24,
        wordWrap: 'break-word'
    },
    input_specific_number: {
        width: 52 * scaleFactor,
        height: 52 * scaleFactor,
        backgroundColor: 'rgba(217, 217, 217, 0.30)',
        borderRadius: 6,
        borderColor: '#00A86B',
        borderWidth: 2,
        borderStyle: 'solid',
        textAlign: 'center',
        color: '#00A86B',
        fontSize: 27,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        lineHeight: 24,
        wordWrap: 'break-word'
    },
    footer_text: {
        textAlign: 'center',
        marginTop: 45 * scaleFactor,
        color: 'rgba(0, 0, 0, 0.80)',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        wordWrap: 'break-word'

    },
    resend_text: {
        color: '#00A86B',
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        wordWrap: 'break-word'
    },
    buttons: {
        width: '100%'
    },
    login_button: {
        height: 58 * scaleFactor,
        width: '100%',
        backgroundColor: '#00A86B',
        boxShadow: '0px 4px 17px rgba(0, 168, 107, 0.20)',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
        marginBottom: 30 * scaleFactor

    },
    login_text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        wordWrap: 'break-word'
    },


})

export default OTPScreen
