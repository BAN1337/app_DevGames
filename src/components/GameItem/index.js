import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import Feather from '@expo/vector-icons/Feather';

import {
    GameContainer,
    BackgroundImage,
    Overlay,
    GameInfosContainer,
    TitleGame,
    NotaContainer,
    NotaGame,
    ButtonRemoveFavorite
} from "./styles";

export default function GameItem({ data, isFavorite, removeFavorite }) {
    const navigation = useNavigation()

    return (
        <GameContainer onPress={() => navigation.navigate('Detail', { data })}>
            <BackgroundImage source={{ uri: data.background_image }}>
                {isFavorite && (
                    <ButtonRemoveFavorite onPress={() => removeFavorite(data)}>
                        <Feather name="trash" size={24} color="white" />
                    </ButtonRemoveFavorite>
                )}
                <Overlay></Overlay>
                <GameInfosContainer>
                    <TitleGame>{data.name}</TitleGame>

                    <NotaContainer>
                        <FontAwesome name="star" size={18} color="#FABB1E" />
                        <NotaGame>{data.rating}/{data.rating_top}</NotaGame>
                    </NotaContainer>
                </GameInfosContainer>
            </BackgroundImage>
        </GameContainer>
    )
}