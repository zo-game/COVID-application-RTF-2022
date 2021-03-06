import React from "react";
import {Text, ScrollView, StyleSheet, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    btn: {
        width: '30vw',
        height: '10vw',
        textAlign: 'center',
        alignSelf: 'center',
        backgroundColor: '#AD66D5',
        border: '1vw solid #48036F'
    },
    btnTxt: {
        color: 'white',
        fontSize: '5vw',
    }

})

export default function HeartExercisesPage({navigation}) {
    return (
        <ScrollView>
            <Text> Комлпекс упражнений на Сердце</Text>
            <TouchableOpacity style={styles.btn}
                              onPress={() => navigation.goBack()}>
                <Text style={styles.btnTxt}>Назад</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


