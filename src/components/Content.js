import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
display: flex;
justify-content:space-between;
flex-direction:row;

width: 700px;
height:500px;
margin: 0 auto;
box-sizing: border-box;
`
const ContentItem = styled.p`
color: #000000;
text-align: center;
font-family: "Read";
width: 250px;
padding:10px;
box-sizing: border-box;
background-color: #559;
margin: 40px;
`

function content() {
  return (
    <>
    <Content>
    <ContentItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel tempor metus. Nullam elementum ligula id aliquet convallis. Nullam feugiat viverra augue, commodo mollis odio bibendum eget. Quisque varius sem ac libero aliquam, non fringilla nisi semper. 
      Suspendisse porta eros at n
       </ContentItem>
       <ContentItem>unc sollicitudin, sed aliquet 
      nisl interdum. Phasellus suscipit
       elementum volutpat. Nam condimentum 
       velit a congue tempor.</ContentItem>
    </Content>
    </>
  )
}

export default content;