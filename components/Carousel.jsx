import React, { useState } from "react";
import {
  SectionList,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import slides from "../slides";
import CarouselItem from "./CarouselItem";
import { ButtonContainer, ButtonView, ButtonText } from "./styles";


export default function Carousel() {

const { width } = useWindowDimensions();

const [page, setPage] = useState(1);

const limit = slides && Math.ceil(slides.length / 3);


const paginate = (array, page) => {
  if (array.length < 3 && array.length !== 0) array;
  else {
    const offset = page * 3;
    const initial = offset - 3;
    return array.slice(initial, offset);
  }
};

 const handleNextPress = () => {
   setPage(page + 1);
 }; 
 const handlePrevPress = () => {
   setPage(page - 1);
 }; 
 const alertN = () => {
   Alert.alert("This is the last page");
 }; 
 const alertP = () => {
   Alert.alert("There are no previous pages");
 }; 
 return slides ? (
   <>
     <SectionList
       style={{ backgroundColor: "black" }}
       sections={paginate(slides, page)}
       renderItem={({ item }) => <CarouselItem item={item} />}
       horizontal
       keyExtractor={(item, i) => i}
       pagingEnabled
       decelerationRate={"fast"}
       snapToInterval={width + 20}
     />
     <ButtonContainer>
       <TouchableOpacity onPress={page === 1 ? alertP : handlePrevPress}>
         <ButtonView>
           <ButtonText>{"<"}</ButtonText>
         </ButtonView>
       </TouchableOpacity>
       <TouchableOpacity onPress={page === limit ? alertN : handleNextPress}>
         <ButtonView>
           <ButtonText>{">"}</ButtonText>
         </ButtonView>
       </TouchableOpacity>
     </ButtonContainer>
   </>
 ) : (
   <Text>cargando...</Text>
 );
}
