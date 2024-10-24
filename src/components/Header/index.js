import React, { useEffect, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
    Container,
    GoBackButton,
    FavoriteButton
} from "./styles";

export default function Header({ nameGame }) {
    const [iconFavorite, setIconFavorite] = useState("bookmark-outline")
    const [gamesFavorites, setGamesFavorites] = useState([])

    const navigation = useNavigation()

    useEffect(() => {
        async function loadIcon() {
            const gamesFavorites = await AsyncStorage.getItem('@favoriteGames')
            const arrayGamesFavorites = JSON.parse(gamesFavorites)

            arrayGamesFavorites.forEach(game => {
                if (game === nameGame) {
                    setIconFavorite('bookmark')
                }
            })

            setGamesFavorites(arrayGamesFavorites)
        }

        loadIcon()
    }, [gamesFavorites])

    async function favoriteGame() {
        if (gamesFavorites !== null) {
            if (!gamesFavorites.includes(nameGame)) {
                let newGamesFavorites = [...gamesFavorites, nameGame]
                AsyncStorage.setItem('@favoriteGames', JSON.stringify(newGamesFavorites))
                setGamesFavorites(newGamesFavorites)
            }
        } else {
            AsyncStorage.setItem('@favoriteGames', JSON.stringify([nameGame]))
        }
    }

    return (
        <Container>
            <GoBackButton onPress={() => navigation.goBack()} activeOpacity={1}>
                <Ionicons name="arrow-back" size={27} color="white" />
            </GoBackButton>

            <FavoriteButton onPress={favoriteGame}>
                <Ionicons name={iconFavorite} size={27} color="white" />
            </FavoriteButton>
        </Container>
    )
}