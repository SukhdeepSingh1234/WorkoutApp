import React from 'react';
import Screen from '../components/Screen';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useUser } from "../context/UserContext";
import { Fontisto } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";




export default function UserProfile({navigation}) {

  const { user ,setUser} = useUser();

  const menuItems = user ? [
    {
      id:1,
      title: "NAME " + " ->",
      icon: {
        name: "user-secret",
        backgroundColor: "red",
      },
      text: user.displayName
    },
    {
      id:2,
      title: "EMAIL"+ " ->",
      icon: {
        name: "email",
        backgroundColor: "orange",
      },
      text: user.email
    },
    {
      id:3,
      title: "PHONE NO"+ " ->",
      icon: {
        name: "phone",
        backgroundColor: colors.secondary,
      },
      text: user.phoneNumber
    },
  ] : [];

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase Auth
      await AsyncStorage.setItem("@user", JSON.stringify(null)); // Clear user data from AsyncStorage
      setUser(null); // Clear user context
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };


  return (
    <Screen>
        <View style={styles.heading} >
            <Text style={styles.heading} >Profile</Text>
        </View>
        <View style={styles.logoCont} >
          { user && <Image style={styles.logo} source={{uri : user.photoURL}} />}
        </View>
        <View style={styles.container}>
            <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.id}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
                <ListItem
                title={item.title}
                IconComponent={
                    <Fontisto
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                    color="white"
                    size={20}
                    style={{padding:8, borderRadius:50}}
                    />
                }
                onPress={()=> navigation.navigate(item.targetScreen)}
                text={item.text}
                />
            )}
            />
        </View>
        <ListItem
            title="Log Out"
            IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            onPress={handleLogout}
            text=" "
        />
    </Screen>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 25,
        fontWeight: '900',
        margin:10
    }, 
    container: {
        marginVertical: 20,
    }, 
    logo:{

        width:100,
        height:100,
        borderRadius: 50,
    },
    logoCont:{
        margin: 10,
    }
})