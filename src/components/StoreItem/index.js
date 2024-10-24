import React from "react";

import {
    Container,
    Text
} from "./styles";

export default function StoreItem({ data }) {
    return (
        <Container>
            <Text>{data.store.name}</Text>
        </Container>
    )
}