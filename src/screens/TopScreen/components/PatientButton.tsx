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
  margin: auto;
  background: #3da9fc;
  border-radius: 100px;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  text-shadow: 0px 1px 1px #444444;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
`;

const ButtonText = styled.Text`
  color: #fffffe;
  font-weight: bold;
  font-size: 30px;
  font-family: "System";
`;
