import React, { Component } from 'react';
import { Grid, Message, Container, Header } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import HomeHeader from '../layout/HomeHeader';
import HomeFooter from '../layout/HomeFooter';
import NavBar from '../layout/NavBar'


export default class Home extends Component {


  render() {
    return (
      <>
        <Router>
          <HomeHeader />
          <NavBar/>
          <Container className="home--container">
            <Grid>

              <Grid.Row centered>
                <Grid.Column
                  largeScreen={8}
                  computer={10}
                  tablet={12}
                  mobile={16}
                >
                  <Header textAlign="center">
                    Hi, {this.props.user.username}! Welcome To Mic Locker!
                  </Header>
                  <Message
                    icon="lock"
                    header="Protected Content"
                    content="This component should only be visible if a user is logged in"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
          <HomeFooter />
        </Router>
      </>
    );
  }
}
