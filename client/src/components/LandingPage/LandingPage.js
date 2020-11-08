import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss'
import { Button } from '@material-ui/core';
import LandingPageForm from '../LandingPageForm/LandingPageForm';
import Particles from 'react-particles-js';

const LandingPage = () => {

  return (

    <section className="LandingPage">
      <h1>One page for all your links, stored securely.</h1>

      <LandingPageForm />

      <div className="auth-container">

        <div className="auth-redirect-container">
          <h4>Need an account?</h4>
          <Link to="/signup">
            <Button variant="outlined">Sign Up</Button>
          </Link>
        </div>

        <div className="auth-redirect-container">
          <h4>Existing user?</h4>
          <Link to="/login">
            <Button variant="outlined">Login</Button>
          </Link>
        </div>

      </div>
      <Particles
        className="particles"
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />
    </section>
  );
}

export default LandingPage;
