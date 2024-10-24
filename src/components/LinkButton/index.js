import React from "react";
import Feather from '@expo/vector-icons/Feather';
import { Linking } from "react-native";

import {
    Button
} from "./styles";

export default function LinkButton({ link }) {
    async function OpenLink() {
        try {
            await Linking.openURL(link)
        } catch (error) {
            alert('Não é possível abrir este link!')
        }
    }

    return (
        <Button activeOpacity={0.8} onPress={OpenLink}>
            <Feather name="link" size={28} color="white" />
        </Button>
    )
}