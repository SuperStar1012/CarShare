import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/Splash"
import OnBoardingScreen_1 from "../screens/OnBoarding/OnBoarding1"
import OnBoardingScreen_2 from "../screens/OnBoarding/OnBoarding2"
import Login_RegisterScreen from "../screens/Auth";
import LoginScreen from "../screens/Auth/Login";
import Register_Screen from "../screens/Auth/Register";

const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "SplashScreen" screenOptions = {{headerShown: false}}>
                <Stack.Screen name = "SplashScreen" component = {SplashScreen} />
                <Stack.Screen name = "OnBoardingScreen_1" component = {OnBoardingScreen_1} />
                <Stack.Screen name = "OnBoardingScreen_2" component = {OnBoardingScreen_2} />
                <Stack.Screen name = "Login-Register" component = {Login_RegisterScreen} />
                <Stack.Screen name = "LoginScreen" component = {LoginScreen} />
                <Stack.Screen name = "RegisterScreen" component = {Register_Screen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes