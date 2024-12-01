import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Index() {

    const googleIcon = require("../../assets/images/Google_Pay-Logo.png");
    const facebookIcon = require("../../assets/images/Facebook-Logo.png");
    const appleIcon = require("../../assets/images/Apple_Inc.-Logo.png");



    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[styles.container, styles.main, styles.alignItemsCenter]}>
                        <View style={[styles.titleView, styles.justifyContentCenter, styles.alignItemsCenter]}>
                            <Text style={[styles.title, styles.carosBold, styles.h1]}>Log in to Chatbox</Text>
                            <Text style={[styles.textAlignCenter, styles.subTitle, styles.carosLight]}>Welcome back! Sign in using your social account or email to continue us</Text>
                        </View>
                        <View style={[styles.iconView, styles.justifyContentCenter, styles.alignItemsCenter, styles.flexRow, styles.alignItemsCenter, styles.justifyContentCenter]}>
                            <Image source={googleIcon} style={styles.iconImage} />
                            <Image source={facebookIcon} style={styles.iconImage} />
                            <Image source={appleIcon} style={styles.iconImage} />
                        </View>
                        <Text style={[styles.carosLight, styles.text1]}>or</Text>
                        <View style={[styles.alignItemsCenter, styles.w_100, styles.gap10]}>
                            <View style={[styles.w_100]}>
                                <Text style={[styles.carosMedium, styles.subTitle, styles.color]}>Email</Text>
                                <TextInput style={[styles.input, styles.carosMedium, styles.subTitle]} inputMode="email" />
                            </View>
                            <View style={[styles.w_100]}>
                                <Text style={[styles.carosMedium, styles.subTitle, styles.color]}>Email</Text>
                                <TextInput style={[styles.input, styles.carosMedium, styles.subTitle]} inputMode="email" />
                                <FontAwesome name="eye" size={24} color="black" />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    main: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
    },
    alignItemsCenter: {
        alignItems: "center",
    },
    justifyContentCenter: {
        justifyContent: "center",
    },
    titleView: {
        gap: 10,
        marginTop: 20,
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
    textAlignCenter: {
        textAlign: "center",
    },
    flexRow: {
        flexDirection: "row",
    },
    iconView: {
        gap: 30,
        marginTop: 50,
    },
    iconImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 2,
    },
    text1: {
        fontSize: 14,
        marginTop: 25,
        marginBottom: 25,
    },
    w_100: {
        width: "100%",
    },
    color: {
        color: "#24786D",
    },
    input: {
        width: "100%",
        height: 50,
        borderStyle: 'solid',
        borderBottomColor: "#CDD1D0",
        borderBottomWidth: 2,
    },
    gap10: {
        gap: 40,
    },
});