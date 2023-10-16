import React, { useEffect, useState } from "react"
import { Dimensions, View, StyleSheet, ScrollView, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard, SafeAreaView, Text, TextInput } from "react-native"
import ArrowLeftImage from '../../../assets/images/auth/register/arrow-left.svg'
import PaymentSuccessModal from "../../../components/modals/PaymentSuccessModal"


const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const SummaryScreen = ({ route, navigation }) => {
    const type = route.params && route.params.type
    const [modalVisible,setModalVisible] = useState(false)
    const missHandle = () => {
        // setModalVisible(false)
        Keyboard.dismiss()
    }
    return (
        <TouchableWithoutFeedback onPress={() => missHandle()}>
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={styles.header_view}>
                        <TouchableOpacity style={styles.header_icon} onPress={() => { type == "added" ? navigation.navigate('SelectPaymentMethodScreen', { type: 'added' }) : navigation.navigate('BookingDetailScreen') }}>
                            <ArrowLeftImage width={24 * scaleFactor} height={24 * scaleFactor} />
                        </TouchableOpacity>
                        <Text style={styles.header_text}>Review Details</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.review_detail_header}>
                            <Text style={styles.review_detail_header_text}>Review Details</Text>
                            <View style={styles.review_detail_header_content}>
                                <View style={styles.review_detail_item}>
                                    <Text style={styles.review_detail_left}>Customer Name</Text>
                                    <Text style={styles.review_detail_right}>Kristin Watson</Text>
                                </View>
                                <View style={styles.review_detail_item}>
                                    <Text style={styles.review_detail_left}>Customer Name</Text>
                                    <Text style={styles.review_detail_right}>Kristin Watson</Text>
                                </View>
                                <View style={styles.review_detail_item}>
                                    <Text style={styles.review_detail_left}>Customer Name</Text>
                                    <Text style={styles.review_detail_right}>Kristin Watson</Text>
                                </View>
                                <View style={styles.review_detail_item}>
                                    <Text style={styles.review_detail_left}>Customer Name</Text>
                                    <Text style={styles.review_detail_right}>Kristin Watson</Text>
                                </View>
                                <View style={styles.review_detail_item}>
                                    <Text style={styles.review_detail_left}>Customer Name</Text>
                                    <Text style={styles.review_detail_right}>Kristin Watson</Text>
                                </View>
                                <View style={styles.review_detail_item}>
                                    <Text style={styles.review_detail_left}>Customer Name</Text>
                                    <Text style={styles.review_detail_right}>Kristin Watson</Text>
                                </View>
                                <View style={styles.review_detail_item}>
                                    <Text style={styles.review_detail_left}>Customer Name</Text>
                                    <Text style={styles.review_detail_right}>Kristin Watson</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.review_detail_content}>
                            <View style={styles.review_detail_item}>
                                <Text style={styles.review_detail_left}>Customer Name</Text>
                                <Text style={styles.review_detail_right}>Kristin Watson</Text>
                            </View>
                            <View style={styles.review_detail_item}>
                                <Text style={styles.review_detail_left}>Customer Name</Text>
                                <Text style={styles.review_detail_right}>Kristin Watson</Text>
                            </View>
                        </View>
                        <View style={styles.review_detail_footer}>
                            <View style={styles.review_detail_footer_item}>
                                <Text style={styles.review_detail_footer_left}>Total</Text>
                                <Text style={styles.review_detail_footer_right}>$ 420.00</Text>
                            </View>
                        </View>
                        <PaymentSuccessModal navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
                    </View>
                </View>
                {type == "added" ? (<TouchableOpacity style={styles.footer} onPress={() => setModalVisible(true)}>
                    <Text style={styles.footer_text}>Continue to payment</Text>
                </TouchableOpacity>) : (<TouchableOpacity style={styles.footer} onPress={() => navigation.navigate("DrawSignatureScreen")}>
                    <Text style={styles.footer_text}>Sign Contract</Text>
                </TouchableOpacity>)}
                
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 37 * scaleFactor,
        paddingHorizontal: 25 * scaleFactor
    },
    header_view: {
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
    header_search_icon: {
        position: 'absolute',
        right: 0
    },
    header_text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24

    },
    content: {
        marginTop: 64 * scaleFactor,
        width: '100%',
    },
    review_detail_header: {
        alignItems: 'center',
    },
    review_detail_header_text: {
        color: '#00A86B',
        fontSize: 24,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24
    },
    review_detail_header_content: {
        marginTop: 31 * scaleFactor,
        width: '100%'
    },
    review_detail_item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15 * scaleFactor
    },
    review_detail_left: {
        color: 'rgba(0,0,0,0.50)',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '500',
        lineHeight: 24
    },
    review_detail_right: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        lineHeight: 24
    },
    review_detail_footer: {
        marginTop: 30 * scaleFactor
    },
    review_detail_footer_item: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    review_detail_content: {
        marginTop: 90 * scaleFactor
    },
    review_detail_footer_left: {
        color: 'rgba(0,0,0,0.50)',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '900',
        lineHeight: 24
    },
    review_detail_footer_right: {
        color: '#00A86B',
        fontSize: 16,
        fontFamily: 'Urbanist',
        fontWeight: '900',
        lineHeight: 24
    },
    footer: {
        width: '100%',
        backgroundColor: '#00A86B',
        shadowColor: "#00A86B", // rgba(0, 168, 107, 0.20)
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.20,
        shadowRadius: 8.5, // Adjust this to achieve the desired blur
        elevation: 5, // This is for Android to simulate shadow
        borderRadius: 20,
        height: 58 * scaleFactor,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 39 * scaleFactor
    },
    footer_text: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Urbanist',
        fontWeight: '700'
    },


})

export default SummaryScreen
