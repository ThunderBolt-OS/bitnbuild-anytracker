import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface SafeAreaContext {
  children: JSX.Element;
}
const SafeArea = ({ children }: SafeAreaContext) => {
  return <SafeAreaView style={styles.background_main}>{children}</SafeAreaView>;
};

export default SafeArea;

const styles = StyleSheet.create({
  background_main: {
    flex: 1,
    backgroundColor: "#0A0D30",
    paddingBottom: 8,
    paddingHorizontal: 10,
  },
});
