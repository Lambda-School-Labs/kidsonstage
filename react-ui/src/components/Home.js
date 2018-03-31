import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import centerPng from './graphics/landing-center-graphic.png';

import './css/home.css';
// import NewUser from './NewUser';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: props.text,
    };
  }

  render() {
    return (
      <div className="home">
        <div className="carousel">
          <img src={centerPng} />
        </div>
        <div className="home_text">
					Welcome to Kids On Stage! A queue notification system for any event!
        </div>
        <button className="cta_button">
          <Link to="/new-user">Buy Now</Link>
        </button>
      </div>
    );
  }
}
// Landing.propTypes = {
//   signUp: PropTypes.func.isRequired,
//   signIn: PropTypes.func.isRequired,
//   // addUser: PropTypes.func.isRequired,
// };