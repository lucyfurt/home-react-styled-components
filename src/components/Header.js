import React from 'react';
import styled from 'styled-components'
const Header = styled.div `
background-color: #7B68EE;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;

width: 100%;
height: 60px;

`
const Item = styled.a`
font-size: 14px;
font-family: 'Read';
font-weight: bold;
color: #ffff;
padding: 10px;

`
function header() {
  return(
    <Header>
      <Item>Home</Item>
      <Item>Sobre</Item>
      <Item>Contato</Item>
    </Header>
  );
}

export default header;