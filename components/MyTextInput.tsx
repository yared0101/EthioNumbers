import React,{useState} from 'react'
import {TextInput, StyleSheet} from 'react-native';
const MyTextInput=({overRideStyle,placeholder,value,onChangeText}:any)=>{
    return (
    <TextInput keyboardType="number-pad" value={value} selectTextOnFocus={true} style={[styles.inputText,overRideStyle||{}]} placeholder={placeholder} onChangeText={text=>onChangeText(text)}></TextInput>
    );
}
export default MyTextInput;
const styles = StyleSheet.create({
    inputText:{
        height:40,
        borderWidth : 1,
        borderColor : 'rgba(0,0,0,0.2)',
        marginVertical:10,
        paddingLeft:10,
        borderRadius:0,
      },
})