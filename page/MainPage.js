import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components';
import perfectSize from './screenSize';
export const MainPage = ({navigation}) => {
  const Types = ['Защита', 'Удача', 'Любовь', 'Сила', 'Деньги'];
  return (
    <Container>
      <BgImage source={require('./fone.png')} />
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '100%'}}>
        <Title>В чем вы нуждаетесь?</Title>
        {Types.map((item, id) => {
          return (
            <Button
              key={id}
              onPress={() =>
                navigation.navigate('SecondPage', {category: item})
              }>
              <BtnText
                onPress={() =>
                  navigation.navigate('SecondPage', {category: item})
                }>
                {item}
              </BtnText>
            </Button>
          );
        })}
        <Image source={require('../assets/zavv.png')} />
        <Policy onPress={() => navigation.navigate('Policy')}>
          <PolicyText>Политика конфендециальности</PolicyText>
        </Policy>
      </ScrollView>
    </Container>
  );
};
const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
`;
const BgImage = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.Text`
  color: #d49930;
  font-size: ${perfectSize(36)}px;
  margin-top: ${perfectSize(53)}px;
  align-self: center;
  font-family: Daray;
`;
const Button = styled.TouchableOpacity`
  width: ${perfectSize(371)}px;
  height: ${perfectSize(101)}px;
  border: ${perfectSize(10)}px;
  border-color: #d49930;
  background-color: rgba(41, 41, 41, 0.4);
  align-items: center;
  justify-content: center;
  margin-top: ${perfectSize(32)}px;
  align-self: center;
`;
const BtnText = styled.Text`
  font-size: ${perfectSize(38)}px;
  color: #d49930;
  font-family: Daray;
`;
const Image = styled.Image`
  height: ${perfectSize(65)}px;
  width: ${perfectSize(399)}px;
  margin-top: ${perfectSize(87)}px;
  align-self: center;
`;
const Policy = styled.TouchableOpacity`
  color: white;
  margin-top: 56px;
`;
const PolicyText = styled.Text`
  color: white;
  align-self: center;
  margin-bottom: 20px;
  font-size: ${perfectSize(37)}px;
  font-family: Daray;
`;
