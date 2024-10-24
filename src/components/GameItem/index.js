import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {
    GameContainer,
    BackgroundImage,
    Overlay,
    GameInfosContainer,
    TitleGame,
    NotaContainer,
    NotaGame
} from "./styles";

export default function GameItem({ data }) {
    return (
        <GameContainer>
            <BackgroundImage source={{ uri: data.background_image }}>
                <Overlay></Overlay>
                <GameInfosContainer>
                    <TitleGame>{data.name}</TitleGame>

                    <NotaContainer>
                        <FontAwesome name="star" size={24} color="#FABB1E" />
                        <NotaGame>{data.rating}/{data.rating_top}</NotaGame>
                    </NotaContainer>
                </GameInfosContainer>
            </BackgroundImage>
        </GameContainer>
    )
}