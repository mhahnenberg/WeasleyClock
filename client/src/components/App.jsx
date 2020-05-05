import React from 'react';
import styled from 'styled-components';
import MakeCircles from './MakeCircles'

class App extends React.Component {

  render() {
    return (
      <Centered>
        <Col>
          <MakeCircles />
        </Col>
      </Centered>
    )
  }
}

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Luminari';
  color: AntiqueWhite;
`
const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App;