import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GearManager from '../../../modules/GearManager';
import * as userManager from '../../../authentication/userManager'
import { Button, Form, Segment, Input } from 'semantic-ui-react';
export class AddGear extends Component {
  state = {
    manufacturer: '',
    model: '',
    category: '',
    subCategory: '',
    forSale: '',
    url: '',
    userId: ''
  };

  componentDidMount = () => {
    let userInfo = userManager.getUserFromLocalStorage();
    this.setState({ userId: userInfo.id });
  };

  handleFieldChange = gear => {
    const stateToChange = {};
    stateToChange[gear.target.id] = gear.target.value;
    this.setState(stateToChange);
  };

  saveNewGearItem = gear => {
    gear.preventDefault();

    const gearItem = {
      manufacturer: this.state.manufacturer,
      model: this.state.model,
      category: this.state.category,
      subCategory: this.state.subCategory,
      forSale: this.state.forSale,
      url: this.state.url
    };

    GearManager.postGearItem(gearItem).then(() =>
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
                
                Add New Gear Item
              </label>
      <Form style={{
              width: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '90px'
            }} onSubmit={this.onSubmit}>
        Manufacturer
        <Input
          
          type="text"
          name="manufacturer"
          id="manufacturer"
          placeholder="Manufacturer"
          value={this.state.manufacturer}
          onChange={this.handleFieldChange}
        /><br/>
        Model
        <Input
          
          type="text"
          name="model"
          id="model"
          placeholder="Model"
          value={this.state.model}
          onChange={this.handleFieldChange}
        /><br/>
        Category
        <Input
          
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          value={this.state.category}
          onChange={this.handleFieldChange}
        /><br/>
        Sub Category
        <Input
          
          type="text"
          name="subCategory"
          id="subCategory"
          placeholder="Sub Category"
          value={this.state.subCategory}
          onChange={this.handleFieldChange}
        /><br/>
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
        /><br/>
        <Button className="button" onClick={this.saveNewGearItem}>
          Submit
        </Button>
      </Form>
      </Segment>
    );
  }
}

export default withRouter(AddGear);
