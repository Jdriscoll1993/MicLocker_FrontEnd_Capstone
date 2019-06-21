import React, { Component } from 'react';
import Background from '../../img/mic2.jpg';
import {
  Form,
  Button,
  Container,
  Grid,
  Segment,
  Header,
  Message
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { login } from '../../authentication/userManager';

var sectionStyle = {
  height:'1200px',
  marginTop: '-35px ',
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden'
};

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  submit = () => {
    login(this.state.email, this.state.password).then(user => {
      this.props.onLogin(user);
      this.props.history.push('/home');
    });
  };

  render() {
    return (
      <>
        <section style={sectionStyle}>
          <Grid>
            <Grid.Row >
              <Container
                style={{
                  width: 800,
                  marginTop: 300,
                }}
              >
                <Grid>
                  <Grid.Row centered>
                    <Grid.Column
                      largeScreen={12}
                      computer={12}
                      tablet={10}
                      mobile={10}
                    >
                      <Segment>
                        <Header as="h1" textAlign="center">
                          Log In
                        </Header>
                        <Form className="login--form" onSubmit={this.submit}>
                          <Form.Field
                            control="input"
                            type="email"
                            label="Email Address"
                            placeholder="Enter an email"
                            onChange={e =>
                              this.setState({ email: e.target.value })
                            }
                          />
                          <Form.Field
                            control="input"
                            type="password"
                            label="Password"
                            placeholder="Password"
                            onChange={e =>
                              this.setState({ password: e.target.value })
                            }
                          />
                          <Form.Field control="input" type="hidden" />
                          <Button fluid content="Log in" color="green" />
                        </Form>
                        <Message className="auth--message">
                          Not registered yet?{' '}
                          <Link to="/register">Sign Up</Link>
                        </Message>
                      </Segment>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Grid.Row>
          </Grid>
        </section>
      </>
    );
  }
}
