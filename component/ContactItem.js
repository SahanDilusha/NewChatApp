import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ContactItem() {

    const logo = require("../assets/images/dp.png");

    return (
        <Pressable style={[styles.main, styles.justifyContentCenter, styles.alignItemsCenter, styles.flexRow, styles.gap10, styles.w_100, styles.mt]}>
            <View>
                <Image source={logo} style={styles.image} />
                <View style={styles.view1}></View>
            </View>
            <View style={[styles.flex1,styles.gap10,styles.carosMedium]}>
                <Text style={[styles.text1,styles.carosMedium]} numberOfLines={1}>Alex Linderson</Text>
                <Text numberOfLines={1}>How are you today?</Text>
            </View>
            <View style={[styles.gap10, styles.alignItemsEnd, styles.gap10]}>
                <Text style={[styles.carosMedium]}>2024/12/3</Text>
                <View style={[styles.view2,styles.alignItemsCenter,styles.justifyContentCenter]}>
                    <Text style={[styles.carosMedium,styles.color]}>10</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    main: {
        height: 80,
        padding: 10,
    },
    alignItemsCenter: {
        alignItems: "center",
    },
    alignItemsEnd: {
        alignItems: "flex-end",
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
    flexRow: {
        flexDirection: "row",
    },
    gap10: {
        gap: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    mt: {
        marginTop: 10,
    },
    view1: {
        width: 15,
        height: 15,
        backgroundColor: "#3fd467",
        borderRadius: 10,
        position: "absolute",
    },
    view2:{
        backgroundColor:"#d43f4c",
        height:25,
        width:25,
        borderRadius:25,
    },
    color:{
        color:"#fff",
    },
    text1:{
        fontSize:18,
    },
});