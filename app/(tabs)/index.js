import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from "@shopify/flash-list";
import ContactItem from "../../component/ContactItem";


export default function Index() {
    const logo = require("../../assets/images/dp.png");
    const data = [{}, {}, {}, {}, {}, {}, {}, {}];
    const router = useRouter();
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
                <View style={[styles.flexRow,styles.justifyContentCenter, styles.alignItemsCenter, styles.gap15]}>
                    <Pressable>
                        <Ionicons name="call-outline" size={24} color="black" />
                    </Pressable>
                    <Pressable>
                        <AntDesign name="videocamera" size={24} color="black" />
                    </Pressable>
                </View>
            </View>
            <View>

            </View>
            <View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    main: {
        backgroundColor: "#000",
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
});
