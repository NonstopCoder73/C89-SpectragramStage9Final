import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import StoryCard from "./StoryCard";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";
import { render } from "react-dom";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

async_loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

 

render(){
    return(
        <View style = {StyleSheet.container}>
            <SafeAreaView style = {StyleSheet.droidSafeArea} />
            <View style = {StyleSheet.appTitle}>
                <Image 
                source = {require("../assets/logo.png")}
                style = {StyleSheet.iconImage}
                ></Image>
                <View style = {StyleSheet.appTitleTextContainer}>
                    <Text style = {StyleSheet.appTitleText}>Spectagram</Text>
                </View>            
            </View>
            <View style = {styles.cardContainer}>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={posts}
                renderItem={this.renderItem}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
     
    },
    cardContainer: {
      flex: 0.85
    }
  })