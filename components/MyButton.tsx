import React from 'react'
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
const MyButton=(props)=>{
    return (
        <TouchableOpacity activeOpacity={props.opacity||0.2} style={[styles.standardTouchable,props.overRideStyle ||{}]} onPress={props.onPress}>
            <Text style={[{color:'white',fontSize:15,fontFamily:"arial"},props.overRideTextStyle||{}]}>{props.text}</Text>
        </TouchableOpacity>
    );
}
export default MyButton;
const styles = StyleSheet.create({
    standardTouchable:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgb(50,50,50)',
        padding:10,
        paddingHorizontal:25,
    },
})