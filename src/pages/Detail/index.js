import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import api from "../../services/api";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import {
    Container,
    ImagesListContainer,
    ImagesList,
    GameInfosContainer,
    NotaContainer,
    NotaGame,
    TitleGame,
    ListCategorysContainer,
    TitleCategorys,
    ListCategorys,
    TitleDescription,
    Description,
    ReadFullButton,
    ReadFullButtonText,
    ListPlatformsContainer,
    TitlePlatforms,
    ListPlatforms,
    ListStoresContainer,
    TitleStores,
    ListStores
} from "./styles";
import { ActivityIndicator, Modal, ScrollView } from "react-native";
import ImageItem from "../../components/ImageItem";
import Header from "../../components/Header";
import LinkButton from "../../components/LinkButton";
import CategoryItem from "../../components/CategoryItem";
import PlatformItem from "../../components/PlatformItem";
import StoreItem from "../../components/StoreItem";
import ModalContent from "../../components/ModalContent";

export default function Detail({ route }) {
    const [loading, setLoading] = useState(true)
    const [images, setImages] = useState([])
    const [game, setGame] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    const isFocused = useIsFocused()

    useEffect(() => {
        async function loadGame() {
            const game = await api.get(`/games/${route.params.data.slug}`, {
                params: {
                    key: 'f3a00a4560d44cb7adb5f066d5592439'
                }
            })

            setImages([{ id: '1', url: game.data.background_image }, { id: '2', url: game.data.background_image_additional }])
            setGame(game.data)
            setLoading(false)
        }

        loadGame()
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header nameGame={route.params.data.slug} />

                <ImagesListContainer>
                    <ImagesList
                        data={images}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <ImageItem data={item} />}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </ImagesListContainer>

                <LinkButton link={game.website} />

                <GameInfosContainer>
                    <NotaContainer>
                        <FontAwesome name="star" size={18} color="#FABB1E" />
                        <NotaGame>{game.rating}/{game.rating_top}</NotaGame>
                    </NotaContainer>

                    <TitleGame>{game.name}</TitleGame>
                </GameInfosContainer>

                <ListCategorysContainer>
                    <TitleCategorys>Genres</TitleCategorys>

                    <ListCategorys
                        data={game.genres}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <CategoryItem data={item} />}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                </ListCategorysContainer>

                <TitleDescription>Description</TitleDescription>

                <Description numberOfLines={7}>{game.description_raw}</Description>

                <ReadFullButton onPress={() => setModalVisible(true)}>
                    <ReadFullButtonText>Read full description</ReadFullButtonText>
                </ReadFullButton>

                <ListPlatformsContainer>
                    <TitlePlatforms>Platforms</TitlePlatforms>

                    <ListPlatforms
                        data={game.platforms}
                        keyExtractor={item => item.platform.id}
                        renderItem={({ item }) => <PlatformItem data={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </ListPlatformsContainer>

                <ListStoresContainer>
                    <TitleStores>Stores</TitleStores>

                    <ListStores
                        data={game.stores}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <StoreItem data={item} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </ListStoresContainer>

                <Modal animationType='slide' visible={modalVisible}>
                    <ModalContent closeModal={() => setModalVisible(false)} description={game.description_raw} />
                </Modal>
            </ScrollView>
        </Container>
    )
}