import React from 'react';
import Screen from '../components/Screen';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItem from '../components/ListItem';
import colors from '../config/colors';


const menuItems = [
    {
      title: "Account Details",
      icon: {
        name: "account",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "Workout Settings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: "orange",
      },
    },
    {
      title: "General Settings",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
      targetScreen: "Messages",
    },
  ];


export default function UserProfile() {
  return (
    <Screen>
        <View style={styles.heading} >
            <Text style={styles.heading} >Profile</Text>
        </View>
        <View style={styles.logoCont} >
           <Image style={styles.logo} source={require('../assets/logo.webp')} />
        </View>
        <View style={styles.container}>
            <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
                <ListItem
                title={item.title}
                IconComponent={
                    <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                    />
                }
                onPress={()=> navigation.navigate(item.targetScreen)}
                />
            )}
            />
        </View>
        <ListItem
            title="Log Out"
            IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
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