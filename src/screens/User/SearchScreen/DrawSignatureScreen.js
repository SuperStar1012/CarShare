import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, TouchableOpacity, SafeAreaView, Text } from "react-native"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import AvatarImage from '../../../assets/images/auth/register/Rectangle_34625954.svg'
import SelfieImage from '../../../assets/images/auth/register/Rectangle_34625958.svg'
import UploadImage from '../../../assets/images/auth/register/document-upload.svg'

import LinearGradient from 'react-native-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';
import { Image } from "react-native-svg"
import DrawSignView from "../../../components/views/DrawSignView"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const DrawSignatureScreen = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const [type, setType] = useState('license')
    const [selectedImage, setSelectedImage] = useState('')

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
                navigation.navigate("ScanScreen", {
                    navigation: navigation,
                    selectedImage: selectedImage
                })
            }
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.header_icon} onPress={() => navigation.navigate('BookingDetailScreen')}>
                        <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                    </TouchableOpacity>
                    <Text style={styles.header_text}>Contact</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.content_header} >
                        <TouchableOpacity style={type == 'license' ? styles.license_header : styles.disabled_license_header} onPress={() => setType('license')}>
                            <Text style={type == 'license' ? styles.content_header_text : styles.disabled_content_header_text}>Draw Sign</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={type == 'selfie' ? styles.selfie_header : styles.disabled_selfie_header} onPress={() => setType('selfie')}>
                            <Text style={type == 'selfie' ? styles.content_header_text : styles.disabled_content_header_text}>Type Sign</Text>
                        </TouchableOpacity>
                    </View>
                    {type == "license" ? (<DrawSignView />) :
                        (<View style={{ width: '100%', alignItems: 'center' }}>
                            <View style={styles.selfie_card}>
                                <SelfieImage width={207 * scaleFactor} height={207 * scaleFactor} />
                            </View>
                        </View>)}


                </View>

            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.agree_button} >
                    <Text style={styles.button_text}>Confirm & Submit</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 25 * scaleFactor,
        paddingRight: 25 * scaleFactor,
    },
    header: {
        marginTop: 31 * scaleFactor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative'
    },
    header_icon: {
        position: 'absolute',
        left: 0,
    },
    header_text: {
        textAlign: 'center',
        marginLeft: -12 * scaleFactor,
        color: 'black',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34,
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
        marginTop: 38 * scaleFactor,
    },
    content_header: {
        flexDirection: 'row',
    },
    license_header: {
        backgroundColor: '#00A86B',
        borderRadius: 18 * scaleFactor,
        height: 43 * scaleFactor,
        width: 180 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    disabled_license_header: {
        backgroundColor: 'rgba(0, 168, 107, 0.15)',
        borderRadius: 18 * scaleFactor,
        height: 43 * scaleFactor,
        width: 180 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    content_header_text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
    disabled_selfie_header: {
        width: 200 * scaleFactor,
        height: 42 * scaleFactor,
        backgroundColor: 'rgba(0, 168, 107, 0.15)',
        borderRadius: 18 * scaleFactor,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 160 * scaleFactor
    },
    selfie_card: {
        backgroundColor: 'white',
        padding: 22 * scaleFactor,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 14,
        elevation: 5,
        marginTop: 48 * scaleFactor,
        marginBottom: 32 * scaleFactor,
        borderRadius: 40 * scaleFactor

    },
    selfie_header: {
        backgroundColor: '#00A86B',
        width: 200 * scaleFactor,
        height: 42 * scaleFactor,
        borderRadius: 18 * scaleFactor,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 160 * scaleFactor,
    },
    disabled_content_header_text: {
        color: '#7E6161',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '500',
    },
    content_card: {
        marginTop: 43 * scaleFactor,
        marginBottom: 62 * scaleFactor,
        paddingLeft: 24 * scaleFactor,
        paddingTop: 15 * scaleFactor,
        width: '100%',
        height: 214 * scaleFactor,
        alignContent: 'center',
        backgroundColor: 'linear-gradient(180deg, #1BD994 0%, #0F704D 100%)',
        borderRadius: 10 * scaleFactor,
        border: '1px rgba(0, 0, 0, 0.05) solid',
        flexDirection: 'row'
    },
    left_content_card: {
        marginRight: 25 * scaleFactor
    },
    left_card_header: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 24,
    },
    avatar_image: {
        marginTop: 18 * scaleFactor,
        borderRadius: 11 * scaleFactor
    },
    right_card_item: {
        marginBottom: 4 * scaleFactor
    },
    right_card_item_header: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Urbanist',
        fontWeight: '400',
        lineHeight: 24,
    },
    right_card_item_content: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24,
    },
    right_footer_items: {
        marginTop: 25 * scaleFactor,
        flexDirection: 'row'
    },
    right_fotter_item: {
        marginRight: 25 * scaleFactor,
    },
    card_footer_item_header: {
        color: 'white',
        fontSize: 8,
        fontFamily: 'Urbanist',
        fontWeight: '400',
        lineHeight: 24,
    },
    card_footer_item_content: {
        color: 'white',
        fontSize: 10,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24,
    },
    content_photo: {
        alignItems: 'center'
    },
    content_photo_header: {
        color: '#00A86B',
        fontSize: 21,
        fontFamily: 'Montserrat',
        fontWeight: '700',
    },
    content_photo_main: {
        textAlign: 'center',
        marginTop: 38 * scaleFactor,
        color: 'rgba(0,0,0,0.80)',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        lineHeight: 29,
    },
    footer: {
        width: '100%',
        marginBottom: 46 * scaleFactor,
        alignItems: 'center'
    },
    agree_button: {
        flexDirection: 'row',
        width: '100%',
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A86B',
        boxShadow: '0px 4px 17px rgba(0, 168, 107, 0.20)',
        borderRadius: 20 * scaleFactor
    },
    footer_text: {
        textAlign: 'center',
        marginTop: 43 * scaleFactor,
        color: '#00A86B',
        fontSize: 18,
        fontFamily: 'Montserrat',
        fontWeight: '700',
        lineHeight: 27.34,
    },

    button_text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700'
    }
})

export default DrawSignatureScreen
