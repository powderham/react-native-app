import React from "react";
import { StyleSheet, Text, View, Slider } from "react-native";
import AddEntry from "./components/AddEntry";

export default class App extends React.Component {
  state = {
    value: 0
  };

  render() {
    return (
      <View>
        <AddEntry />
      </View>
    );
  }
}
