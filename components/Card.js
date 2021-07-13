import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black", //ios
    shadowOffset: { width: 0, height: 2 }, //ios
    shadowRadius: 6, //ios
    shadowOpacity: 0.25, //ios
    elevation: 8, //android
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
  },
});

export default Card;
