import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Appbar } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen.js";
import SecondScreen from "./screens/SecondScreen.js"

const Stack = createStackNavigator();

const NavBar = ({navigation, back}) => {
    return (
        <Appbar.Header>
            {back
                ? <Appbar.BackAction
                    onPress={navigation.goBack} />
                : null
            }
            <Appbar.Content title="MD Nav Demo" />
            {back
                ? null
                : <Appbar.Action
                    icon="arrow-right"
                    onPress={() => {
                        navigation.navigate("Second");
                    }}
                />
            }
        </Appbar.Header>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    header: (props) => <NavBar {...props} />
                }}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Second"
                    component={SecondScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
