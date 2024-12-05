import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5, AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from "@shopify/flash-list";
import { useFocusEffect } from "@react-navigation/native";

export default function Index() {

    const [getData, setData] = useState([]);
    const [getText, setText] = useState("");

    const logo = require("../../assets/images/dp.png");

    const router = useRouter();
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const apiSocket = process.env.EXPO_PUBLIC_API_SOCKET;
    const ws = new WebSocket(`${apiSocket}GetChatWebSocket`);

    useEffect(() => {

        ws.onopen = () => {
            ws.send(JSON.stringify(
                {
                    "fromUser": 8,
                    "toUser": 9,
                }
            ));
        };

        ws.onmessage = (event) => {
            try {
                try {
                    const receivedData = JSON.parse(event.data);
                    console.log(receivedData.content);
                    setData(receivedData.content);
                } catch (error) {
                    console.error("Error parsing WebSocket data:", error);
                }

            } catch (error) {
                console.error("Error parsing WebSocket data:", error);
            }
        };

        ws.onerror = (error) => {
            console.error("WebSocket encountered an error:", error);
        };

        ws.close = (event) => {
            console.log("WebSocket connection closed:", event);
        };


    }, []);


    useFocusEffect(useCallback(() => {
        const interval = setInterval(() => {
            ws.send(JSON.stringify({
                "fromUser": 8,
                "toUser": 9,
            }));
        }, 5000);

        return () => {
            clearInterval(interval);
            ws.close();
        };
    }, []));


    return (
        <SafeAreaView style={styles.flex1}>
            <StatusBar style="dark" />
            <View style={[styles.flexRow, styles.w_100, styles.gap10, styles.alignItemsCenter, styles.p_20]}>
                <View style={[styles.flexRow, styles.gap10, styles.justifyContentCenter, styles.alignItemsCenter,]}>
                    <Pressable onPress={() => {
                        router.back();
                    }} style={[styles.justifyContentCenter, styles.alignItemsCenter]}>
                        <AntDesign name="arrowleft" size={24} color="black" />
                    </Pressable>
                    <Pressable>
                        <Image source={logo} style={styles.img1} />
                        <View style={[styles.absolute, styles.view1]}></View>
                    </Pressable>
                </View>
                <View style={[styles.gap10, styles.flex1]}>
                    <Text style={[styles.carosMedium, styles.subTitle]} numberOfLines={1}>Jhon Abraham</Text>
                    <Text style={styles.carosLight}>Online</Text>
                </View>
                <View style={[styles.flexRow, styles.justifyContentCenter, styles.alignItemsCenter, styles.gap15]}>
                    <Pressable>
                        <Ionicons name="call-outline" size={24} color="black" />
                    </Pressable>
                    <Pressable>
                        <AntDesign name="videocamera" size={24} color="black" />
                    </Pressable>
                </View>
            </View>
            <View style={[styles.flex1, styles.p_20]}>
                <FlashList style={styles.flex1} estimatedItemSize={200} data={getData} renderItem={({ item }) =>
                    <Pressable style={[styles.mb10, styles.gap10, item.fromUser === 9 ? styles.alignSelfEnd : styles.alignSelfStart]}>
                        <View style={[styles.justifyContentCenter, styles.alignItemsCenter, item.fromUser === 9 ? styles.view2 : styles.view3]}>
                            <Text style={[styles.carosMedium, styles.color1]}>{item.text}</Text>
                        </View>
                        <Text style={[styles.text1, styles.carosLight]}>9:50 AM {item.fromUser === 9 ? <FontAwesome5 name={item.status === 1 ? "check" : "check-double"} size={12} color={item.status === 1 ? "#919190" : "#23db9e"} /> : null}</Text>
                    </Pressable>} />
            </View>
            <View style={[styles.flexRow, styles.w_100, styles.justifyContentCenter, styles.alignItemsCenter, styles.gap10, styles.p_20]}>
                <Pressable>
                    <Feather name="paperclip" size={24} color="black" />
                </Pressable>
                <TextInput style={[styles.input, styles.flex1]} onChangeText={(text) => {
                    setText(text);
                }} />
                <Pressable style={[styles.justifyContentCenter, styles.alignItemsCenter, styles.sendBtn]} onPress={async () => {

                    const from = new FormData();
                    from.append("text", getText);
                    from.append("fromUser", 9);
                    from.append("toUser", 8);
                    from.append("type", 1);

                    try {

                        const response = await fetch(`${apiUrl}SaveChat`, {
                            method: 'POST',
                            body: from,
                        });

                        if (response.ok) {
                            const json = await response.json();

                            if (json.status) {
                                console.log("true");
                            } else {
                                console.log("error1");
                            }

                        } else {
                            console.log("error");
                        }

                    } catch (error) {
                        console.log("error");
                    }
                }}>
                    <Ionicons name="send" size={24} color="#fff" />
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    main: {
        backgroundColor: "#fff",
    },
    alignItemsCenter: {
        alignItems: "center",
    },
    justifyContentCenter: {
        justifyContent: "center",
    },
    justifyContentBetween: {
        justifyContent: "space-between",
    },
    carosMedium: {
        fontFamily: "CarosMedium",
    },
    carosLight: {
        fontFamily: "CarosLight",
    },
    carosBold: {
        fontFamily: "CarosBold",
    },
    h1: {
        fontSize: 24,
    },
    subTitle: {
        fontSize: 18,
    },
    w_100: {
        width: "100%",
    },
    header: {
        height: "30%",
    },
    p_20: {
        padding: 20,
    },
    logo: {
        width: 100,
        height: 25,
    },
    flexRow: {
        flexDirection: 'row',
    },
    gap30: {
        gap: 30,
    },
    color1: {
        color: "#fff",
    },
    gap10: {
        gap: 10,
    },
    gap15: {
        gap: 15,
    },
    absolute: {
        position: "absolute",
    },
    ml20: {
        marginLeft: 20,
    },
    img1: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    view1: {
        backgroundColor: "#3fd47d",
        width: 15,
        height: 15,
        borderRadius: 15,
    },
    input: {
        paddingHorizontal: 10,
        height: 50,
        borderRadius: 20,
        backgroundColor: "#cacbcc",
    },
    sendBtn: {
        backgroundColor: "#20A090",
        width: 45,
        height: 45,
        borderRadius: 45,
    },
    view2: {
        backgroundColor: "#20A090",
        padding: 15,
        borderStartStartRadius: 20,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    },
    view3: {
        backgroundColor: "#7d7d7c",
        padding: 15,
        borderStartStartRadius: 20,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    },
    alignSelfEnd: {
        alignSelf: "flex-end",
    },
    alignSelfStart: {
        alignSelf: "flex-start",
    },
    mb10: {
        marginBottom: 15,
    },
    text1: {
        alignSelf: "flex-end",
    },
});