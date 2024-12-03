import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index"
                options={{
                    headerShown: false,
                    tabBarStyle: {
                        display: "none",
                    }
                }} />
            <Tabs.Screen name="login"
                options={{
                    headerShown: false,
                    tabBarStyle: {
                        display: "none",
                    }
                }} />
                <Tabs.Screen name="home"
                options={{
                    headerShown: false,
                    tabBarStyle: {
                        display: "none",
                    }
                }} />
            <Tabs.Screen name="chat" />
        </Tabs>
    );
}