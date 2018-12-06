import React from "react";
import Button from "@material-ui/core/Button";

class SignOut extends React.Component {
  logout() {
    var token = localStorage.getItem("session_token");
    localStorage.setItem("account_id", "");
    localStorage.setItem("account_type", "");
    localStorage.setItem("session_token", "");
    return fetch("/logout", {
      method: "PUT",
      headers: {
        "X-TOKEN": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({})
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw `${response.status}, ${response.statusText}`;
        }
      })
      .then(responseJson => {
        setTimeout(() => {
          this.props.history.push("/SignIn");
        }, 2000);
      })
      .catch(function(err) {
        alert("You have logged out");
      });
  }
  submitButton = e => {
    e.preventDefault(); //this stops the page from redireting when you hit submit
    this.logout();
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
            onClick={e => {
              this.submitButton(e);
            }}
            //className={classes.submit}
          >
            Sign Out
          </Button>
        </div>
      </div>
    );
  }
}

export default SignOut;
