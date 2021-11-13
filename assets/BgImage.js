import React from 'react';
import styled from 'styled-components';
export const BackgroundImage = () => {
  return <BgImage source={require('../page/fone.png')} />;
};
const BgImage = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
