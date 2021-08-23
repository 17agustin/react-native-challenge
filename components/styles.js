import styled from "styled-components/native";


export const LoremText = styled.Text`
    margin-top: 30px;
    font-weight: bold;
    font-style: italic;
    font-size: 20px;
    color:black
`;

export const ItemImage = styled.Image`
    padding: 20px;
    width:392px;
    height: 470px;
    border-radius: 20px
`
export const MyView = styled.View`
    height: 50%;
    width: 392px;
    background-color: gray;
    border-radius: 20px;
    flex: 1;
    justify-content: flex-start;
    align-items: center
        
`
export const ButtonContainer = styled.View`
      background-color: black;
      width: 392px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between
`

export const ButtonView = styled.View`
      width: 140px;
      align-items: center;
      background-color: crimson;
      justify-content: center
`
export const ButtonText = styled.Text`
      text-align: center;
      padding: 10px;
      color: black;
      font-size: 30px;
      font-weight: bold
`