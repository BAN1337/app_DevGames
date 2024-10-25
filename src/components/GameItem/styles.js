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
    padding: 12px;
`

export const TitleGame = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
`

export const NotaContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

export const NotaGame = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-left: 7px;
`

export const ButtonRemoveFavorite = styled.TouchableOpacity`
    background-color: #E72F49;
    width: 46px;
    height: 46px;
    border-radius: 23px;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 13px;
    top: 13px;
    z-index: 99;
`