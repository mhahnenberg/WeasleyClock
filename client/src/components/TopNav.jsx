import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DropDown from './DropDown';
const Styled = require('./Styles');

// tried to implement styles in a separate file but it isn't working because it says it isn't "returning a string"

const TopNav = (props) => {

  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    let post = {};
    e.preventDefault();
    let updateDB = async () => {
      props.setLocations(locations => [...locations, text]);
    }
    updateDB()
    .then(
      post = { locations, userName: props.userName},
      // axios.post('/api/updateLocations', post)
      )
      console.log('this is post: ', post)
    setText('');
  }

  return(
  <TopNavStyle>
  <Title>You're a Wizard {props.userName}</Title>
  <DropDown setCurrentLocation={props.setCurrentLocation} currentLocation={props.currentLocation} locations={props.locations} />
  <form onSubmit={handleSubmit}>
    <Div>
      <Label>Add A New Location</Label>
    </Div>
  <Text type="text" color='antiquewhite' id="location" value={text} onChange={e => setText(e.target.value)} name="location"></Text>
  <Div>
  <Button type="submit" value='Portus!'></Button>
  </Div>
  </form>
  </TopNavStyle>
  )
}

const Div = styled.div`
  padding:5px
`

const TopNavStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 175px;
  width: 100vw;
  background-image: url('darkWood.jpg');
  text-align: center;
  padding:5px;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
  `

const Text = styled.input`
  background-image: url('darkWood.jpg');
  border-radius:18px;
  border-color:antiqueWhite;
`

const Label = styled.label`
  color:antiquewhite;
  font-size:12px;
`

const Button = styled.input`
  color:AntiqueWhite;
  background-image: url('darkWood.jpg');
  opacity: 50%;
  border-radius:18px;
`

const Title = styled.p`
  margin:0px;
  font-size:40px;
`

export default TopNav;