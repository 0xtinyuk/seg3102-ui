import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});



 profilecreate(name, lastname, username, password, email, birthdate) {
    var token = localStorage.getItem("session.token");
    return fetch("/customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        standard-name, standard-lastname, standard-username, standard-password, email, birthdate
        
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


class TextFields extends React.Component {
  state = {
    name: '',

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (

    <div>
      <div className="container">
        <h4 className="center">Fill out form to create Customer Account</h4>

        onSubmit={e => {
        this.submitForm(e);

         <form className={classes.container} noValidate autoComplete="off">
        <TextField
        onChange={e => this.setState({ first_name: e.target.value })}
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
        onChange={e => this.setState({ last_name: e.target.value })}
          id="standard-lastname"
          label="Last Name"
          className={classes.textField}
          value={this.state.lastname}
          onChange={this.handleChange('lastname')}
          margin="normal"
        />

        <TextField
        onChange={e => this.setState({ username: e.target.value })}
          id="standard-username"
          label="Username"
          className={classes.textField}
          value={this.state.username}
          onChange={this.handleChange('username')}
          margin="normal"
        />
        <TextField
        onChange={e => this.setState({ password: e.target.value })}
          id="standard-password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />


        <TextField
        onChange={e => this.setState({ email: e.target.value })}
          id="email"
          label="Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <TextField
        onChange={e => this.setState({ dob: e.target.value })}
          id="birthdate"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
          shrink: true,
        }}
      />

      <Button variant="contained" size="small" className={classes.button}>
        <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
        Save
      </Button>
      </form>

      </div>
    </div>


     
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
