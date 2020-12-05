import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';


const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} infinite`;

export default class ReactAnimations extends Component {

  render() {
    return (
      <div>
        <Bounce><h1>Welcome to Flatnote</h1></Bounce>
      </div>
    );
  }
}

