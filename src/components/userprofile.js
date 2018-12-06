import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class TextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      dob: "2017-05-24",
      email: "",
      account_id: localStorage.getItem("account_id"),
      account_type: localStorage.getItem("account_type"),
      session_token: localStorage.getItem("session_token")
    };
  }

  profilecreate(first_name, last_name, username, password, dob, email) {
    var token = localStorage.getItem("session_token");
    return fetch("/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-TOKEN": token
      },
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        password,
        dob,
        email
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw `${response.status}, ${response.statusText}`;
        }
      })
      .then(responseJson => {
        alert("Success");
      })
      .catch(function(err) {
        alert("ERROR");
        console.log("ERROR IN REQUEST", err);
      });
  }

  submitForm = e => {
    e.preventDefault(); //this stops the page from redireting when you hit submit
    this.profilecreate(
      this.state.first_name,
      this.state.last_name,
      this.state.username,
      this.state.password,
      this.state.dob,
      this.state.email
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="container">
          <h4 className="center">Fill out form to create Customer Account</h4>
          <form
            onSubmit={e => {
              this.submitForm(e);
            }}
            autoComplete="off"
          >
            <TextField
              id="standard-name"
              label="First Name"
              className={classes.textField}
              //value={this.state.first_name}
              onChange={e => this.setState({ first_name: e.target.value })}
              margin="normal"
            />
            <TextField
              id="standard-lastname"
              label="Last Name"
              className={classes.textField}
              //value={this.state.last_name}
              onChange={e => this.setState({ last_name: e.target.value })}
              margin="normal"
            />

            <TextField
              id="standard-username"
              label="Username"
              className={classes.textField}
              //value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
              margin="normal"
            />
            <TextField
              id="standard-password"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              onChange={e => this.setState({ password: e.target.value })}
            />

            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              //value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              margin="normal"
            />

            <TextField
              id="birthdate"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
              onChange={e => this.setState({ dob: e.target.value })}
            />

            <Button
              variant="contained"
              size="small"
              className={classes.submit}
              type="submit"
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
