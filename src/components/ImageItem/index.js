import React from "react";

import {
    ImageContainer
} from "./styles";

export default function ImageItem({ data }) {
    return (
        <ImageContainer source={{ uri: data.url }} />
    )
}