import React, { Component } from "react";
import { View, Text } from "react-native";

class EntryDetail extends Component {
  static navigationOption = ({ navigation }) => {
    const { entryId } = navigation.state.params;

    return {
      title: `${month}/${day}/${year}`
    };
  };
  render() {
    return (
      <View>
        <Text>
          Entry Detail -{" "}
          {JSON.stringify(this.props.navigation.state.params.entryId)}
        </Text>
      </View>
    );
  }
}

export default EntryDetail;
