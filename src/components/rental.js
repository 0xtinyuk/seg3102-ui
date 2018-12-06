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
      customer: "",
      property: "",
      amount: "",
      start: "2017-05-24",
      end: "2017-05-24",
      account_id: localStorage.getItem("account_id"),
      account_type: localStorage.getItem("account_type"),
      session_token: localStorage.getItem("session_token")
    };
  }


   rentalcreate(city, province, addr1, addr2, rent) {
    var token = localStorage.getItem("session_token");
    return fetch("/rental", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-TOKEN": token
      },
      body: JSON.stringify({
        customer,
        property,
        amount,
        start,
        end,
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
    this.rentalcreate(
      this.state.customer,
      this.state.property,
      this.state.amount,
      this.state.start,
      this.state.end,
    );
  };

  render() {
    const { classes } = this.props;

    return (


    <div>
      <div className="container">
        <h4 className="center">Rental Agreement</h4>

      <form 
            onSubmit={e => {
              this.submitForm(e);
                        }}
            autoComplete="off"
      >
        <TextField
          id="standard-customerid"
          label="Customer"
          className={classes.textField}
          value={this.state.customer}
          onChange={e => this.setState({ customer: e.target.value })}
          margin="normal"
        />
        <TextField
          id="standard-propertyid"
          label="Property ID"
          className={classes.textField}
          value={this.state.property}
          onChange={e => this.setState({ property: e.target.value })}
          margin="normal"
        />

        <TextField
          id="standard-rent"
          label="Rent"
          value={this.state.rent}
          onChange={e => this.setState({ rent: e.target.value })}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />

        <TextField
          id="startdate"
          label="Rent Start Date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
          shrink: true,
                  }}
          onChange={e => this.setState({ start: e.target.value })}
      />

        <TextField
          id="enddate"
          label="Rent End date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
          shrink: true,
                  }}
          onChange={e => this.setState({ end: e.target.value })}
      />

            <Button
              variant="contained"
              size="small"
              className={classes.submit}
              type="submit"
            >
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
