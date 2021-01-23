import React from "react";
import styled from "styled-components/native";
import Modal from "react-native-modal";
import { Input, Button } from "react-native-elements";
import { favoritesContext } from "../../../context/favorites";

interface Props {
  isVisible: boolean;
  hideModal: () => void;
}

const MyModal: React.FC<Props> = ({ isVisible, hideModal }) => {
  const [name, setName] = React.useState<string>("");
  const [price, setPrice] = React.useState<number>(0);
  const [calorie, setCalorie] = React.useState<number>(0);

  const ctx = React.useContext(favoritesContext);

  const handlePress = () => {
    const copiedPatients = JSON.parse(JSON.stringify(ctx.favorites));
    ctx.setFavorites([
      ...copiedPatients,
      { name, price, calorie, createdAt: 123 },
    ]);
    hideModal();
  };

  return (
    <Modal isVisible={isVisible}>
      <Wrapper>
        <Input
          label="なにを我慢しましたか？"
          onChangeText={(value: string) => setName(value)}
          value={name}
        />
        <Input
          keyboardType="number-pad"
          label="値段"
          onChangeText={(value: string) => setPrice(parseInt(value))}
          value={price}
        />
        <Input
          label="カロリー"
          keyboardType="number-pad"
          onChangeText={(value: string) => setCalorie(parseInt(value))}
          value={calorie}
        />
        <Button title="登録する" onPress={handlePress} />
      </Wrapper>
    </Modal>
  );
};

const Wrapper = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding-top: 32px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 32px;
`;

const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export default MyModal;
