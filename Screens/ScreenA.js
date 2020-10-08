import React,{ useRef } from "react";
import {StyleSheet, View, Text, Platform} from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButtonCustom from "../UI/HeaderButtonCustom";

const ScreenA= props =>{
    let counter=useRef(0);
    const incrementCounter=()=>{
        counter.current++;
    }
    incrementCounter();
    console.log(`Screen A counter is ${counter.current}`);
    return(
      <View style={styles.centerStyle}>
        <Text>Screen A</Text>
      </View>
    )
}

ScreenA.navigationOptions = navigationData =>{
    return{
        headerTitle: "Screen A",
        headerLeft: (
          <HeaderButtons HeaderButtonComponent={HeaderButtonCustom}>
            <Item
              title="Menu"
              iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
              onPress={() => {
                navigationData.navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        )
    }
}
const styles= StyleSheet.create({
    centerStyle:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default ScreenA;