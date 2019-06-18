import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GearManager from '../../../modules/GearManager';

export class MyGearEditForm extends Component {
  state = {
    manufacturer: '',
    model: '',
    category: '',
    subCategory: '',
    forSale: '',
    url: ''
  };

  componentDidMount() {
    GearManager.getGearById(this.props.match.params.gearItemId).then(
      gearItem => {
        this.setState({
          manufacturer: gearItem.manufacturer,
          model: gearItem.model,
          category: gearItem.category,
          subCategory: gearItem.subCategory,
          forSale: gearItem.forSale,
          url: gearItem.url
        });
      }
    );
  }

  handleFieldChange = gear => {
    const stateToChange = {};
    stateToChange[gear.target.id] = gear.target.value;
    this.setState(stateToChange);
  };

  updateGearItem = gear => {
    gear.preventDefault();
    const editedGearItem = {
      id: this.props.match.params.gearItemId,
      manufacturer: this.state.manufacturer,
      model: this.state.model,
      category: this.state.category,
      subCategory: this.state.subCategory,
      forSale: this.state.forSale,
      url: this.state.url
    };
    console.log('edited gear item', editedGearItem);
    GearManager.putMyGear(editedGearItem).then(() =>
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
        <button className="button" onClick={this.updateGearItem}>
          Submit
        </button>
      </form>
    );
  }
}

export default withRouter(MyGearEditForm);
