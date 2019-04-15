import React, { Component } from 'react';
import NewsletterSignup from './NewsletterSignup';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <NewsletterSignup />
      </div>
    );
  }
}

export default Footer;