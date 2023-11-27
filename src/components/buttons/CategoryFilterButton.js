import React, { useEffect, useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity, Text, View, Button } from "react-native"
import { carType } from '../../config/vehicleType';

const { width } = Dimensions.get('window')
const scaleFactor = width / 414

const CategoryFilterButton = ({ selected, value }) => {
    const [select, setSelected] = useState(selected);
    const [type, setType] = useState([]);
    useEffect(() => {
        setSelected(selected)
    }, [])

    const handleSetCarType = () => {
        carType.map((data) => {
            if(data.name == value)
            {
                data.state = !select;
                setSelected(!select);
            }
        })
        console.log(carType)
    }
    return (
        <TouchableOpacity style={select == true ? styles.selected_button : styles.button} onPress={() => handleSetCarType()}>
            <Text style={select == true ? styles.selected_button_text : styles.button_text}>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        paddingHorizontal: 20 * scaleFactor,
        paddingVertical: 10 * scaleFactor,
        borderRadius: 10 * scaleFactor,
        borderWidth: 1 * scaleFactor,
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.05)",
        marginRight: 8 * scaleFactor,
        marginTop: 16 * scaleFactor
    },
    button_text: {
        color: 'rgba(0,0,0,0.60)',
        fontSize: 12,
        fontFamily: 'Urbanist',
        fontWeight: '700'
    },
    selected_button_text: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Urbanist',
        fontWeight: '700',

    },
    selected_button: {
        paddingHorizontal: 20 * scaleFactor,
        paddingVertical: 10 * scaleFactor,
        backgroundColor: '#00A86B',
        borderRadius: 10 * scaleFactor,
        justifyContent: 'center',
        borderStyle: "solid",
        borderColor: "transparent",
        borderWidth: 1 * scaleFactor,
        marginTop: 16 * scaleFactor,
        marginRight: 8 * scaleFactor,
    },

});

export default CategoryFilterButton
