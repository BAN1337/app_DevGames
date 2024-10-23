import React from "react";
import {
    Container,
    CategoryButton,
    CategoryButtonText
} from "./styles";

export default function CategoryItem({ data }) {
    return (
        <Container>
            <CategoryButton>
                <CategoryButtonText>{data.name}</CategoryButtonText>
            </CategoryButton>
        </Container>
    )
}