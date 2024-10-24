import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

import {
    Container,
    GoBackButton,
    Title,
    DescriptionContainer,
    Description
} from "./styles";

export default function ModalContent({ closeModal, description }) {
    return (
        <Container>
            <GoBackButton onPress={() => closeModal()}>
                <Ionicons name="arrow-back" size={27} color="white" />
            </GoBackButton>

            <Title>Description</Title>

            <DescriptionContainer showsVerticalScrollIndicator={false}>
                <Description>{description}</Description>
            </DescriptionContainer>
        </Container>
    )
}