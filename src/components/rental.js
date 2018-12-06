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
        <h4 className="center">Rental Agreement</h4>

      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-customerid"
          label="Customer"
          className={classes.textField}
          value={this.state.customerid}
          onChange={this.handleChange('customerid')}
          margin="normal"
        />
        <TextField
          id="standard-propertyid"
          label="Property ID"
          className={classes.textField}
          value={this.state.propertyid}
          onChange={this.handleChange('propertyid')}
          margin="normal"
        />

        <TextField
          id="standard-rent"
          label="Rent"
          value={this.state.rent}
          onChange={this.handleChange('rent')}
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
