import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export class MyGearCard extends Component {
  state = {
    saveDisabled: false
  };

  handleClick = () => {
    this.setState({
      saveDisabled: true
    });
    this.props.deleteGearItem(this.props.gearItem.id);
  };

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      border: '1px #ccc dotted'
    };
  };

  render() {
    const {
      manufacturer,
      model,
      category,
      subCategory,
      forSale,
      url
    } = this.props.gearItem;
    return (
      <div style={this.getStyle()}>
        <h3 style={{ color: 'goldenrod' }}>Manufacturer:</h3>
        <h5>{manufacturer}</h5>
        <h3 style={{ color: 'goldenrod' }}>Model:</h3>
        <h5>{model}</h5>
        <h3 style={{ color: 'goldenrod' }}>Category:</h3>
        <h5>{category}</h5>
        <h3 style={{ color: 'goldenrod' }}>Sub-Category:</h3>
        <h5>{subCategory}</h5>
        <h3 style={{ color: 'goldenrod' }}>For Sale:</h3>
        <h5>{forSale}</h5>
        <h3 style={{ color: 'goldenrod' }}>Image:</h3> 
        <img src={url} alt="gear pic" style={{width:"50%"}}/><br/>
        <button onClick={this.handleClick} disabled={this.state.saveDisabled}>
          Delete
        </button>
        <button
          type="button"
          onClick={() => {
            this.props.history.push(
              `/gearItems/edit/${this.props.gearItem.id}`
            );
          }}
        >
          Edit
        </button>
      </div>
    );
  }
}

export default withRouter (MyGearCard);
