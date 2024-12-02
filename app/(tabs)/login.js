import { Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";

export default function Login() {

    const [show, setShow] = useState(true);

    const googleIcon = require("../../assets/images/Google_Pay-Logo.png");
    const facebookIcon = require("../../assets/images/Facebook-Logo.png");
    const appleIcon = require("../../assets/images/Apple_Inc.-Logo.png");

    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[styles.container, styles.main, styles.alignItemsCenter]}>
                        <Pressable style={[styles.justifyContentCenter, styles.alignItemsCenter, styles.pressable2]} onPress={() => {
                            router.replace("/(tabs)/chat");
                        }}>
                            <AntDesign name="arrowleft" size={24} color="black" />
                        </Pressable>
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
                                <Text style={[styles.carosMedium, styles.subTitle, styles.color]}>Password</Text>
                                <TextInput style={[styles.input, styles.carosMedium, styles.subTitle]} secureTextEntry={show} />
                                <Pressable style={styles.eyeIcon} onPress={() => {
                                    setShow(!show);
                                }}>
                                    <FontAwesome name={show ? "eye-slash" : "eye"} size={24} color="#CDD1D3" />
                                </Pressable>
                            </View>
                        </View>
                        <View style={[styles.justifyContentCenter, styles.alignItemsCenter, styles.gap10, styles.w_100, styles.pressableView]}>
                            <Pressable style={[styles.alignItemsCenter, styles.justifyContentCenter, styles.w_100, styles.pressable1]}>
                                <Text style={[styles.carosMedium, styles.subTitle, styles.color2]}>Login</Text>
                            </Pressable>
                            <Pressable style={[styles.justifyContentCenter, styles.alignItemsCenter, styles.w_100]}>
                                <Text style={[styles.carosMedium, styles.subTitle, styles.color]}>Forgot Password?</Text>
                            </Pressable>
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
        paddingVertical: 20,
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
        paddingHorizontal: 30,
    },
    gap10: {
        gap: 40,
    },
    eyeIcon: {
        position: "absolute",
        right: 0,
        top: 30,
    },
    color2: {
        color: "#fff",
    },
    pressable1: {
        backgroundColor: "#24786D",
        height: 50,
        borderRadius: 20,
    },
    pressableView: {
        bottom: -80,
    },
    pressable2: {
        alignSelf: "flex-start",
    },
});