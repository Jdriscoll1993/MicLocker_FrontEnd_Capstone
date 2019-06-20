import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyGearCard from './MyGearCard';
import {  Button } from 'semantic-ui-react';

import * as userManager from '../../../authentication/userManager';
export class MyGearList extends Component {
  componentDidMount = () => {
    let userInfo = userManager.getUserFromLocalStorage();
    this.setState({ user: userInfo });
  };

  render() {
    return (
      <div>
        <Button color='green'>
          <Link to="/new-gear">Add Gear</Link>
        </Button>
        <section>
          {this.props.gearItems.map(gearItem => {
            return (
              <MyGearCard
                {...this.props}
                key={gearItem.id}
                gearItem={gearItem}
                delItem={this.props.delItem}
                user={this.props.user}
                
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default MyGearList;
