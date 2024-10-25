import React, { useEffect, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
    Container,
    GoBackButton,
    FavoriteButton
} from "./styles";

export default function Header({ dataGame }) {
    const [iconFavorite, setIconFavorite] = useState("bookmark-outline")
    const [gamesFavorites, setGamesFavorites] = useState([])
    const [toggleIcon, setToggleIcon] = useState(false)

    const navigation = useNavigation()
    const isFocused = useIsFocused()

    useEffect(() => {
        async function loadIcon() {
            const gamesFavorites = await AsyncStorage.getItem('@favoriteGames')

            if (gamesFavorites !== null) {
                const arrayGamesFavorites = JSON.parse(gamesFavorites)
                let achou = false

                arrayGamesFavorites.forEach(game => {
                    dataGame.id === game.id ? achou = true : null
                })

                achou ? setIconFavorite('bookmark') : setIconFavorite("bookmark-outline")
                setGamesFavorites(arrayGamesFavorites)
            }
        }

        loadIcon()
    }, [isFocused, toggleIcon])

    async function favoriteGame() {
        if (gamesFavorites !== null) {
            let achou = false
            gamesFavorites.forEach(game => {
                game.id === dataGame.id ? achou = true : null
            })

            if (achou === false) {
                let newGamesFavorites = [...gamesFavorites, dataGame]
                AsyncStorage.setItem('@favoriteGames', JSON.stringify(newGamesFavorites))
                setGamesFavorites(newGamesFavorites)
                setToggleIcon(!toggleIcon)
            } else {
                let games = gamesFavorites
                let idx

                games.forEach((game, index) => {
                    game.id === dataGame.id ? idx = index : null
                })

                games.splice(idx, 1)

                AsyncStorage.setItem('@favoriteGames', JSON.stringify(games))
                setGamesFavorites(games)
                setToggleIcon(!toggleIcon)
            }
        } else {
            AsyncStorage.setItem('@favoriteGames', JSON.stringify([dataGame]))
            setGamesFavorites([dataGame])
            setToggleIcon(!toggleIcon)
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