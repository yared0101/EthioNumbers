import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
const MyModal=({modalFlexer,setModalFlexer,viewStyle,textStyle}:any)=>{
    return (
      <View style={[styles.modalDisplay,modalFlexer=='flex'?{display:'flex'}:{display:'none'},{zIndex:10,flexDirection:'row',flex:0.8}]}>
        <TouchableOpacity style={styles.modalHider}
          onPress={()=>setModalFlexer('none')}
        >
        </TouchableOpacity>
        <View style={styles.modalInside}>
          <Text>asdf</Text>
        </View>
        <TouchableOpacity style={styles.modalHider}
          onPress={()=>setModalFlexer('none')}
        ></TouchableOpacity>
      </View>
    );
}
export default MyModal;
const styles = StyleSheet.create({
  modalDisplay:{
    display:'none',
    position:'absolute',
    flex:0.1,
    height:innerHeight,
    width:innerWidth,
    backgroundColor:'rgba(0,0,0,0)',
  },
  modalInside:{
    flex:0.8,
    backgroundColor:'rgba(0,0,0,1)',
    shadowColor:'black',
    shadowOffset:{
      width:10,
      height:10,
    },
    shadowOpacity:0.9,
  },
  modalHider:{
    flex:0.1,
    backgroundColor:'rgba(0,0,0,0)',
  },
});