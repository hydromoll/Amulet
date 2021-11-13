import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Modal, ScrollView} from 'react-native';
import styled from 'styled-components';
import {BackgroundImage, BgImage} from '../assets/BgImage';
import {Back} from '../assets/icons';
import perfectSize from './screenSize';
export default function AmuletPage({navigation, route}) {
  const {params} = route;
  const {name, image, description, category} = params;
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    getStorage();
  }, []);
  const modalHandler = async () => {
    if (!active) {
      let oneday = new Date();
      const saveDate = oneday.setHours(oneday.getHours() + 24).toString();
      await AsyncStorage.setItem(`${name}`, 'True');
      setModal(true);
      await AsyncStorage.setItem(`${name}Timestamp`, `${saveDate}`);
      setActive(true);
    }
  };
  const shield = 'Защита от всех бед обеспечена';
  const lucky = 'Вас ждет удача во всех начинаниях';
  const love = 'Вам будет сопутствовать удача в любовных делах';
  const power = 'Сила и успех вам гарантированы';
  const money = 'Деньги польются ручьем';
  const modalText = () => {
    if (category == 'Защита') {
      return shield;
    }
    if (category == 'Удача') {
      return lucky;
    }
    if (category == 'Любовь') {
      return love;
    }
    if (category == 'Сила') {
      return power;
    }
    if (category == 'Деньги') {
      return money;
    }
  };
  const getStorage = async () => {
    await AsyncStorage.getItem(`${name}`).then(Active => setActive(Active));
  };
  return (
    <Container>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModal(!modal);
        }}>
        <ModalContainer onPress={() => setModal(false)}>
          <ModalView>
            <ZavImage source={require('../assets/zavv3.png')} />
            <CongratulationsText>Поздравляем!</CongratulationsText>
            <DescriptionText>Амулет активирован!</DescriptionText>
            <DescriptionText>
              Теперь {modalText()} на протяжение 24 часов
            </DescriptionText>
            <ThanksButton onPress={() => setModal(false)}>
              <ThanksButtonText>Благодарю!</ThanksButtonText>
            </ThanksButton>
            <ZavImage
              source={require('../assets/zavv3.png')}
              style={{transform: [{rotate: '-180deg'}]}}
            />
          </ModalView>
        </ModalContainer>
      </Modal>
      <BackgroundImage />
      <ScrollView>
        <Content>
          <Image source={image} />
          <Title>{name}</Title>
          <Button onPress={() => modalHandler()}>
            <ButtonText>{active ? 'Активировано' : 'Активировать'}</ButtonText>
          </Button>
          <Description>{description}</Description>
        </Content>
      </ScrollView>
      <BackBg onPress={() => navigation.goBack()}>
        <Back stroke="#fff" />
      </BackBg>
      {/* <Button onPress={() => navigation.goBack()}></Button> */}
    </Container>
  );
}
const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #2cc;
`;
const Title = styled.Text`
  margin-top: ${perfectSize(17)}px;
  font-size: ${perfectSize(34)}px;
  color: #d49930;
  font-family: Daray;
`;
const Image = styled.Image`
  height: ${perfectSize(314)}px;
  width: ${perfectSize(269)}px;
`;
const Button = styled.TouchableOpacity`
  height: ${perfectSize(89)}px;
  width: ${perfectSize(355)}px;
  border: 10px solid #d59930;
  margin-top: ${perfectSize(40)}px;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  color: white;
  font-size: ${perfectSize(36)}px;
  font-family: Daray;
`;
const Description = styled.Text`
  font-size: ${perfectSize(34)}px;
  text-align: center;
  color: #d49930;
  padding: 0 55px;
  margin-top: ${perfectSize(37)}px;
  font-family: Daray;
  margin-bottom: 20px;
`;
const Content = styled.View`
  width: 100%;
  height: 100%;
  margin-top: ${perfectSize(142)}px;
  align-items: center;
`;
const ModalView = styled.View`
  width: ${perfectSize(385)}px;
  height: ${perfectSize(550)}px;
  background-color: #ae8947;
  align-items: center;
  justify-content: center;
  border: 10px solid #342408;
  /* align-self: center; */
  /* margin-top: ${perfectSize(195)}px; */
  /* position: absolute;
  top: 0px;
  bottom: 0px;
  left: 13px;
  right: 0px; */
`;
const ModalContainer = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
`;
const ZavImage = styled.Image`
  height: ${perfectSize(48)}px;
  width: ${perfectSize(293)}px;
  margin-top: ${perfectSize(39)}px;
`;
const CongratulationsText = styled.Text`
  color: white;
  font-size: ${perfectSize(56)}px;
  margin-top: ${perfectSize(17)}px;
  font-family: Daray;
`;
const DescriptionText = styled.Text`
  font-size: ${perfectSize(33)}px;
  text-align: center;
  color: white;
  margin-top: ${perfectSize(12)}px;
  font-family: Daray;
`;
const ThanksButton = styled.TouchableOpacity`
  height: ${perfectSize(59)}px;
  width: ${perfectSize(237)}px;
  border: 6px solid #d49930;
  background-color: rgba(0, 0, 0, 0.15);
  align-items: center;
  justify-content: center;
  margin-top: ${perfectSize(20)}px;
`;
const ThanksButtonText = styled.Text`
  color: white;
  font-weight: 900;
  font-size: ${perfectSize(33)}px;
  font-family: Daray;
`;
const BackBg = styled.TouchableOpacity`
  height: 44px;
  width: 44px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25px;
  left: 25px;
`;
