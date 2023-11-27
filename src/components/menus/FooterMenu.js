import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"

import HomeImage from '../../assets/images/user/home/home.svg'
import ActiveHomeImage from '../../assets/images/user/home/active_home.svg'
import MessageImage from '../../assets/images/user/home/message.svg'
import ActiveChatImage from '../../assets/images/user/home/active_chat.svg'
import MapImage from '../../assets/images/user/home/map.svg'
import NotificationImage from '../../assets/images/user/home/notification.svg'
import ActiveNotificationImage from '../../assets/images/user/home/active_notification.svg'
import ProfileImage from '../../assets/images/user/home/profile.svg'
import ActiveProfileImage from '../../assets/images/user/home/active_profile.svg'

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const FooterMenu = ({ navigation, myMenu, setMyMenu }) => {
    const [menu, setMenu] = useState(myMenu);

    return (
        <View style={styles.footer_menu}>
            <TouchableOpacity style={styles.footer_menu_item} onPress={() => { setMenu("home"), setMyMenu("home") }}>
                {menu == "home" ? <ActiveHomeImage /> : <HomeImage />}
                {menu == "home" ? (<Text style={styles.selected_footer_menu_text}>Home</Text>) : (<Text style={styles.footer_menu_text}>Home</Text>)}
            </TouchableOpacity>
            <TouchableOpacity style={styles.footer_menu_item} onPress={() => { setMenu("chat"), setMyMenu("chat") }}>
                {menu == "chat" ? <ActiveChatImage /> : <MessageImage />}
                {menu == "caht" ? (<Text style={styles.selected_footer_menu_text}>Chat</Text>) : (<Text style={styles.footer_menu_text}>Chat</Text>)}
            </TouchableOpacity>
            <TouchableOpacity style={styles.footer_menu_item} >
                <MapImage />
                <Text style={styles.footer_menu_text}>Rent Car</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footer_menu_item} onPress={() => { setMenu("notification"), setMyMenu("notification") }}>
                {menu == "notification" ? <ActiveNotificationImage /> : <NotificationImage />}
                {menu == "notification" ? (<Text style={styles.selected_footer_menu_text}>Notification</Text>) : (<Text style={styles.footer_menu_text}>Notification</Text>)}
            </TouchableOpacity>
            <TouchableOpacity style={styles.footer_menu_item} onPress={() => { setMenu("profile"), setMyMenu("profile") }}>
                {menu == "profile" ? <ActiveProfileImage /> : <ProfileImage />}
                {menu == "profile" ? (<Text style={styles.selected_footer_menu_text}>Profile</Text>) : (<Text style={styles.footer_menu_text}>Profile</Text>)}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer_menu: {
        width: "100%",
        paddingLeft: 44 * scaleFactor,
        paddingRight: 44 * scaleFactor,
        paddingTop: 26 * scaleFactor,
        paddingBottom: 10 * scaleFactor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 14,
        elevation: 7,
    },
    footer_menu_item: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    selected_footer_menu_text: {
        color: '#00A86B',
        fontSize: 10 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        lineHeight: 18 * scaleFactor,
        textAlign: 'center'
    },
    footer_menu_text: {
        color: 'rgba(0,0,0,0.30)',
        fontSize: 8 * scaleFactor,
        fontFamily: 'Montserrat',
        fontWeight: '600',
        lineHeight: 18 * scaleFactor,
    }

});

export default FooterMenu
