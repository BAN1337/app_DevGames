import React from "react";

import {
    Container,
    Text
} from "./styles";

export default function PlatformItem({ data }) {
    return (
        <Container>
            <Text>{data.platform.name}</Text>
        </Container>
    )
}