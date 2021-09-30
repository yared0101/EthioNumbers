// import PropTypes from 'prop-types'
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const Header = ({
    viewStyle,
    onPagePress,
    onPress,
    textStyle,
    text,
    icon,
    pageIcon,
}: any) => {
    return (
        <View style={viewStyle}>
            <TouchableOpacity
                style={{ flex: 0.1, justifyContent: "flex-end" }}
                onPress={() => onPagePress()}
            >
                {pageIcon}
                {/* <AntDesign name="retweet" size={24} color="black" /> */}
                {/* <Ionicons name="md-" size={32} color="green" /> */}
            </TouchableOpacity>
            <Text style={[textStyle, { flex: 0.9 }]}>{text}</Text>
            <TouchableOpacity
                style={{ flex: 0.1, justifyContent: "flex-end" }}
                onPress={() => onPress()}
            >
                {icon}
            </TouchableOpacity>
        </View>
    );
};
// Header.defaultProps={
//     viewStyle:'',
// }
// Header.propTypes={
//     viewStyle:PropTypes.object,

// }
export default Header;
