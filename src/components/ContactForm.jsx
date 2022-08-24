import React from "react";
import { Grid } from "@mui/material";


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return(
<section id="contact-me">
  <div className="contact">
    
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      >
      <h2 className="title">Contacto</h2>
    </Grid>

      <div className="App">
        <form id="contact-form"  method="POST" action="https://formsubmit.co/juancarlosj01@hotmail.com">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" name="message" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
  </div>
  </section>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }
}

export default Contact;