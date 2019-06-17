import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import WishListManager from '../../../modules/WishListManager';

export class GearWishListEditForm extends Component {
  state = {
    manufacturer: '',
    model: '',
    category: '',
    subCategory: '',
    forSale: '',
    url: ''
  };

  componentDidMount() {
    WishListManager.getOneUser(this.props.match.params.wishItemId).then(wishItem => {
      this.setState({
        manufacturer: wishItem.manufacturer,
        model: wishItem.model,
        category: wishItem.category,
        subCategory: wishItem.subCategory,
        forSale: wishItem.forSale,
        url: wishItem.url
      });
    });
  }

  handleFieldChange = wishlist => {
    const stateToChange = {};
    stateToChange[wishlist.target.id] = wishlist.target.value;
    this.setState(stateToChange);
  };

  updateWishItem = wishlist => {
    wishlist.preventDefault();
    const editedWishItem = {
      id: this.props.match.params.wishItemId,
      manufacturer: this.state.manufacturer,
      model: this.state.model,
      category: this.state.category,
      subCategory: this.state.subCategory,
      forSale: this.state.forSale,
      url: this.state.url
    };
    console.log('edited wish list', editedWishItem);
    WishListManager.putWishList(editedWishItem).then(() =>
      this.props.history.push('/home')
    );
  };

  render() {
    return (
      <form style={{ display: 'flex', flex: '5' }} onSubmit={this.onSubmit}>
        Manufacturer
        <input
          style={{ flex: '5', padding: '5px' }}
          type="text"
          name="manufacturer"
          id="manufacturer"
          placeholder="Manufacturer"
          value={this.state.manufacturer}
          onChange={this.handleFieldChange}
        />
        Model
        <input
          style={{ flex: '5', padding: '5px' }}
          type="text"
          name="model"
          id="model"
          placeholder="Model"
          value={this.state.model}
          onChange={this.handleFieldChange}
        />
        Category
        <input
          style={{ flex: '5', padding: '5px' }}
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          value={this.state.category}
          onChange={this.handleFieldChange}
        />
        Sub Category
        <input
          style={{ flex: '5', padding: '5px' }}
          type="text"
          name="subCategory"
          id="subCategory"
          placeholder="Sub Category"
          value={this.state.subCategory}
          onChange={this.handleFieldChange}
        />
        For Sale?
        <input
          style={{ flex: '5', padding: '5px' }}
          type="checkbox"
          name="forSale"
          id="forSale"
          value={this.state.forSale}
          onChange={this.handleFieldChange}
        />
        Image URL
        <input
          style={{ flex: '5', padding: '5px' }}
          type="text"
          name="url"
          id="url"
          value={this.state.url}
          onChange={this.handleFieldChange}
        />        
        <button className="button" onClick={this.updateWishItem}>
          Submit
        </button>
      </form>
    )
  }
}

export default withRouter(GearWishListEditForm);
