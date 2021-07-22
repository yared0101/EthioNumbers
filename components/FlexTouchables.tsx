import React from 'react'
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
const FlexTouchables=(props)=>{
//data, defaultStyle, data[].element.overRideStyle, data[].element.flex, element.onPress, element.onPress
    const length=props.data.length;
    let myArray=[]
    let iterator=0;
    {props.data.forEach(element => {
        myArray.push(
        <TouchableOpacity key={iterator} activeOpacity={element.opacity||props.opacity||0.2} style={[props.defaultStyle,element.overRideStyle,{flex:element.flex || 1/length }]}
            onPress={()=>element.onPress()}
        >
            <Text style={[props.defaultTextStyle,element.overRideTextStyle]}>{element.text}</Text>
        </TouchableOpacity>)
        iterator+=1;
    })};
    return (
        <View style={props.viewStyle}>
            {myArray}
        </View>
    );
}
export default FlexTouchables;
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