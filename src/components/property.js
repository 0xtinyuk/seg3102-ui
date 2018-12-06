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


class TextFields extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      city: "",
      province: "",
      addr1: "",
      addr2: "",
      rent: "",
      account_id: localStorage.getItem("account_id"),
      account_type: localStorage.getItem("account_type"),
      session_token: localStorage.getItem("session_token")
    };
  }


   propertycreate(city, province, addr1, addr2, rent) {
    var token = localStorage.getItem("session_token");
    return fetch("/owner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-TOKEN": token
      },
      body: JSON.stringify({
        city,
        province,
        addr1,
        addr2,
        rent,
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
    this.propertycreate(
      this.state.city,
      this.state.province,
      this.state.addr1,
      this.state.addr2,
      this.state.rent,
    );
  };


  render() {
    const { classes } = this.props;

    return (

    <div>
      <div className="container">
        <h4 className="center">Fill out form to create Property Listing</h4>


      <form 
            onSubmit={e => {
              this.submitForm(e);
                        }}
            autoComplete="off"
      >
        <TextField
          id="standard-city"
          label="City"
          className={classes.textField}
          //value={this.state.city}
          onChange={e => this.setState({ city: e.target.value })}
          margin="normal"
        />
        <TextField
          id="standard-province"
          label="Province"
          className={classes.textField}
          //value={this.state.province}
          onChange={e => this.setState({ pronvince: e.target.value })}
          margin="normal"
        />

        <TextField
          id="standard-addr1"
          label="Address 1"
          className={classes.textField}
          //value={this.state.addr1}
          onChange={e => this.setState({ addr1: e.target.value })}
          margin="normal"
        />

        <TextField
          id="standard-addr2"
          label="Address 2"
          className={classes.textField}
          //value={this.state.addr2}
          onChange={e => this.setState({ addr2: e.target.value })}
          margin="normal"
        />

        <TextField
          id="standard-askrent"
          label="Rent Price"
          //value={this.state.askrent}
          onChange={e => this.setState({ rent: e.target.value })}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />

      <Button variant="contained" size="small" className={classes.button} type= 'submit'>
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
