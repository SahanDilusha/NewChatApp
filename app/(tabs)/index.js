import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

export default function Index() {

    const googleIcon = require("../../assets/images/Facebook-Logo.png");

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[styles.container, styles.main, styles.alignItemsCenter]}>
                        <View style={[styles.titleView, styles.justifyContentCenter, styles.alignItemsCenter]}>
                            <Text style={[styles.title, styles.carosBold, styles.h1]}>Log in to Chatbox</Text>
                            <Text style={[styles.textAlignCenter, styles.subTitle, styles.carosLight]}>Welcome back! Sign in using your social account or email to continue us</Text>
                        </View>
                        <View style={[styles.justifyContentCenter,styles.alignItemsCenter]}>
                            <Image source={googleIcon}/>
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
});