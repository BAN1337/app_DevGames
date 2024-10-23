import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #050B18;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 13px;
`
export const Title = styled.Text`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`

export const MyFavoritesButton = styled.TouchableOpacity`
    width: 37px;
    height: 37px;
    border-radius: 18.5px;
    background-color: #1f2430;
    justify-content: center;
    align-items: center;
`

export const SearchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 13px;
`

export const SearchInput = styled.TextInput`
    flex: 1;
    height: 45px;
    background-color: #1f2430;
    color: #fff;
    padding: 10px;
    font-size: 19px;
    border-radius: 20px;
    margin-right: 15px;
`

export const SearchButton = styled.TouchableOpacity`
    width: 15%;
`

export const ListCategorys = styled.FlatList`
    margin: 13px;
`

export const Subtitle = styled.Text`
    color: #fff;
`

export const ListGames = styled.FlatList`

`