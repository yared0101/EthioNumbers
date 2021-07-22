// import PropTypes from 'prop-types'
import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native';
const Header=({viewStyle,onPagePress,onPress,textStyle,text,icon,pageIcon}:any)=>{
    return (
    <View style={viewStyle}>
        <TouchableOpacity 
        style={{flex:0.1,justifyContent:'flex-end'}}
        onPress={()=>onPagePress()}
        >
        <Text style={{textAlign:'center'}}>{pageIcon}</Text>
        </TouchableOpacity>
        <Text style={[textStyle,{flex:0.9,}]}>
            {text}
        </Text>
        <TouchableOpacity 
        style={{flex:0.1,justifyContent:'flex-end'}}
        onPress={()=>onPress()}
        >
        <Text style={{textAlign:'center'}}>{icon}</Text>
        </TouchableOpacity>
    </View> );
}
// Header.defaultProps={
//     viewStyle:'',
// }
// Header.propTypes={
//     viewStyle:PropTypes.object,

// }
export default Header;