import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { recordsContext } from "../../context/records";
import * as colors from "../../const/colors";

const Records: React.FC = () => {
  const ctx = React.useContext(recordsContext);
  const keyExtractor = (item: any, index: number) => index.toString();
  const renderItem = ({ item }) => {
    return (
      <List>
        <ListLeft>
          <Name>お酒</Name>
          <Date>2020/02/01</Date>
        </ListLeft>
        <ListRight>
          <ListRightWrapper>
            <Price>300円</Price>
            <Calorie>300kcal</Calorie>
          </ListRightWrapper>
          <View>
            <Icon name="angle-right" size={20} color="#5f6c7b" />
          </View>
        </ListRight>
      </List>
    );
  };
  console.log(ctx);
  return (
    <Container>
      <ListWrapper
        data={["", ""]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};

export default Records;

const Container = styled.SafeAreaView`
  background-color: #fffffe;
  flex: 1;
`;

const ListWrapper = styled.FlatList`
  padding: 0 8px;
`;
const List = styled.TouchableOpacity`
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: #5f6c7b;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ListLeft = styled.View`
  margin-right: auto;
`;
const ListRight = styled.View`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Price = styled.Text`
  font-weight: bold;
  font-size: 18;
  color: #5f6c7b;
`;

const Calorie = styled.Text`
  font-weight: bold;
  font-size: 18;
  margin-top: 4px;
  color: #5f6c7b;
`;

const Name = styled.Text`
  font-size: 16px;
  margin-bottom: 4px;
  color: #5f6c7b;
`;

const ListRightWrapper = styled.View`
  margin-right: 16px;
  align-items: flex-end;
`;

const Date = styled.Text`
  color: #5f6c7b;
`;
