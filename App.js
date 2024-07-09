import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoadingScreen from "./app/screens/LoadingScreen";
import MainScreen from "./app/screens/MainScreen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google"
import * as WebBrowser from "expo-web-browser"
import { GoogleAuthProvider,onAuthStateChanged, signInWithCredential } from "firebase/auth";
import { auth } from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthNavigator from "./app/navigation/AuthNavigator";
import LoginScreen from "./app/screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";


WebBrowser.maybeCompleteAuthSession()

export default function App() {

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState("Loading");
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: "230397393530-05crnfvetcs761rlv6mm07n2mutmkc5c.apps.googleusercontent.com",
    androidClientId: "230397393530-3qgp2sdhdm28jecnfc28a8cf78b9hlic.apps.googleusercontent.com"
  })


  const Stack = createStackNavigator();

  useEffect(() => {
    // Set a timeout to change the screen to "Login" after 3 seconds
    const timer = setTimeout(() => {
      setInitialRoute("Login");
    }, 3000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  useEffect(()=>{
    if(response?.type === "success"){
      const {id_token}= response.params
      const credentials = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credentials)
    }
  },[response])

  useEffect(()=>{
    const unsub =onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log(JSON.stringify(user,null,2));
        setUser(user);
      }else{
        console.log("user not found")
      }
    })

    return () => unsub()
  },[])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    {/* <NavigationContainer initialRoute="Welcome"  style={styles.container} >
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={LoginScreen} promptAsync={promptAsync} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainScreen} />
          
        </Stack.Navigator>
    </NavigationContainer> */}
    <LoginScreen promptAsync={promptAsync} />

  </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
