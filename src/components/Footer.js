import React from 'react';
import styled from 'styled-components';



const Footer = styled.footer `
position: fixed;
bottom: 0;
left: 0;
height: 90px;
width: 100%;
display: flex;
justify-content: center;
background-color:  	#9370DB;
align-items: center;
`
const FooterItem = styled.div `
text-decoration: none;
font-size: 16px;
color: #ffffff;
font-weight: bold;

`

function footer() {
  return (
<>
    <Footer>
      <FooterItem>Produzido - Luciana Furtado - Aprendizado sobre Styled-Components</FooterItem>
      
    </Footer>
</>
  )
}

export default footer;