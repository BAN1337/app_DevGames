import React, { useState, useEffect } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

import {
    Container,
    Header,
    Title,
    MyFavoritesButton,
    SearchContainer,
    SearchInput,
    SearchButton,
    ListCategorys,
    Subtitle,
    ListGames
} from "./styles";
import { Text } from "react-native";
import CategoryItem from "../../components/CategoryItem";

export default function Home() {
    const [searchInput, setSearchInput] = useState('')

    return (
        <Container>
            <Header>
                <Title>Dev<Text style={{ color: '#FF455F' }}>Games</Text></Title>
                <MyFavoritesButton>
                    <Ionicons name="bookmark-outline" size={22} color="white" />
                </MyFavoritesButton>
            </Header>

            <SearchContainer>
                <SearchInput
                    value={searchInput}
                    onChangeText={(text) => setSearchInput(text)}
                    placeholder="Looking for a game?"
                    placeholderTextColor='#fff'
                    autoCorrect={false}
                />
                <SearchButton>
                    <Feather name="search" size={31} color="#FF455F" />
                </SearchButton>
            </SearchContainer>

            <ListCategorys
                data={[{ id: 1, name: 'All Games' }, { id: 2, name: 'Arcade' }, { id: 3, name: 'Action' }, { id: 4, name: 'Sports' }, { id: 5, name: 'Puzzle' }]}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CategoryItem data={item} />}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />

            <Subtitle>Trending Games</Subtitle>
        </Container>
    )
}