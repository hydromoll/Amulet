import React from 'react';
import WebView from 'react-native-webview';
import styled from 'styled-components';
export default function PolicyPage() {
  return (
    <Container>
      <WebView
        source={{uri: 'https://www.google.com/'}}
        style={{
          flex: 1,
        }}
      />
    </Container>
  );
}
const Container = styled.View`
  height: 100%;
  width: 100%;
`;
