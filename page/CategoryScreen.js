import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import {amulets} from '../assets/Amulets';
import perfectSize from './screenSize';
import {Back} from '../assets/icons';

export default function CategoryScreen({navigation, route}) {
  const {params} = route;
  const {category} = params;

  return (
    <Container>
      <BgImage source={require('./fone.png')} />
      <Image source={require('../assets/zavv.png')} />

      <ScrollView>
        <MainContent>
          {amulets.map((item, id) => {
            if (item.category === category)
              return (
                <AmuletBg
                  key={id}
                  onPress={() =>
                    navigation.navigate('ThirdPage', {
                      name: item.title,
                      image: item.image,
                      category: item.category,
                      description: item.description,
                      isActivated: item.isActivated,
                      id: id,
                    })
                  }>
                  <Amulet source={item.image} />
                  <Title>{item.title}</Title>
                </AmuletBg>
              );
          })}
        </MainContent>
      </ScrollView>
      <BackBg onPress={() => navigation.goBack()}>
        <Back stroke="#fff" />
      </BackBg>
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
const BgImage = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const AmuletBg = styled.TouchableOpacity`
  /* height: ${perfectSize(244)}px;
  width: ${perfectSize(181)}px; */
  height: ${perfectSize(250)}px;
  width: ${perfectSize(200)}px;
  background-color: rgba(41, 41, 41, 0.5);
  align-items: center;
  margin-top: 16px;
  margin-left: 16px;
`;
const MainContent = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  /* justify-content: center; */
  flex-direction: row;
  margin-top: ${perfectSize(85)}px;
  flex-wrap: wrap;
`;
const Amulet = styled.Image`
  height: ${perfectSize(173)}px;
  width: ${perfectSize(150)}px;
  margin-top: ${perfectSize(21)}px;
`;
const Title = styled.Text`
  color: #d49930;
  font-size: ${perfectSize(30)}px;
  margin-top: ${perfectSize(12)}px;
  font-family: Daray;
`;
const Image = styled.Image`
  position: absolute;
  bottom: ${perfectSize(106)}px;
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
