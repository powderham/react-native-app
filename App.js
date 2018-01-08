import React from "react";
import { StyleSheet, Text, View, Slider, Platform } from "react-native";
import AddEntry from "./components/AddEntry";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import History from "./components/History";
import { TabNavigator } from "react-navigation";
import { purple, white } from "./utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Tabs = TabNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: "History",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        )
      }
    },
    AddEntry: {
      screen: AddEntry,
      navigationOptions: {
        tabBarLabel: "Add Entry",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : purple
      }
    }
  }
);
export default class App extends React.Component {
  state = {
    value: 0
  };

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <History />
        </View>
      </Provider>
    );
  }
}
