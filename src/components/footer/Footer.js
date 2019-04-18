import React, { Component } from 'react';
import NewsletterSignup from '../newsletter-signup/NewsletterSignup';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <NewsletterSignup />
      </div>
    );
  }
}

export default Footer;