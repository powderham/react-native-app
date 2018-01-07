import React from "react";
import { StyleSheet, Text, View, Slider } from "react-native";
import AddEntry from "./components/AddEntry";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

export default class App extends React.Component {
  state = {
    value: 0
  };

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <AddEntry />
        </View>
      </Provider>
    );
  }
}
