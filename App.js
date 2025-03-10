import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import LoadingScreen from "./app/screens/LoadingScreen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer} from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google"
import * as WebBrowser from "expo-web-browser"
import { GoogleAuthProvider,onAuthStateChanged, signInWithCredential } from "firebase/auth";
import { auth } from "./firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "./app/screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { UserProvider, useUser } from "./app/context/UserContext";


WebBrowser.maybeCompleteAuthSession()

const Stack = createStackNavigator();


export default function App() {


  const [loading, setLoading] = useState(true); 
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: "230397393530-05crnfvetcs761rlv6mm07n2mutmkc5c.apps.googleusercontent.com",
    androidClientId: "230397393530-3qgp2sdhdm28jecnfc28a8cf78b9hlic.apps.googleusercontent.com"
  })


  


  useEffect(()=>{
    if(response?.type === "success"){
      const {id_token}= response.params
      const credentials = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credentials)
    }
  },[response])

  return (
    <UserProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigator promptAsync={promptAsync} />
      </NavigationContainer>
    </GestureHandlerRootView>
  </UserProvider>
  );
}
const Navigator = ({ promptAsync }) => {
  const { user, loading } = useUser();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name="AppNavigator" component={AppNavigator} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <LoginScreen {...props} promptAsync={promptAsync} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
