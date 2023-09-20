import React from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity, SafeAreaView, Text, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native"
import SplashAvatar from '../../../assets/images/avatar/splash_avatar.svg'
import EmailImage from '../../../assets/images/social/email.svg'
import FacebookImage from '../../../assets/images/social/facebook.svg'
import VectorImage from '../../../assets/images/social/vector.svg'
import GoogleImage from '../../../assets/images/social/google.svg'
import UserImage from '../../../assets/images/auth/login/user.svg'
import LockImage from '../../../assets/images/auth/login/lock.svg'
import EyeSlashImage from '../../../assets/images/auth/login/eye-slash.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const Login_Screen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView>
                    <View style={styles.header}>
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
                                    <TextInput style={styles.email_text_input} ></TextInput>
                                </View>
                            </View>
                            <View style={styles.password_content}>
                                <Text style={styles.password_text}>Password</Text>
                                <View style={styles.password_input}>
                                    <LockImage width={20 * scaleFactor} height={20 * scaleFactor} style={styles.password_image} />
                                    <TextInput style={styles.email_text_input} secureTextEntry={true} ></TextInput>
                                </View>
                                <Text style={styles.forget_text}>Forget Password</Text>
                            </View>
                        </View>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.login_button} onPress={() => navigation.navigate("LoginScreen")}>
                                <Text style={styles.login_text}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.other_sign}>
                            <View style={styles.line_left}></View>
                            <Text style={styles.other_sign_text}>Or contine with</Text>
                            <View style={styles.line_right}></View>
                        </View>
                        <View style={styles.social_field}>
                            <FacebookImage width={36.4 * scaleFactor} height={36.4 * scaleFactor} />
                            <GoogleImage width={36.4 * scaleFactor} height={36.4 * scaleFactor} />
                            <VectorImage width={36.4 * scaleFactor} height={36.4 * scaleFactor} />
                            <EmailImage width={36.4 * scaleFactor} height={36.4 * scaleFactor} />
                        </View>
                        <View style={styles.register_field}>
                            <Text style={styles.account_text}>Don't have an account?</Text>
                            <Text style={styles.signup_text}>Sign up</Text>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
        paddingTop: 46 * scaleFactor
    },
    header: {
        alignItems: 'center'
    },
    splash_avatar: {
        marginBottom: 21 * scaleFactor
    },
    main_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 34,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        wordWrap: 'break-word'
    },

    content_text: {
        marginTop: 15 * scaleFactor,
        color: 'rgba(0,0,0 0.70)',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        lineHeight: 24 * scaleFactor,
        wordWrap: 'break-word'
    },
    content: {
        marginTop: 21 * scaleFactor
    },
    email_text: {
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        wordWrap: 'break-word'
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
        fontSize: 14,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        wordWrap: 'break-word',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        wordWrap: 'break-word'
    },
    password_text: {
        marginTop: 16 * scaleFactor,
        color: 'rgba(0,0,0,0.40)',
        fontSize: 14,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        wordWrap: 'break-word'
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
        wordWrap: 'break-word',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        wordWrap: 'break-word'
    },
    forget_text: {
        textAlign: 'right',
        marginTop: 14 * scaleFactor,
        color: '#00A86B',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24,
        wordWrap: 'break-word'
    },
    buttons: {
        width: '100%',
        marginTop: 24 * scaleFactor
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
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        wordWrap: 'break-word'
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
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        wordWrap: 'break-word'
    },
    footer: {
        alignItems: 'center',
        marginTop: 45 * scaleFactor
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
        fontSize: 14,
        fontFamily: 'Urbanist',
        fontWeight: '600',
        wordWrap: 'break-word'
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
        wordWrap: 'break-word'
    },
    signup_text: {
        marginLeft: 5 * scaleFactor,
        color: '#00A86B',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        wordWrap: 'break-word'
    }

})

export default Login_Screen
