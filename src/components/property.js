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
        <h4 className="center">Fill out form to create Property Listing</h4>


      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-city"
          label="City"
          className={classes.textField}
          value={this.state.city}
          onChange={this.handleChange('city')}
          margin="normal"
        />
        <TextField
          id="standard-province"
          label="Province"
          className={classes.textField}
          value={this.state.province}
          onChange={this.handleChange('province')}
          margin="normal"
        />

        <TextField
          id="standard-addr1"
          label="Address 1"
          className={classes.textField}
          value={this.state.addr1}
          onChange={this.handleChange('addr1')}
          margin="normal"
        />

        <TextField
          id="standard-addr2"
          label="Address 2"
          className={classes.textField}
          value={this.state.addr2}
          onChange={this.handleChange('addr2')}
          margin="normal"
        />

        <TextField
          id="standard-askrent"
          label="Rent Price"
          value={this.state.askrent}
          onChange={this.handleChange('askrent')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
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
