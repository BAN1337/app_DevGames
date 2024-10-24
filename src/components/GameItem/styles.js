import styled from "styled-components/native";

export const GameContainer = styled.TouchableOpacity`
    height: 169px;
    margin-left: 13px;
    margin-right: 13px;
    margin-bottom: 13px;
    border-radius: 8px;
`

export const BackgroundImage = styled.ImageBackground`
    flex: 1;
    justify-content: flex-end;
`

export const Overlay = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
`

export const GameInfosContainer = styled.View`
    padding: 10px;
`

export const TitleGame = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 19px;
    margin-bottom: 5px;
`

export const NotaContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const NotaGame = styled.Text`
    color: #fff;
    font-size: 15px;
    margin-left: 7px;
`