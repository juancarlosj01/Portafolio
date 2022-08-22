import { Alert, Button, Snackbar } from "@mui/material";

import React from "react";

const Contact = () => {
  return (
 
    <section>

    <div>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>

      <Alert severity="success">This is a success message!</Alert>
    </div>
    </section> 
  );
};

export default Contact;
