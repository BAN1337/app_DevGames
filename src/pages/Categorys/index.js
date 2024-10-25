import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import api from "../../services/api";

import {
    Container,
    ListGames
} from "./styles";
import GameItem from "../../components/GameItem";
import { ActivityIndicator } from "react-native";

export default function Categorys({ route }) {
    const [loading, setLoading] = useState(true)
    const [gamesGenres, setGamesGenres] = useState([])

    const isFocused = useIsFocused()

    useEffect(() => {
        async function loadGames() {
            const gamesGenres = await api.get('/games', {
                params: {
                    page_size: 10,
                    key: 'f3a00a4560d44cb7adb5f066d5592439',
                    genres: route.params.data.id
                }
            })

            setGamesGenres(gamesGenres.data.results)
            setLoading(false)
        }

        loadGames()
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
            <ListGames
                data={gamesGenres}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <GameItem data={item} />}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}