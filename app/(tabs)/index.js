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
    const logo = require("../../assets/images/logo.png");
    const data = [{}, {}, {}, {}, {}, {}, {}, {}];
    return (
        <SafeAreaView style={styles.flex1}>
            <StatusBar style="dark" />
            <View style={[styles.main, styles.flex1]}>
                <View style={[styles.header, styles.w_100, styles.p_20, styles.gap30]}>
                    <View style={[styles.flexRow, styles.alignItemsCenter, styles.justifyContentBetween, styles.w_100]}>
                        <Pressable style={[styles.pressable1, styles.justifyContentCenter, styles.alignItemsCenter]}>
                            <AntDesign name="search1" size={20} color="#fff" />
                        </Pressable>
                        <Image source={logo} style={styles.logo} />
                        <Pressable style={[styles.justifyContentCenter, styles.alignItemsCenter]}>
                            <Image source={logo} style={styles.pressable1} />
                        </Pressable>
                    </View>
                    <View style={[styles.w_100, styles.flexRow, styles.gap10]}>
                        <Pressable style={[styles.justifyContentCenter, styles.alignItemsCenter, styles.gap10]}>
                            <Image source={logo} style={styles.pressable2} />
                            <Text style={[styles.carosMedium, styles.color1]}>My Status</Text>
                            <Ionicons style={[styles.absolute, styles.icon1]} name="add-circle-sharp" size={24} color="#fff" />
                        </Pressable>
                        <View style={[styles.flex1]}>
                            <FlashList estimatedItemSize={200} horizontal style={styles.flex1} numColumns={1} data={data} renderItem={(item) => <Pressable style={[styles.justifyContentCenter, styles.alignItemsCenter, styles.gap10, styles, styles.ml20]}>
                                <Image source={logo} style={styles.pressable2} />
                                <Text style={[styles.carosMedium, styles.color1]}>My Status</Text>
                            </Pressable>
                            } />
                        </View>
                    </View>
                </View>
                <View style={[styles.flex1, styles.view1, styles.p_20]}>
                    <FlashList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} style={styles.flex1} data={data} estimatedItemSize={200} renderItem={() => <ContactItem />} />
                </View>
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
        fontSize: 16,
    },
    w_100: {
        width: "100%",
    },
    header: {
        height: "30%",
    },
    view1: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 40,
        borderTopEndRadius: 40,
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
    pressable1: {
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#fff",
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    pressable2: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#fff",
        width: 60,
        height: 60,
        borderRadius: 60,
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
    absolute: {
        position: "absolute",
    },
    icon1: {
        top: 0,
        left: 0,
    },
    ml20: {
        marginLeft: 20,
    },
});
