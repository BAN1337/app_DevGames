import React, { useState, useEffect } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import api from "../../services/api";

import {
    Container,
    Header,
    Title,
    MyFavoritesButton,
    SearchContainer,
    SearchInput,
    SearchButton,
    ListCategorysContainer,
    ListCategorys,
    Subtitle,
    ListGames
} from "./styles";
import { Text, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from "react-native";
import CategoryItem from "../../components/CategoryItem";
import GameItem from "../../components/GameItem";

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [searchInput, setSearchInput] = useState('')
    const [trendingGames, setTrendingGames] = useState([])
    const [categorys, setCategorys] = useState([])

    const isFocused = useIsFocused()
    const navigation = useNavigation()

    useEffect(() => {
        async function loadGames() {
            const trendingGames = await api.get('/games', {
                params: {
                    page_size: 10,
                    key: 'f3a00a4560d44cb7adb5f066d5592439'
                }
            })

            const categorys = await api.get('/genres', {
                params: {
                    key: 'f3a00a4560d44cb7adb5f066d5592439'
                }
            })

            setCategorys(categorys.data.results)
            setTrendingGames(trendingGames.data.results)
            setLoading(false)
        }

        loadGames()
    }, [isFocused])

    function handleSearch() {
        if (searchInput.trim().length > 0) {
            navigation.navigate('Search', { searchInput })
            setSearchInput('')
        }
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
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Header>
                    <Title>Dev<Text style={{ color: '#FF455F' }}>Games</Text></Title>

                    <MyFavoritesButton onPress={() => navigation.navigate('MyFavorites')}>
                        <Ionicons name="bookmark-outline" size={22} color="white" />
                    </MyFavoritesButton>
                </Header>
            </TouchableWithoutFeedback>

            <SearchContainer>
                <SearchInput
                    value={searchInput}
                    onChangeText={(text) => setSearchInput(text)}
                    placeholder="Looking for a game?"
                    placeholderTextColor='#fff'
                    autoCorrect={false}
                />
                <SearchButton onPress={handleSearch}>
                    <Feather name="search" size={31} color="#FF455F" />
                </SearchButton>
            </SearchContainer>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ListCategorysContainer>
                    <ListCategorys
                        data={categorys}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <CategoryItem data={item} />}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </ListCategorysContainer>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Subtitle>Trending Games</Subtitle>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ListGames
                    data={trendingGames}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <GameItem data={item} />}
                    showsVerticalScrollIndicator={false}
                />
            </TouchableWithoutFeedback>
        </Container>
    )
}