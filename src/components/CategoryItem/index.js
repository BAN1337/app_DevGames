import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
    CategoryButton,
    CategoryButtonText
} from "./styles";

export default function CategoryItem({ data }) {
    const navigation = useNavigation()

    return (
        <CategoryButton onPress={() => navigation.navigate('Categorys', { data })}>
            <CategoryButtonText>{data.name}</CategoryButtonText>
        </CategoryButton>
    )
}