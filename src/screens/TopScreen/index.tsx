import React from "react";
import styled from "styled-components/native";
import { Divider, Text } from "react-native-elements";
import PatientButton from "./components/PatientButton";
import Modal from "./components/Modal";
import Favorite from "./components/Favorite";
import { favoritesContext } from "../../context/favorites";
import * as colors from "../../const/colors";
import { SafeAreaView } from "react-native";

const Top: React.FC = () => {
  const [isVisibleModal, setIsVisibleModal] = React.useState<boolean>(false);
  const ctx = React.useContext(favoritesContext);

  const totalPrice = ctx.favorites.reduce((accumulator, currentValue) => {
    return accumulator.price + currentValue.price;
  }, 0);
  const totalCalorie = ctx.favorites.reduce((accumulator, currentValue) => {
    return accumulator.calorie + currentValue.calorie;
  }, 0);
  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <Title>我慢の結果</Title>
      <Price>
        9,950<Aside>円我慢しました</Aside>
      </Price>
      <Price>
        9,950<Aside>kcal我慢しました</Aside>
      </Price>
      <Divider
        style={{ height: 1, backgroundColor: "#e1e8ee", marginBottom: 16 }}
      />
      <Favorite />
      <PatientButton handlePressButton={() => setIsVisibleModal(true)} />
      <Modal
        isVisible={isVisibleModal}
        hideModal={() => setIsVisibleModal(false)}
      />
    </SafeAreaView>
  );
};

export default Top;

const Title = styled.Text`
  text-align: center;
  font-size: 24;
  color: #094067;
  font-weight: bold;
  text-decoration: underline;
`;

const Price = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 24;
  color: #094067;
  margin: 16px 0 4px;
`;

const Aside = styled(Text)`
  font-weight: bold;
  font-size: 20;
  color: #094067;
`;
