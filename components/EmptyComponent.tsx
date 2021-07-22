import React from 'react'
import {View, StyleSheet, Text} from 'react-native';
const EmptyComponent=(props)=>{
    return (
        <View style={[styles.listView,props.overRideStyle || {}]}>
             <Text 
            style={[{marginBottom:'auto',marginTop:'auto',textAlign:'center',color:props.textColor||"rgb(50,50,50)",paddingVertical:200}]}
            >
                {props.text}
            </Text>
        </View>
    );
}
export default EmptyComponent;
const styles = StyleSheet.create({
    listView:{
        height:70,
        flex:1,
        borderBottomWidth:1,
        borderColor:"rgb(150,150,150)"
    },
})