import React, {useEffect, useRef} from "react";
import {StyleSheet, View, Text, Platform} from "react-native";
import HeaderButtonCustom from "../UI/HeaderButtonCustom";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const ScreenB= props =>{
    let counter=useRef(0);
    const incrementCounter=()=>{
        counter.current++;
        console.log(`Screen B counter is ${counter.current}`);
    }
    useEffect(()=>{
        const focus = props.navigation.addListener(
            'willFocus',
            incrementCounter
          );
          return () => {
            focus.remove();
          };
    },[incrementCounter])
    
    console.log(`Screen B counter is ${counter.current}`);
    return(
      <View style={styles.centerStyle}>
        <Text>Screen B</Text>
      </View>
    )
}


ScreenB.navigationOptions = navigationData =>{
    return{
        headerTitle: 'Screen B',
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

export default ScreenB;