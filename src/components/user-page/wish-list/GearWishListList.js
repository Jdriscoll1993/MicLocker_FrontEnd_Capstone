import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GearWishListCard from '../wish-list/GearWishListCard';
import * as userManager from '../../../authentication/userManager';
import {  Button } from 'semantic-ui-react';
export class GearWishListList extends Component {
  componentDidMount = () => {
    let userInfo = userManager.getUserFromLocalStorage();
    this.setState({ user: userInfo });
  };

  render() {
    return (
      <div>
        <Button color='green'>
          <Link to="/new-wishlist">Add Item to Wish List</Link>
        </Button>
        <section>
          {this.props.wishItems.map(wishItem => {
            return (
              <GearWishListCard
                {...this.props}
                key={wishItem.id}
                wishItem={wishItem}
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

export default GearWishListList;
