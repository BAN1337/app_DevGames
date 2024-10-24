import React from "react";
import {
    CategoryButton,
    CategoryButtonText
} from "./styles";

export default function CategoryItem({ data }) {
    return (
        <CategoryButton>
            <CategoryButtonText>{data.name}</CategoryButtonText>
        </CategoryButton>
    )
}