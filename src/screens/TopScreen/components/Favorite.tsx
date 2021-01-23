import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { favoritesContext } from "../../../context/favorites";

const FavoriteList: React.FC = () => {
  const ctx = React.useContext(favoritesContext);
  const keyExtractor = (item: any, index: number) => index.toString();
  const renderItem = ({ item }) => {
    return (
      <List>
        <ListText>{item.name}</ListText>
        <ListTextPrice>
          {item.price}
          <Unit> 円</Unit>
        </ListTextPrice>

        <ListTextCal>
          {item.calorie}
          <Unit> kcal</Unit>
        </ListTextCal>
      </List>
    );
  };
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>よく我慢する項目</Title>
      </TitleWrapper>
      <ContentWrapper>
        <Content
          keyExtractor={keyExtractor}
          data={ctx.favorites}
          renderItem={renderItem}
          numColumns={3}
        />
      </ContentWrapper>
    </Wrapper>
  );
};

export default FavoriteList;

const Content = styled.FlatList`
  padding: 0 0 4px 8px;
`;

const Wrapper = styled.View``;
const TitleWrapper = styled.View`
  padding: 0 0 8px 8px;
`;

const List = styled.TouchableOpacity`
  padding: 8px;
  background-color: #fffffe;
  border-radius: 2px;
  margin-right: 8px;
  text-align: left;
  width: 30%;
`;
const ListText = styled.Text`
  color: #094067;
`;
const ListTextPrice = styled.Text`
  color: #094067;
  font-weight: bold;
  font-size: 20;
  text-align: center;
  margin-top: 8px;
`;
const Unit = styled.Text`
  font-weight: normal;
  font-size: 14;
`;

const ListTextCal = styled.Text`
  color: #094067;
  font-weight: bold;
  font-size: 20;
  text-align: center;
  margin-top: 8px;
`;

const ContentWrapper = styled.View`
  background-color: #90b4ce;
  padding: 8px 0;
`;

const Title = styled.Text`
  color: #094067;
`;
