import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    href:null,
                }}
            />

            <Tabs.Screen name="signup"
                options={{
                    headerShown: false,
                    href:null,
                    tabBarStyle: {
                        display: "none",
                    }
                }} />
            <Tabs.Screen name="login"
                options={{
                    headerShown: false,
                    href:null,
                    tabBarStyle: {
                        display: "none",
                    }
                }} />
            <Tabs.Screen name="home"
                options={{
                    headerShown: false,
                }} />
            <Tabs.Screen name="chat" options={{
                href:null,
            }}/>
        </Tabs>
    );
}