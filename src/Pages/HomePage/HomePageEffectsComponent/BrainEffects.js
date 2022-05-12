import React from "react";
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    btn: {
        width:'30vw',
        height:'10vw',
        textAlign:'center',
        alignSelf: 'center',
        backgroundColor: '#AD66D5',
        border:'1vw solid #48036F'
    },
    btnTxt:{
        color:'white',
        fontSize:'5vw',
    }

})

export default function BrainEffects({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => {
                navigation.goBack()
            }}>
                <Text style={styles.btnTxt}>Назад</Text>
            </TouchableOpacity>
            <Text>Влияние Covid-19 на мозг и нервную систему</Text>
            <View>
                <Text>
                    Ученые всего мира, опираясь на результаты МРТ-диагностики пациентов с коронавирусом и
                    данные патологоанатомических исследований больных пациентов, умерших от COVID-19,
                    делают вывод о том, что ковид существенно поражает мозг человека.
                </Text>
                <Text>
                    Каким образом коронавирус нового типа инфицирует клетки головного и спинного мозга,
                    пока окончательно не изучено. Но уже доказано, что вирус SARS-CoV-2 проникает в клетки хозяина
                    благодаря
                    взаимодействию собственного S-белка с человеческим рецептором ACE2. Так, на клетках
                    терминального нерва,
                    расположенного рядом с обонятельным эпителием носа, находится большое количество рецепторов
                    ACE2.
                </Text>
                <Text>
                    Ученые провели исследования непосредственно на клетках мозга и пришли к заключению,
                    что нейроны и клетки головного и спинного мозга ― астроциты ― также подвержены инфицированию
                    через
                    механизм связывания коронавируса с рецепторами АСЕ2. А значит,
                    частицы вируса внедряются в клетки головного мозга и провоцируют нарушение его работы.
                </Text>
                <Text>
                    Влияние коронавируса на мозг подтверждают и патологоанатомические исследования, согласно которым
                    в тканях головного мозга у инфицированных больных были обнаружены следы вирусных белков.
                    Таким образом, коронавирус, попадая в клетки мозга,
                    приводит к воспалению мозговой ткани и дегенерации нейронов (отмиранию нейронов и потере связей
                    между ними).
                </Text>
                <Text>Ученые доказали высокую нейротропность (способность поражать нервные клетки) коронавируса
                    нового типа.
                    Считается, что основной причиной поражения нервной системы после коронавируса является
                    привлечение
                    иммунных телец из кровеносной системы во время борьбы с болезнью.
                    Так, частым осложнением коронавирусной инфекции становится синдром Гийена-Барре,
                    когда иммунная система человека начинает атаковать собственные нервные клетки, что приводит к
                    мышечной слабости,
                    нарастающей потере чувствительности.
                </Text>
                <Text>COVID-19 способен вызывать расстройства психики, поражая центральную нервную систему (ЦНС).
                    При тяжелом течении коронавирусной инфекции возможны галлюцинации, бред и другие изменения
                    сознания.
                    При продолжительной болезни наблюдаются серьезные нарушения со стороны ЦНС. При этом
                    неврологические
                    изменения могут перейти в хроническую форму. Так, часто после полного выздоровления от
                    вирусной инфекции врачи-психотерапевты диагностируют у пациентов невроз после
                    коронавируса.
                </Text>
            </View>
        </ScrollView>
)
}