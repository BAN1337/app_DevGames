import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #0F172A;
`

export const GoBackButton = styled.TouchableOpacity`
    background-color: #050B18;
    height: 46px;
    width: 46px;
    border-radius: 23px;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 13px;
    top: 40px;
    z-index: 99;
`

export const Title = styled.Text`
    margin-top: 49px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
`

export const DescriptionContainer = styled.ScrollView`
    margin-top: 24px;
    margin-left: 13px;
    margin-right: 13px;
    margin-bottom: 40px;
`

export const Description = styled.Text`
    font-size: 14px;
    color: #EFEFEFB2;
`