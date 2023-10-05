import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/Splash"
import OnBoardingScreen_1 from "../screens/OnBoarding/OnBoarding1"
import OnBoardingScreen_2 from "../screens/OnBoarding/OnBoarding2"
import Login_RegisterScreen from "../screens/Auth";
import LoginScreen from "../screens/Auth/Login";
import Register_Screen from "../screens/Auth/Register";
import OTPScreen from "../screens/Auth/Register/OTPScreen";
import OTPResetScreen from "../screens/Auth/Register/OTPResetScreen";
import ForgetPasswordScreen from "../screens/Auth/Login/ForgetPassword";
import ResetPasswordScreen from "../screens/Auth/Login/ResetPassword";
import TermScreen from "../screens/Auth/Login/TermScreen";
import LocationOnScreen from "../screens/Auth/Login/LocationOnScreen";
import LocationScreen from "../screens/Auth/Login/LocationScreen";
import AddPhoneNumberScreen from "../screens/Auth/Register/AddPhoneNumberScreen";
import OTPVerificationScreen from "../screens/Auth/Register/OTPVerificationScreen";
import SuccessOTPScreen from "../screens/Auth/Register/SuccessOTPScreen";
import EnterLicenseScreen from "../screens/Auth/Register/License_Verification/EnterLicenseScreen";
import LicenseVerifyScreen from "../screens/Auth/Register/License_Verification/LicenseVerifyScreen";
import ScanScreen from "../screens/Auth/Register/License_Verification/ScanScreen";
import SuccessVerifyScreen from "../screens/Auth/Register/License_Verification/SuccessVerifyScreen";
import HomeScreen from "../screens/User/HomeScreen";
import CategoryScreen from "../screens/User/CategoryScreen";
import SearchResultScreen from "../screens/User/SearchResultScreen";
import CarDetailScreen from "../screens/User/CarDetailScreen";
import BookingDetailScreen from "../screens/User/SearchScreen/BookingDetailScreen";
import SummaryScreen from "../screens/User/SearchScreen/SummaryScreen";
import DrawSignatureScreen from "../screens/User/SearchScreen/DrawSignatureScreen";


const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "BookingDetailScreen" screenOptions = {{headerShown: false}}>
                <Stack.Screen name = "SplashScreen" component = {SplashScreen} />
                <Stack.Screen name = "OnBoardingScreen_1" component = {OnBoardingScreen_1} />
                <Stack.Screen name = "OnBoardingScreen_2" component = {OnBoardingScreen_2} />
                <Stack.Screen name = "Login-Register" component = {Login_RegisterScreen} />
                <Stack.Screen name = "LoginScreen" component = {LoginScreen} />
                <Stack.Screen name = "RegisterScreen" component = {Register_Screen} />
                <Stack.Screen name = "OTPScreen" component = {OTPScreen} />
                <Stack.Screen name = "OTPResetScreen" component = {OTPResetScreen} />
                <Stack.Screen name = "ForgetPasswordScreen" component = {ForgetPasswordScreen} />
                <Stack.Screen name = "ResetPasswordScreen" component = {ResetPasswordScreen} />
                <Stack.Screen name = "TermScreen" component = {TermScreen} />
                <Stack.Screen name = "LocationOnScreen" component = {LocationOnScreen} />
                <Stack.Screen name = "LocationScreen" component = {LocationScreen} />
                <Stack.Screen name = "AddPhoneNumberScreen" component = {AddPhoneNumberScreen} />
                <Stack.Screen name = "OTPVerificationScreen" component = {OTPVerificationScreen} />
                <Stack.Screen name = "SuccessOTPScreen" component = {SuccessOTPScreen} />

                <Stack.Screen name = "EnterLicenseScreen" component = {EnterLicenseScreen} />
                <Stack.Screen name = "LicenseVerifyScreen" component = {LicenseVerifyScreen} />
                <Stack.Screen name = "ScanScreen" component = {ScanScreen} />
                <Stack.Screen name = "SuccessVerifyScreen" component = {SuccessVerifyScreen} />

                <Stack.Screen name = "HomeScreen" component = {HomeScreen} />
                <Stack.Screen name = "CategoryScreen" component = {CategoryScreen} />
                <Stack.Screen name = "SearchResultScreen" component = {SearchResultScreen} />
                <Stack.Screen name = "CarDetailScreen" component = {CarDetailScreen} />
                <Stack.Screen name = "BookingDetailScreen" component = {BookingDetailScreen} />
                <Stack.Screen name = "SummaryScreen" component = {SummaryScreen} />
                <Stack.Screen name = "DrawSignatureScreen" component = {DrawSignatureScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes