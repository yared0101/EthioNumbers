import React from "react";
import {
    StyleSheet,
    Appearance,
    Text,
    View,
    SafeAreaView,
    Alert,
} from "react-native";
import Clipboard from "expo-clipboard";
import Header from "./components/Header";
// import Canvas from 'react-native-canvas';
// const circleFillDark = require("./assets/icons/circle-fill-dark.svg");
// const circleFillLight = require("./assets/icons/circle-fill-light.svg");
// const pageIconLight = require("./assets/icons/signpost-2-light.svg");
// const pageIconDark = require("./assets/icons/signpost-2-dark.svg");
// const copyIconLight = require("./assets/icons/copy-light.svg");
// const copyIconDark = require("./assets/icons/copy-dark.svg");

import { AntDesign, Feather } from "@expo/vector-icons";
const circleFillDark = <Feather name="circle" size={24} color="black" />;
const circleFillLight = <Feather name="circle" size={24} color="white" />;
const pageIconLight = <AntDesign name="retweet" size={24} color="white" />;
const pageIconDark = <AntDesign name="retweet" size={24} color="black" />;
const copyIconDark = <AntDesign name="copy1" size={24} color="black" />;
const copyIconLight = <AntDesign name="copy1" size={24} color="white" />;
import MyTextInput from "./components/MyTextInput";

const numberCommaChanger = (num = "9999") => {
    let current = num.split("");
    current.reverse();
    let changed = [];
    let counter = 0;
    for (let i in current) {
        if (counter % 3 == 0 && counter != 0) {
            changed.push(",");
        }
        counter++;
        changed.push(current[i]);
    }
    changed.reverse();
    const c = changed.join("");
    changed.reverse;
    return c;
};

export default class App extends React.Component {
    themeStyles = {
        dark: {
            color: "#ffffff",
            backgroundColor: "#003942",
            borderColor: "lightgrey",
            shadowColor: "lightgrey",
        },
        light: {
            color: "#003942",
            backgroundColor: "#ffffff",
            borderColor: "#002222",
            shadowColor: "#002222",
        },
    };
    state = {
        modalFlexer: "flex",
        fontSize: 20,
        value: "",
        theme: this.themeStyles[Appearance.getColorScheme() || "dark"],
        page: "0",
        regularNumber: "",
    };
    changeTheme() {
        if (this.state.theme == this.themeStyles.light) {
            this.setState({
                theme: this.themeStyles.dark,
                themeIcon: circleFillLight,
                pageIcon: pageIconLight,
            });
        } else {
            this.setState({
                theme: this.themeStyles.light,
                themeIcon: circleFillDark,
                pageIcon: pageIconDark,
            });
        }
    }
    ConverterPage() {
        return (
            <View style={[{ flex: 1 }]}>
                <View style={[{ flex: 0.5, justifyContent: "center" }]}>
                    <MyTextInput
                        overRideStyle={[
                            { marginHorizontal: 5 },
                            this.state.theme,
                        ]}
                        placeholder="Input Number Here"
                        onChangeText={(text: string) =>
                            this.setState({
                                value: text ? convertEthiopian(text) : "",
                                regularNumber: text
                                    ? numberCommaChanger(
                                          Number(
                                              Number(text) || ""
                                          ).toLocaleString()
                                      )
                                    : "",
                            })
                        }
                    />
                    <Text style={[{ textAlign: "center" }, this.state.theme]}>
                        {this.state.regularNumber}
                    </Text>
                </View>
                <View
                    style={[
                        { flex: 0.5, justifyContent: "flex-start" },
                        this.state.theme,
                    ]}
                >
                    <Text
                        style={[
                            {
                                textAlign: "center",
                                fontSize:
                                    this.state.fontSize + this.state.fontSize,
                            },
                            this.state.theme,
                        ]}
                    >
                        {this.state.value}
                    </Text>
                    {
                        <Text
                            style={{ textAlign: "right" }}
                            onPress={() => {
                                Clipboard.setString(String(this.state.value));
                                Alert.alert(
                                    "text copied",
                                    "text has been copied to your clipboard",
                                    [{ text: "ok", onPress: () => {} }],
                                    { cancelable: false }
                                );
                            }}
                        >
                            {this.state.value &&
                                typeof this.state.value == "string" &&
                                (this.state.theme.color == "#ffffff"
                                    ? copyIconLight
                                    : copyIconDark)}
                        </Text>
                    }
                </View>
            </View>
        );
    }
    DisplayNumbers() {
        const allData = pureNumbers("", true);
        let allDataProp = [];
        let index = 0;
        let prevString = "";
        for (let i in allData) {
            if (index % 2 == 0) {
                prevString = i;
                index += 1;
                continue;
            }
            index += 1;
            allDataProp.push(
                <View
                    key={i}
                    style={[
                        { flex: 1, flexDirection: "row" },
                        this.state.theme,
                    ]}
                >
                    <View
                        style={[
                            {
                                flex: 0.5,
                                flexDirection: "column",
                                borderWidth: 1,
                            },
                            this.state.theme,
                        ]}
                    >
                        <Text
                            style={[
                                {
                                    flex: 0.5,
                                    textAlign: "center",
                                    fontSize: this.state.fontSize,
                                },
                                this.state.theme,
                            ]}
                        >
                            {allData[prevString]}
                        </Text>
                        <Text
                            style={[
                                {
                                    flex: 0.5,
                                    textAlign: "center",
                                    paddingVertical: 5,
                                    fontSize: this.state.fontSize,
                                },
                                this.state.theme,
                            ]}
                        >
                            {prevString}
                        </Text>
                    </View>
                    <View
                        style={[
                            {
                                flex: 0.5,
                                flexDirection: "column",
                                borderWidth: 1,
                            },
                            this.state.theme,
                        ]}
                    >
                        <Text
                            style={[
                                {
                                    flex: 0.5,
                                    textAlign: "center",
                                    fontSize: this.state.fontSize,
                                },
                                this.state.theme,
                            ]}
                        >
                            {allData[i]}
                        </Text>
                        <Text
                            style={[
                                {
                                    flex: 0.5,
                                    textAlign: "center",
                                    paddingVertical: 5,
                                    fontSize: this.state.fontSize,
                                },
                                this.state.theme,
                            ]}
                        >
                            {i}
                        </Text>
                    </View>
                </View>
            );
        }
        const a = (
            <View style={{ flex: 1, flexDirection: "column" }}>
                {allDataProp}
            </View>
        );
        return a;
        // <FlatList
        // style={{maxHeight:innerHeight-70-72}}
        // data={props.data}
        // renderItem={({item,index}) => (

        // )
        // }
        //   />
    }
    changePage() {
        this.setState({ page: this.state.page == "0" ? "1" : "0" });
    }
    render() {
        Appearance.addChangeListener(({ colorScheme }) => {
            this.setState({ theme: this.themeStyles[colorScheme || "dark"] });
        });
        return (
            <SafeAreaView style={[styles.container, this.state.theme]}>
                <View style={[styles.container1, this.state.theme]}></View>
                <Header
                    text="መቀየርያ"
                    viewStyle={[
                        styles.header,
                        this.state.theme,
                        { marginBottom: 8, paddingHorizontal: 10 },
                    ]}
                    icon={
                        this.state.theme.color == "#ffffff"
                            ? circleFillLight
                            : circleFillDark
                    }
                    textStyle={[styles.headerText, this.state.theme]}
                    onPress={() => this.changeTheme()}
                    onPagePress={() => this.changePage()}
                    pageIcon={
                        this.state.theme.color == "#ffffff"
                            ? pageIconLight
                            : pageIconDark
                    }
                />
                {this.state.page == "1"
                    ? this.DisplayNumbers()
                    : this.ConverterPage()}
            </SafeAreaView>
        );
    }
}
const pureNumbers = (pure: string, returnAll = false): any => {
    const all: any = {
        "1": "፩",
        "2": "፪",
        "3": "፫",
        "4": "፬",
        "5": "፭",
        "6": "፮",
        "7": "፯",
        "8": "፰",
        "9": "፱",
        "10": "፲",
        "20": "፳",
        "30": "፴",
        "40": "፵",
        "50": "፶",
        "60": "፷",
        "70": "፸",
        "80": "፹",
        "90": "፺",
        "100": "፻",
        "10000": "፼",
    };
    if (returnAll) return all;
    if (pure == "0") return "";
    if (all[pure]) {
        return all[pure];
    } else {
        return pure;
    }
};
const convertEthiopian = (value: string) => {
    const number = Math.floor(Number(value));
    if (!number || number < 1) {
        return <Text style={{ fontSize: 30 }}>ከ ዜሮ በላይ ቁጥር ያስገቡ</Text>;
    }
    value = number.toLocaleString().replace(/,/g, "");
    let changeNumber = "";
    for (let i = value.length - 1; i >= 0; i -= 2) {
        if (i == 0) {
            changeNumber += pureNumbers(value[i]);
        } else if (i == 1) {
            changeNumber += pureNumbers(value[i]);
            changeNumber += pureNumbers(value[i - 1] + "0");
        } else {
            changeNumber += pureNumbers(value[i]);
            changeNumber +=
                value[i - 1] != "0" ? pureNumbers(value[i - 1] + "0") : "";
            changeNumber += pureNumbers("100");
        }
    }
    let correctNumber = "";
    changeNumber = changeNumber.replace(/፻፻/g, "፼");
    for (let i = changeNumber.length - 1; i >= 0; i--) {
        correctNumber += changeNumber[i];
    }
    let alternateNumber = "";
    if (correctNumber[0] == "፩" && correctNumber[1] == "፼")
        alternateNumber = correctNumber.replace(/፩፼/, "፼");
    else if (correctNumber[0] == "፩" && correctNumber[1] == "፻")
        alternateNumber = correctNumber.replace(/፩፻/, "፻");

    if (!alternateNumber) return correctNumber;
    else {
        return alternateNumber;
        // return correctNumber + '\n\n' + 'ወይም\n\n' + alternateNumber;
    }
};
const padding = (number: number) => {
    return {
        padding: number,
    };
};
const border = (side = 3, color = "black") => {
    let widths = [
        { borderLeftWidth: 1 },
        { borderTopWidth: 1 },
        { borderRightWidth: 1 },
        { borderBottomWidth: 1 },
        { borderWidth: 1 },
    ];
    let returnable = {
        borderColor: color,
    };
    returnable = { ...returnable, ...widths[side] };
    return returnable;
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        justifyContent: "flex-start",
    },
    container1: {
        minHeight: 20,
        minWidth: 20,
    },
    header: {
        height: 40,
        flexDirection: "row",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        padding: 2,
    },
    headerText: {
        textAlign: "center",
        fontSize: 30,
    },
});
