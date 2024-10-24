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

    const isFocused = useIsFocused()

    useEffect(() => {
        async function loadGamesFavorites() {
            const AsyncGamesFavorites = await AsyncStorage.getItem('@favoriteGames')
            const arrayAsyncGamesFavorites = JSON.parse(AsyncGamesFavorites)
            let games = []

            arrayAsyncGamesFavorites.forEach(async (nameGame) => {
                const game = await api.get(`/games/${nameGame}`, {
                    params: {
                        key: 'f3a00a4560d44cb7adb5f066d5592439'
                    }
                })
                    .then((response) => {
                        games.push(response)
                    })
            })

            console.log(games)
            setGamesFavorites(games)
            setLoading(false)
        }

        loadGamesFavorites()
    }, [isFocused])

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
                    renderItem={({ item }) => <GameItem data={item} />}
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