import React, { Component } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap/lib';
import './NewsletterSignup.scss';

class NewsletterSignup extends Component {
  render() {
    return (
    	<div className="newsletter-container">
		    <Form className="newsletter-signup" id="revue-embed" action="https://www.getrevue.co/profile/codeshewrote/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
				<label htmlFor="member_email">SUBSCRIBE</label>
				<FormControl className="revue-form-field" placeholder="Enter Email Address" type="email" name="member[email]" id="member_email" />
				<Button variant="primary" type="submit" name="member[subscribe]" id="member_submit">Submit</Button>
		  	</Form>
	  	</div>
    );
  }
}

export default NewsletterSignup;