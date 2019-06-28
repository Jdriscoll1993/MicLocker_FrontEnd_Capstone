import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GearWishListCard from '../wish-list/GearWishListCard';
import * as userManager from '../../../authentication/userManager';
import { Button } from 'semantic-ui-react';
export class GearWishListList extends Component {
  state = {
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
          <Button>
            <Link to="/new-wishlist">Add Item to Wish List</Link>
          </Button>
        )}
        <section>
          {this.props.wishItems.map(wishItem => {
            return (
              <GearWishListCard
                {...this.props}
                key={wishItem.id}
                wishItem={wishItem}
                delItem={this.props.delItem}
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

export default GearWishListList;
