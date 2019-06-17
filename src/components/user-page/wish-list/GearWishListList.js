import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GearWishListCard from '../wish-list/GearWishListCard';
// import WishListManager from '../../../modules/WishListManager';
import * as userManager from '../../../authentication/userManager';
export class GearWishListList extends Component {
  componentDidMount = () => {
    let userInfo = userManager.getUserFromLocalStorage();
    this.setState({ user: userInfo });
  };

  render() {
    return (
      <div>
        <button style={{ float: 'right' }}>
          <Link to="/new-wishlist">+</Link>
        </button>
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
