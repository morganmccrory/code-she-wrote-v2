import React, { Component } from 'react';
import './NewsletterSignup.css';

class NewsletterSignup extends Component {
  render() {
    return (
	    <div class="newsletter-signup">
	      <span class="nl-text">SUBSCRIBE</span>
	      <input type="email" name="email" placeholder="Email Address"/>
	      <input type="submit" value="submit" />
	    </div>
    );
  }
}

export default NewsletterSignup;