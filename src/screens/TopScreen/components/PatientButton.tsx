import React from "react";
import styled from "styled-components/native";

interface Props {
  handlePressButton: () => void;
}

const PatientButton: React.FC<Props> = ({ handlePressButton }) => {
  return (
    <CircleButton onPress={handlePressButton}>
      <ButtonText>我慢する！</ButtonText>
    </CircleButton>
  );
};

export default PatientButton;

const CircleButton = styled.TouchableOpacity`
  margin: auto auto 16px auto;
  background: #3da9fc;
  border-radius: 75px;
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  text-shadow: 0px 1px 1px #444444;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
`;

const ButtonText = styled.Text`
  color: #fffffe;
  font-weight: bold;
  font-size: 28px;
  font-family: "System";
`;
