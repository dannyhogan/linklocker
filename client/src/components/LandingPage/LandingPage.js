import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss'
import { Button } from '@material-ui/core';
import LandingPageForm from '../LandingPageForm/LandingPageForm';

const LandingPage = () => {

  return (

    <section className="LandingPage">
      <h1>One link for everything, stored securely.</h1>

      <LandingPageForm />

      <div className="auth-container">

        <div>
          <h4>Need an account?</h4>
          <Link to="/signup">
            <Button variant="outlined">Sign Up</Button>
          </Link>
        </div>

        <div>
          <h4>Existing user?</h4>
          <Link to="/login">
            <Button variant="outlined">Login</Button>
          </Link>
        </div>

      </div>

    </section>
  );
}

export default LandingPage;
