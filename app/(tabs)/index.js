import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={[styles.container, styles.main, styles.alignItemsCenter]}>
                        <View style={[styles.titleView, styles.justifyContentCenter, styles.alignItemsCenter]}>
                            <Text style={styles.title}>Log in to Chatbox</Text>
                            <Text>Welcome back! Sign in using your social account or email to continue us</Text>
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
    },
    carosMedium:{
        fontFamily:"CarosMedium",
    },
    
});