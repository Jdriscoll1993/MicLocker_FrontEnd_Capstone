import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GearWishListCard from '../wish-list/GearWishListCard';
import WishListManager from '../../../modules/WishListManager';
export class GearWishListList extends Component {
  state = {
    wishItems: []
  };

  componentDidMount = () => {
    WishListManager.getAll('wishItems').then(wishItems =>
      this.setState({ wishItems })
    );
  };

  render() {
    return (
      <div>
        <button style={{ float: 'right'}}>
          <Link to="/new-wishlist">+</Link>
        </button>
        <section>
          {this.state.wishItems.map(wishItem => {
            return (
              <GearWishListCard
                {...this.props}
                key={wishItem.id}
                wishItem={wishItem}
                delItem={this.props.delItem}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default GearWishListList;

// {this.state.gearItems.map(gearItem => {
//   return (
//     <MyGearCard
//       {...this.props}
//       key={gearItem.id}
//       gearItem={gearItem}
//       delItem={this.props.delItem}
//     />
//   );
// })}
