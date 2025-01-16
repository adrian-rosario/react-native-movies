import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { allStyle } from "../../styles/allStyle";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome

export default function RandomReview() {
  return (
    <View>
      <Text style={allStyle.text}>FontAwesome Icon -Example:</Text>
      <Icon name='film' size={30} color='#900' />
      <Icon name='rocket' size={30} color='blue' />
    </View>
  );
}
