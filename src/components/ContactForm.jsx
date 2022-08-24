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

      <div className="App" id="contact-form">
        <form  action="https://formsubmit.co/cc2e3d4b9a3e6aa7c6dd83eaac6bbe6a"   method="POST">
          <div className="form-group">
           
            <input type="text" className="form-control" name="name" />
          </div>
          <div className="form-group">
           
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="form-group">
           
            <textarea className="form-control" rows="5" name="message" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
  </div>
  </section>
    );
  }
}

export default Contact;