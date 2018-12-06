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
      dob: "",
      email: "",
      account_id: localStorage.getItem("account_id"),
      account_type: localStorage.getItem("account_type"),
      session_token: localStorage.getItem("session_token")
    };
  }

  profilecreate(first_name, last_name, username, password, dob, email) {
    var token = localStorage.getItem("session.token");
    return fetch("/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
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
        this.setState({
          account_id: responseJson.account_id,
          account_type: responseJson.account_type,
          session_token: responseJson.session_token
        });
        localStorage.setItem("account_id", responseJson.account_id);
        localStorage.setItem("account_type", responseJson.account_type);
        localStorage.setItem("session_token", responseJson.session_token);
      })
      .catch(function(err) {
        alert("ERROR IN LOGIN");
        console.log("ERROR IN REQUEST", err);
      });
  }

  state = {
    name: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="container">
          <h4 className="center">Fill out form to create Customer Account</h4>
          <form
            className={classes.container}
            onSubmit={e => {
              this.submitForm(e);
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              
              id="standard-name"
              label="Name"
              className={classes.textField}
              value={this.state.first_name}
              onChange={this.handleChange("first_name")}
              margin="normal"
            />
            <TextField
              
              id="standard-lastname"
              label="Last Name"
              className={classes.textField}
              value={this.state.lastname}
              onChange={this.handleChange("last_name")}
              margin="normal"
            />

            <TextField
              
              id="standard-username"
              label="Username"
              className={classes.textField}
              value={this.state.username}
              margin="normal"
            />
            <TextField
              
              id="standard-password"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />

            <TextField
              
              id="email"
              label="Email"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange("email")}
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
              onChange={this.handleChange("dob")}
            />

            <Button variant="contained" size="small" className={classes.button}>
              <SaveIcon
                className={classNames(classes.leftIcon, classes.iconSmall)}
              />
              Save
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
