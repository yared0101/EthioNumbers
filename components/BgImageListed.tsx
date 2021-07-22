import React from 'react'
import {TouchableOpacity, StyleSheet, Text, View,ImageBackground} from 'react-native';
const BgImageListed=(props)=>{
    return (
    <View style={{flex:1,flexDirection:'row',marginVertical:15}}> 
        <TouchableOpacity style={{flex:1,marginHorizontal:15,height:250}}
            onPress={() => {console.log(props); props.onPress(props.item.key,props.item.picsrc)}}
        >
            <ImageBackground 
            style={[styles.categoryImage]}
            source={props.item.picsrc}
            >
            <View style={styles.lightHover}>
            <Text style={styles.lightHoverText}>{props.item.key}</Text>
            </View>
            </ImageBackground>
        </TouchableOpacity>
    </View>
    );
}
export default BgImageListed;
const styles = StyleSheet.create({
    categoryImage:{
        flex:1,
        justifyContent:'flex-end',
        borderRadius: 10,
        borderWidth:5,
        borderColor:'rgb(50,50,50)'
    },
    lightHover:{
        height:40,
        justifyContent:'center',
        backgroundColor:'rgba(255,255,255,0.4)',
    },
    lightHoverText:{
        marginVertical:'auto',
        paddingLeft:20,
        fontWeight:'bold'
    }
})