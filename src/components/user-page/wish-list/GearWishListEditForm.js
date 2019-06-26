import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import WishListManager from '../../../modules/WishListManager';
import { Button, Form, Segment, Input } from 'semantic-ui-react';
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
    WishListManager.getWishById(this.props.match.params.wishItemId).then(
      wishItem => {
        this.setState({
          manufacturer: wishItem.manufacturer,
          model: wishItem.model,
          category: wishItem.category,
          subCategory: wishItem.subCategory,
          forSale: wishItem.forSale,
          url: wishItem.url
        });
      }
    );
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
      <Segment>
        <label
          style={{
            textAlign: 'center',
            fontSize: '36px',
            marginBottom: '45px',
            marginTop: '90px'
          }}
        >
          Edit this Wish List Item
        </label>
        <Form  onSubmit={this.onSubmit}>
          Manufacturer
          <Input
            
            type="text"
            name="manufacturer"
            id="manufacturer"
            placeholder="Manufacturer"
            value={this.state.manufacturer}
            onChange={this.handleFieldChange}
          />
          Model
          <Input
            
            type="text"
            name="model"
            id="model"
            placeholder="Model"
            value={this.state.model}
            onChange={this.handleFieldChange}
          />
          Category
          <Input
            
            type="text"
            name="category"
            id="category"
            placeholder="Category"
            value={this.state.category}
            onChange={this.handleFieldChange}
          />
          Sub Category
          <Input
            
            type="text"
            name="subCategory"
            id="subCategory"
            placeholder="Sub Category"
            value={this.state.subCategory}
            onChange={this.handleFieldChange}
          />
          {/* For Sale?
          <Input
            
            type="checkbox"
            name="forSale"
            id="forSale"
            value={this.state.forSale}
            onChange={this.handleFieldChange}
          /> */}
          Image URL
          <Input
            
            type="text"
            name="url"
            id="url"
            value={this.state.url}
            onChange={this.handleFieldChange}
          />
          <Button className="button" onClick={this.updateWishItem}>
            Submit
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default withRouter(GearWishListEditForm);
