/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-duplicates */
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

import axios from 'axios';
import messages from './messages';
import { Wrapper, CardDiv, FormArea, Row } from './style';

export default class index extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    encryptpassword: '',
    mobile: '',
    dob: '',
  };

  valueChanged = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]:
        event.target.name === 'email'
          ? `${event.target.value}@yahoo.com`
          : event.target.value,
    });
  };

  handleChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submit = event => {
    event.preventDefault();
    axios
      .post(`https://atologistinfotech.com/api/register.php?`, null, {
        params: {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          encryptpassword: this.state.encryptpassword,
          mobile: this.state.mobile,
          dob: this.state.dob,
        },
      })
      .then(response => {
        const value = response.data;
        console.log(value);
        if (value.error === 1) alert(value.error_code);
        else alert(value.data);
      })
      .catch(error => {
        console.log(error);
        alert(error.error_code);
      });
  };

  render() {
    return (
      <Wrapper>
        <CardDiv>
          {/* <h2>
            <FormattedMessage {...messages.header} />
          </h2> */}

          <Card>
            <div className="card-container">
              <CardContent>
                <h2>
                  <FormattedMessage {...messages.header} />
                </h2>
                <h4>
                  <FormattedMessage {...messages.subHeader} />
                </h4>
                <FormArea>
                  <form noValidate autoComplete="off" onSubmit={this.submit}>
                    <Row>
                      <Input
                        placeholder="First Name"
                        name="firstname"
                        inputProps={{ 'aria-label': 'description' }}
                        onChange={this.valueChanged}
                      />
                      <Input
                        placeholder="Last Name"
                        name="lastname"
                        onChange={this.valueChanged}
                        inputProps={{ 'aria-label': 'description' }}
                      />
                    </Row>
                    <Row>
                      <Input
                        name="email"
                        placeholder="Email"
                        onChange={this.valueChanged}
                        inputProps={{ 'aria-label': 'description' }}
                        endAdornment={
                          <InputAdornment position="end">
                            @yahoo.com
                          </InputAdornment>
                        }
                      />
                    </Row>
                    <Row>
                      <Input
                        name="encryptpassword"
                        placeholder="Password"
                        onChange={this.valueChanged}
                        inputProps={{ 'aria-label': 'description' }}
                        type="password"
                      />
                    </Row>
                    <Row>
                      <Input
                        name="mobile"
                        placeholder="Mobile"
                        onChange={this.valueChanged}
                        inputProps={{ 'aria-label': 'description' }}
                      />
                    </Row>
                    <Row>
                      <Input
                        name="dob"
                        placeholder="DD/MM/YYYY"
                        onChange={this.valueChanged}
                        inputProps={{ 'aria-label': 'description' }}
                      />
                    </Row>
                    <Row>
                      <h5>
                        <FormattedMessage {...messages.details} />
                      </h5>
                    </Row>
                    <Row>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Continue
                      </Button>
                    </Row>
                  </form>
                </FormArea>
              </CardContent>
            </div>
          </Card>
        </CardDiv>
      </Wrapper>
    );
  }
}
