import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
    Container,
    ListGames,
    MessageErrorContainer,
    MessageErrorText
} from "./styles";
import { ActivityIndicator } from "react-native";
import GameItem from "../../components/GameItem";

export default function MyFavorites() {
    const [loading, setLoading] = useState(true)
    const [gamesFavorites, setGamesFavorites] = useState([])
    const [updateScreen, setUpdateScreen] = useState(false)
    const isFocused = useIsFocused()

    useEffect(() => {
        async function loadGamesFavorites() {
            const gamesFavorites = await AsyncStorage.getItem('@favoriteGames')

            if (gamesFavorites !== null) {
                setGamesFavorites(JSON.parse(gamesFavorites))
            }

            setLoading(false)
        }

        loadGamesFavorites()
    }, [isFocused, updateScreen])

    function removeFavorite(data) {
        let games = gamesFavorites
        let idx

        games.forEach((game, index) => {
            game.id === data.id ? idx = index : null
        })

        games.splice(idx, 1)

        setGamesFavorites(games)
        setUpdateScreen(!updateScreen)
        AsyncStorage.setItem('@favoriteGames', JSON.stringify(games))
    }

    if (loading) {
        return (
            <Container style={{ justifyContent: 'center' }}>
                <ActivityIndicator size={50} color='#FF455F' />
            </Container>
        )
    }

    return (
        <Container>
            {gamesFavorites.length > 0 ? (
                <ListGames
                    data={gamesFavorites}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <GameItem data={item} isFavorite={true} removeFavorite={(data) => removeFavorite(data)} />}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <MessageErrorContainer>
                    <MessageErrorText>Não há jogos favoritados...</MessageErrorText>
                </MessageErrorContainer>
            )}
        </Container>
    )
}