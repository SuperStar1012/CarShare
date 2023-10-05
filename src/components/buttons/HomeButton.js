import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const HomeButton = ({ selected, value }) => {
    const [select,setSelected] = useState(false);
    useEffect(() => {
        setSelected(selected)
    },[])
    return (
        <TouchableOpacity style={select == true ? styles.selected_button : styles.button} onPress={() => setSelected(!select)}>
            <Text style={select == true ? styles.selected_button_text : styles.button_text}>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        paddingHorizontal: 24 * scaleFactor,
        paddingVertical: 10 * scaleFactor,
        borderRadius: 12 * scaleFactor,
        borderWidth: 2 * scaleFactor,
        borderStyle: "solid",
        borderColor: "#00A86B",
        marginRight: 10 * scaleFactor
    },
    button_text: {
        color: '#00A86B',
        fontSize: 14,
        fontFamily: 'Urbanist',
        fontWeight: '700',
    },
    selected_button_text: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Urbanist',
        fontWeight: '700',
        paddingHorizontal: 24 * scaleFactor,
        paddingVertical: 10 * scaleFactor,
    },
    selected_button: {
        // paddingLeft: 24 * scaleFactor,
        // paddingRight: 24 * scaleFactor,
        // paddingTop: 10 * scaleFactor,
        // paddingBottom: 10 * scaleFactor,
        backgroundColor: '#00A86B',
        borderRadius: 12 * scaleFactor,
        justifyContent: 'center',
        marginRight: 10 * scaleFactor,
        borderStyle: "solid",
        borderColor: "transparent",
        borderWidth: 2 * scaleFactor,
        marginRight: 10 * scaleFactor
    },
   
});

export default HomeButton
