import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyid: "",
      selectedFile: null,
      account_id: localStorage.getItem("account_id"),
      account_type: localStorage.getItem("account_type"),
      session_token: localStorage.getItem("session_token")
    };
  }

  upload(propertyid, selectedFile) {
    var token = localStorage.getItem("session_token");
    return fetch(`/property/${propertyid}/image`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-TOKEN": token
      },
      body: JSON.stringify({
        image: selectedFile
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
    this.upload(this.state.propertyid, this.state.selectedFile);
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className="container">
          <h4 className="center">Upload Image</h4>
          <form
            onSubmit={e => {
              this.submitForm(e);
            }}
          >
            <input
              type="file"
              onChange={e => this.setState({ selectedFile: e.target.value })}
            />
            <TextField
              id="propertyid"
              label="PropertyID"
              className={this.props.TextField}
              onChange={e => this.setState({ propertyid: e.target.value })}
              margin="normal"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.props.submit}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

UploadImage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default UploadImage;
