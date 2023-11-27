import React, { useEffect, useState } from "react"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Dimensions, View, StyleSheet, TouchableOpacity, SafeAreaView, Text, Alert, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native"
import SplashAvatar from '../../../assets/images/avatar/splash_avatar.svg'
import EmailImage from '../../../assets/images/social/email.svg'
import FacebookImage from '../../../assets/images/social/facebook.svg'
import VectorImage from '../../../assets/images/social/vector.svg'
import GoogleImage from '../../../assets/images/social/google.svg'
import UserImage from '../../../assets/images/auth/login/user.svg'
import LockImage from '../../../assets/images/auth/login/lock.svg'
import axios from "axios";
import { API_BASE_URL } from '../../../config/serverApiConfig';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../states/redux/auth/actions";

// import EyeSlashImage from '../../../assets/images/auth/login/eye-slash.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const Login_Screen = ({ navigation }) => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useSelector(state => state.auth)
    const [loginStatus,setLoginStatus] = useState(false);
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
        setLoginStatus(auth.isLoggedIn);
        // if(auth.isLoggedIn == true)
        //     navigation.navigate("HomeScreen")
    },[auth])
    const handleLogin = async () => {
        const data = {
            email: email,
            password: password
        }
        dispatch(login(data));
        
        if (loginStatus == false) {
            Alert.alert('Error', "Password does not mactch.", [
                {
                    style: 'cancel',
                }, { text: 'OK' },
            ]);
        }
        else {
            navigation.navigate("MainScreen");
        }
    }
    const signInWithGoogleAsync = async () => {
        // try {
        //     await GoogleSignin.hasPlayServices();
        //     const userInfo = await GoogleSignin.signIn();
        //     const idToken = userInfo.idToken;
        //     sendTokenToServer(idToken);
        //     // TODO: Send idToken to the server using fetch or axios
        //     // e.g., fetch('YOUR_SERVER_ENDPOINT', { method: 'POST', headers: { ... }, body: JSON.stringify({ token: idToken }) })

        // } catch (error) {
        //     console.error(error);
        //     Alert.alert('Login failed', error.message);
        // }
    };
    async function sendTokenToServer(token) {
        try {
            let response = await fetch(API_BASE_URL + 'auth/loginWithGoogle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });

            let json = await response.json();
            if (response.status === 200) {
                console.log('User authenticated!', json);
                // Navigate or do something with the authenticated user
            } else {
                console.log('Failed to authenticate user.');
            }
        } catch (error) {
            console.error('Error sending token to server:', error);
        }
    }
    const handleForgetPassword = async () => {
        const data = {
            email: email,
            password: password
        }
        const response = await axios.post(API_BASE_URL + "auth/login", data);
        if (response.data.verifyMail == true)
            navigation.navigate("ForgetPasswordScreen", { email: email });
        else {
            Alert.alert('Error', "Email was not registered", [
                {
                    style: 'cancel',
                }, { text: 'OK' },
            ]);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.body}>
                    <ScrollView style={{ flex: 1 }} scrollEnabled={Platform.OS === "ios" ? true : false}>
                        <View style={keyboardVisible == false ? styles.header : styles.disabled_header}>
                            <View style={styles.splash_avatar}>
                                <SplashAvatar width={108 * scaleFactor} height={92 * scaleFactor} />
                            </View>
                            <View style={styles.header_text}>
                                <Text style={styles.main_text}>Welcome Back</Text>
                                <Text style={styles.content_text}>Please provide email & Password</Text>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.main_content}>
                                <View style={styles.email_content}>
                                    <Text style={styles.email_text}>Email or username</Text>
                                    <View style={styles.email_input}>
                                        <UserImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.user_image} />
                                        <TextInput style={styles.email_text_input} onChangeText={(val) => setEmail(val)}></TextInput>
                                    </View>
                                </View>
                                <View style={styles.password_content}>
                                    <Text style={styles.password_text}>Password</Text>
                                    <View style={styles.password_input}>
                                        <LockImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.password_image} />
                                        <TextInput style={styles.email_text_input} secureTextEntry={true} onChangeText={(val) => setPassword(val)}></TextInput>
                                    </View>
                                    <TouchableOpacity onPress={() => { handleForgetPassword() }}>
                                        <Text style={styles.forget_text}>Forget Password</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    </ScrollView>
                    <KeyboardAvoidingView style={styles.footer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.login_button} onPress={() => handleLogin()}>
                                <Text style={styles.login_text}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.other_sign}>
                            <View style={styles.line_left}></View>
                            <Text style={styles.other_sign_text}>Or contine with</Text>
                            <View style={styles.line_right}></View>
                        </View>
                        <View style={styles.social_field}>
                            <TouchableOpacity><FacebookImage width={36.4 * scaleFactor} height={36.4 * scaleFactor} /></TouchableOpacity>
                            <TouchableOpacity onPress={() => signInWithGoogleAsync()}><GoogleImage width={36 * scaleFactor} header={36 * scaleFactor} /></TouchableOpacity>
                            <TouchableOpacity><VectorImage width={36.4 * scaleFactor} height={36.4 * scaleFactor} /></TouchableOpacity>
                            <TouchableOpacity><EmailImage width={36.4 * scaleFactor} height={36.4 * scaleFactor} /></TouchableOpacity>
                        </View>
                        <View style={styles.register_field}>
                            <Text style={styles.account_text}>Don't have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}><Text style={styles.signup_text}>Sign up</Text></TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
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
        alignItems: 'center'
    },
    disabled_header: {
        display: 'none'
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
    content: {
        marginTop: 21 * scaleFactor
    },
    email_text: {
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14 * scaleFactor,
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
        fontSize: 14 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        // wordWrap: 'break-word',
        color: 'black',
        fontSize: 16 * scaleFactor,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        // wordWrap: 'break-word'
    },
    password_text: {
        marginTop: 16 * scaleFactor,
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14 * scaleFactor,
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
        // wordWrap: 'break-word',
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
    buttons: {
        width: '100%',
        marginBottom: 50 * scaleFactor
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
        // wordWrap: 'break-word'
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
        marginBottom: 30 * scaleFactor
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
        fontSize: 16 * scaleFactor,
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

export default Login_Screen
