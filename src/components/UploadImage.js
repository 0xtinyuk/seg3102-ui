import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import classNames from "classnames";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyid: "",
      account_id: localStorage.getItem("account_id"),
      account_type: localStorage.getItem("account_type"),
      session_token: localStorage.getItem("session_token")
    };
  }

  upload() {
    var token = localStorage.getItem("session.token");
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
    const { classes } = this.props;
    return (
      <div>
        <div className="container">
          <h4 className="center">Upload Image</h4>
          <form
            noValidate
            autoComplete="off"
            onSubmit={e => {
              this.submitForm(e);
            }}
          >
            <TextField
              id="propertyid"
              label="Property ID"
              className={classes.textField}
              value={this.state.propertyid}
              onChange={e => this.setState({ password: e.target.value })}
              margin="normal"
            />

            <Button variant="contained" size="small" className={classes.button}>
              Upload
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default UploadImage;
