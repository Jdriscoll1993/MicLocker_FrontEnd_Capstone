import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyGearCard from './MyGearCard';
import { Button } from 'semantic-ui-react';

import * as userManager from '../../../authentication/userManager';
export class MyGearList extends Component {
  state = {
    user: {},
    loggedInUser: false
  };
  componentDidMount = () => {
    let userInfo = userManager.getUserFromLocalStorage();
    this.checkedForLoggedInUser();
    this.setState({ user: userInfo });
  };

  checkedForLoggedInUser = () => {
    if (this.props.location.pathname.endsWith('home')) {
      this.setState({ loggedInUser: true });
    }
  };
  render() {
    return (
      <div>
        {this.state.loggedInUser && (
          <Button  color="white">
            <Link to="/new-gear">Add Gear</Link>
          </Button>
        )}
        <section>
          {this.props.gearItems.map(gearItem => {
            return (
              <MyGearCard
                {...this.props}
                key={gearItem.id}
                gearItem={gearItem}
                deleteGearItem={this.props.deleteGearItem}
                user={this.props.user}
                loggedInUser={this.state.loggedInUser}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default MyGearList;
