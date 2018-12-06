import React from "react";

class SignOut extends React.Component {
  submitButton = e => {
    e.preventDefault(); //this stops the page from redireting when you hit submit
  };
  render() {
    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className={classes.submit}
          >
            Sign Out
          </Button>
        </div>
      </div>
    );
  }
}

export default Signout;
