import React from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import { LoremText, ItemImage, MyView } from "./styles";

const CarouselItem = ({ item }) => {
  const { width } = useWindowDimensions();
  const styles = StyleSheet.create({
    scrollview: {
      padding: width / 4,
      marginRight: 20,
      height: "100%",
      width,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  const altImg = "https://picsum.photos/id/999/500/500"
  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      <MyView>
        <ItemImage source={{ uri: item ? item : altImg }} /> 
        <LoremText>Lorem ipsum dolor sit amet</LoremText>
      </MyView>
    </ScrollView>
  );
};

export default CarouselItem;
