import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Busca() {
    return (
        <View style={styles.container}>
        <Text>Pedidos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backGroundColor:'#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});