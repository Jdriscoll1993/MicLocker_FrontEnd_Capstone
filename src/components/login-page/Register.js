import React, { Component } from 'react';
import {
  Form,
  Button,
  Container,
  Grid,
  Message,
  Segment,
  Header
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { register } from '../../authentication/userManager';

import * as firebase from 'firebase/app';
import 'firebase/storage';

export default class Register extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    image: '',
    status:'',
    buying:'',
    selling:''
  };

  submit = () => {
    const storageRef=firebase.storage().ref('profiles')
    const ref = storageRef.child(`${Date.now()}`);

    ref.put(this.state.photo)
     .then(data => data.ref.getDownloadURL())
     .then(url => {
       this.setState({image: url})
    register(this.state).then(newUser => {
      this.props.onRegister(newUser)
      this.props.history.push('/');
      
    });
  })}

  render() {
    return (
      <Container className="auth--container">
        <Grid>
          <Grid.Row centered>
            <Grid.Column largeScreen={6} computer={6} tablet={10} mobile={16}>
              <Segment>
                <Header as="h1" textAlign="center">
                  Register
                </Header>
                <Form className="register--form" onSubmit={this.submit}>
                  <Form.Field
                    control="input"
                    type="text"
                    label="Username"
                    placeholder="Enter a username"
                    onChange={e => this.setState({ username: e.target.value })}
                  />
                  <Form.Field
                    control="input"
                    type="email"
                    label="Email Address"
                    placeholder="Enter an email"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <Form.Field
                    control="input"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <Form.Field control="input" type="hidden" />
                  <Form.Field
                  control="input"
                  type="file"
                  label="Photo"
                  onChange={(e) => this.setState({ photo: e.target.files[0] })} />
                  <Button fluid content="Register" color="green" />
                </Form>
                <Message className="auth--message">
                  Already registered? <Link to="/login">Log In</Link>
                </Message>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
