import React, {useState} from 'react'
import Header from './Header'
import MyTextInput from './MyTextInput'
import MyButton from './MyButton'
import {View} from 'react-native';
const Login=(props)=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState(0)
    return (
    <View style={props.loginViewStyle}>
        <Header text={props.text} viewStyle={props.headerStyle} textStyle={props.headerTextStyle} />
        { loginStatus==0? 
            
            <MyTextInput placeholder="Your Email" value={email} overRideStyle={{marginBottom:20}}
            onSubmitEditing={()=> {
                const real = props.check(email)
                real && setLoginStatus(1)    
            }}
            onChangeText={(text) => {
                setEmail(text)
            }}
            />
            :
            <MyTextInput placeholder="Your Password" value={password} overRideStyle={{marginBottom:20}}
            onSubmitEditing={()=> props.check(email,password) }
            onChangeText={(text) => {
                setPassword(text)
            }}
            />
        }
        <View style={{flex:0.3,flexDirection:'row',justifyContent:'flex-end'}}>
            <MyButton text='Next' 
                overRideStyle={{flex:0.3}}
                onPress={()=> { 
                    var real=false;
                    loginStatus==0? real=props.check(email):props.check(email,password); 
                    real && setLoginStatus(1); 
                }}
            />
        </View>
    </View>
    );
}
export default Login;