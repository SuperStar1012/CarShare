import React, { useEffect, useState } from "react"
import {
    Dimensions, View, StyleSheet, TouchableOpacity, Text, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView,
    Keyboard, ScrollView, SafeAreaView
} from "react-native"
import { useDispatch, useSelector } from "react-redux";

import CheckBox from '@react-native-community/checkbox';
import SplashAvatar from '../../../assets/images/avatar/splash_avatar.svg'
import UserImage from '../../../assets/images/auth/login/user.svg'
import PhoneImage from '../../../assets/images/auth/register/call.svg'
import SmsImage from '../../../assets/images/auth/register/sms.svg'
import LockImage from '../../../assets/images/auth/login/lock.svg'
import { register } from '../../../states/redux/auth/actions'


const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const Register_Screen = ({ navigation }) => {
    const storeAuth = useSelector(state => state.auth);
    const [auth, setAuth] = useState({});
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [checked, setChecked] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch();

    useEffect(() => {
        // Keyboard will show event
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true);
            }
        );

        // Keyboard will hide event
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    useEffect(() => {
        setAuth(storeAuth)
    }, [storeAuth])
    const onRegister = async () => {

        if (firstName == "")
            Alert.alert('Error', 'First name is required', [
                {
                    style: 'cancel',
                }, { text: 'OK' },
            ]);
        else if (lastName == "")
            Alert.alert('Error', 'Last name is required', [
                {
                    style: 'cancel',
                }, { text: 'OK' },
            ]);
        else if (phone == "")
            Alert.alert('Error', 'Phonenumber is required', [
                {
                    style: 'cancel',
                }, { text: 'OK' },
            ]);
        else if (email == "")
            Alert.alert('Error', 'Email is required', [
                {
                    style: 'cancel',
                }, { text: 'OK' },
            ]);
        else if (password == "")
            Alert.alert('Error', 'Password is required', [
                {
                    style: 'cancel',
                }, { text: 'OK' },
            ]);
        else if (confirmPassword == "")
            Alert.alert('Error', 'Confirm password is required', [
                {
                    style: 'cancel',
                }, { text: 'OK' },
            ]);
        else if (password != confirmPassword)
            Alert.alert('Error', 'Password does not match with Confirm password', [
                {
                    style: 'cancel',
                }, { text: 'OK' },
            ]);
        else if (checked == false)
            Alert.alert('Error', 'Agree this temrs service', [
                {
                    style: 'cancel',
                }, { text: 'OK' },
            ]);
        else {
            values = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                password: password,
                type: "register"
            };
            await dispatch(register({ registerData: values }));

            if (storeAuth.errorMessage != "") {
                Alert.alert('Error', storeAuth.errorMessage, [
                    {
                        style: 'cancel',
                    }, { text: 'OK' },
                ]);
            }
            else
                navigation.navigate("OTPResetScreen", { values: values })
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                    <View style={{ flex: 1 }}>
                        {keyboardVisible == false ? (
                            <View style={styles.header}>
                                <View style={styles.splash_avatar}>
                                    <SplashAvatar width={108 * scaleFactor} height={92 * scaleFactor} />
                                </View>
                                <View style={styles.header_text}>
                                    <Text style={styles.main_text}>Create Account</Text>
                                    <Text style={styles.content_text}>Please provide following details</Text>
                                </View>
                            </View>) : null}
                        <ScrollView style={{ flex: 1 }}>
                            <View style={styles.content}>
                                <View style={styles.input_content}>
                                    <Text style={styles.email_text}>First Name</Text>
                                    <View style={styles.email_input}>
                                        <UserImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                        <TextInput style={styles.email_text_input} onChangeText={(e) => setFirstName(e)}></TextInput>
                                    </View>
                                </View>
                                <View style={styles.input_content}>
                                    <Text style={styles.email_text}>Last Name</Text>
                                    <View style={styles.email_input}>
                                        <UserImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                        <TextInput style={styles.email_text_input} onChangeText={(e) => setLastName(e)} ></TextInput>
                                    </View>
                                </View>
                                <View style={styles.input_content}>
                                    <Text style={styles.email_text}>Phone Number</Text>
                                    <View style={styles.email_input}>
                                        <PhoneImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                        <TextInput style={styles.email_text_input} onChangeText={(e) => setPhone(e)} ></TextInput>
                                    </View>
                                </View>
                                <View style={styles.input_content}>
                                    <Text style={styles.email_text}>Email</Text>
                                    <View style={styles.email_input}>
                                        <SmsImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                        <TextInput style={styles.email_text_input} onChangeText={(e) => setEmail(e)}></TextInput>
                                    </View>
                                </View>
                                <View style={styles.input_content}>
                                    <Text style={styles.email_text}>Password</Text>
                                    <View style={styles.email_input}>
                                        <LockImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.password_image} />
                                        <TextInput style={styles.email_text_input} secureTextEntry={true} onChangeText={(e) => setPassword(e)}></TextInput>
                                    </View>
                                </View>
                                <View style={styles.input_content}>
                                    <Text style={styles.email_text}>Confirm Password</Text>
                                    <View style={styles.email_input}>
                                        <LockImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.password_image} />
                                        <TextInput style={styles.email_text_input} secureTextEntry={true} onChangeText={(e) => setConfirmPassword(e)}></TextInput>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                        <KeyboardAvoidingView style={styles.footer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                            <TouchableOpacity style={styles.agree_field} onPress={() => setChecked(!checked)}>
                                <View>
                                    <CheckBox
                                        disabled={false}
                                        value={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                </View>
                                <Text style={styles.agree_text}>
                                    By selecting
                                    <Text style={styles.agree_bold_text}> Agree and continue</Text>  below, I agree to <Text style={styles.agree_bold_text}>CarShare</Text> Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.
                                </Text>
                            </TouchableOpacity>
                            <View style={styles.buttons}>
                                <TouchableOpacity style={styles.login_button} onPress={() => onRegister()}>
                                    <Text style={styles.login_text}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </TouchableWithoutFeedback>
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
        paddingTop: 46 * scaleFactor
    },
    header: {
        alignItems: 'center',
        marginBottom: 21 * scaleFactor
    },
    splash_avatar: {
        marginBottom: 21 * scaleFactor
    },
    main_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 34 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        // wordWrap: 'break-word'
    },

    content_text: {
        marginTop: 15 * scaleFactor,
        color: 'rgba(0,0,0,0.70)',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor,
        // wordWrap: 'break-word'
    },
    input_content: {
        marginBottom: 15 * scaleFactor
    },
    email_text: {
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        // wordWrap: 'break-word'
    },
    email_input: {
        flexDirection: 'row',
        marginTop: 8 * scaleFactor,
        width: '100%',
        borderRadius: 18 * scaleFactor,
        borderColor: "rgba(0, 0, 0, 0.20)",
        borderWidth: 1.5,
        borderStyle: "solid",
        height: 58 * scaleFactor,
        alignItems: 'center'
    },
    user_image: {
        marginLeft: 23 * scaleFactor,
        marginRight: 18 * scaleFactor
    },
    email_text_input: {
        width: 266 * scaleFactor,
        // Email or username
        color: 'rgba(0,0,0, 0.40)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        // wordWrap: 'break-word'
    },
    password_text: {
        marginTop: 16 * scaleFactor,
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        // wordWrap: 'break-word'
    },
    password_input: {
        marginTop: 8 * scaleFactor,
        width: '100%',
        borderRadius: 18 * scaleFactor,
        borderColor: "rgba(0, 0, 0, 0.20)",
        borderWidth: 1.5,
        borderStyle: "solid"
    },
    password_input: {
        flexDirection: 'row',
        marginTop: 8 * scaleFactor,
        width: '100%',
        borderRadius: 18 * scaleFactor,
        borderColor: "rgba(0, 0, 0, 0.20)",
        borderWidth: 1.5,
        borderStyle: "solid",
        height: 58 * scaleFactor,
        alignItems: 'center'
    },
    password_image: {
        marginLeft: 23 * scaleFactor,
        marginRight: 18 * scaleFactor
    },
    email_text_input: {
        width: 266 * scaleFactor,
        // Email or username
        color: 'rgba(0,0,0, 0.40)',
        fontSize: 14,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        // wordWrap: 'break-word'
    },
    forget_text: {
        textAlign: 'right',
        marginTop: 14 * scaleFactor,
        color: '#00A86B',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24,
        // wordWrap: 'break-word'
    },
    agree_field: {
        marginBottom: 32 * scaleFactor,
        display: 'flex',
        flexDirection: 'row'
    },
    buttons: {
        width: '100%',
        marginBottom: 40 * scaleFactor
    },
    date_cvv: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date_input: {
        width: 183 * scaleFactor
    },
    cvv_input: {
        width: 172 * scaleFactor
    },
    agree_text: {
        marginLeft: 10 * scaleFactor,
        color: 'black',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Open Sans',
        fontWeight: '400',
        lineHeight: 22 * scaleFactor
    },
    agree_bold_text: {
        color: 'black',
        fontSize: 12 * scaleFactor,
        fontFamily: 'Open Sans',
        fontWeight: '700',
        lineHeight: 22 * scaleFactor,
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

    },
    login_text: {
        color: 'white',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
    },
    register_button: {
        height: 58 * scaleFactor,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0px 4px 17px rgba(0, 168, 107, 0.20)',
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "#00A86B",
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex'
    },
    register_text: {
        color: '#00A86B',
        fontSize: 18 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        // wordWrap: 'break-word'
    },
    footer: {
        alignItems: 'center',
        marginTop: 10 * scaleFactor
    },
    other_sign: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    register_field: {
        alignItems: 'center'
    },
    other_sign_text: {

        color: 'rgba(0, 0,0,0.30)',
        fontSize: 14 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        // wordWrap: 'break-word'
    },
    line_left: {
        marginRight: 10 * scaleFactor,
        width: 100 * scaleFactor,
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.30)',
        borderRadius: 30
    },
    line_right: {
        marginLeft: 10 * scaleFactor,
        width: 100 * scaleFactor,
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.30)',
        borderRadius: 30
    },
    social_field: {
        marginTop: 20 * scaleFactor,
        width: 210 * scaleFactor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    register_field: {
        marginTop: 95 * scaleFactor,
        display: 'flex',
        flexDirection: 'row'
    },
    account_text: {
        color: 'rgba(0,0,0,0.80)',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '400',
        // wordWrap: 'break-word'
    },
    signup_text: {
        marginLeft: 5 * scaleFactor,
        color: '#00A86B',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        // wordWrap: 'break-word'
    }

})

export default Register_Screen
