import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyGearCard from './MyGearCard';
// import GearManager from '../../../modules/GearManager';
import * as userManager from '../../../authentication/userManager';
export class MyGearList extends Component {
  componentDidMount = () => {
    let userInfo = userManager.getUserFromLocalStorage();
    this.setState({ user: userInfo });
  };

  render() {
    return (
      <div>
        <button style={{ float: 'right' }}>
          <Link to="/new-gear">+</Link>
        </button>
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
