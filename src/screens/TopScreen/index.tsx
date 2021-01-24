import React from "react";
import styled from "styled-components/native";
import { Divider } from "react-native-elements";
import PatientButton from "./components/PatientButton";
import Modal from "./components/Modal";
import Result from "./components/Result";
import Favorite from "./components/Favorite";

const Top: React.FC = () => {
  const [isVisibleModal, setIsVisibleModal] = React.useState<boolean>(false);

  return (
    <Container>
      <Content>
        <Result />
        <Divider
          style={{
            height: 1,
            backgroundColor: "#e1e8ee",
            marginTop: 16,
          }}
        />
        <Favorite />
        <PatientButton handlePressButton={() => setIsVisibleModal(true)} />
        <Modal
          isVisible={isVisibleModal}
          hideModal={() => setIsVisibleModal(false)}
        />
      </Content>
    </Container>
  );
};

export default Top;

const Container = styled.SafeAreaView`
  background-color: #fffffe;
  flex: 1;
`;
const Content = styled.View`
  padding-top: 16px;
  flex: 1;
`;
