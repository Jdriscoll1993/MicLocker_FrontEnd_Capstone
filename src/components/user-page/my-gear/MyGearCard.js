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
      border: '1px #ccc dotted',
      marginBottom: '15px'
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
      <div className="gear-div" style={this.getStyle()}>
        <h2 style={{ textAlign: 'center' }}>{model}</h2>
        <h2 style={{ color: 'goldenrod', textAlign: 'center' }}>For Sale:</h2>
        <h2 style={{ textAlign: 'center' }}>{forSale}</h2>
        <img src={url} alt="gear pic" style={{ width: '80%', margin: 60 }} />
        <br />
        <div className="gear-details">
          <h2 style={{ color: 'goldenrod' }}>Manufacturer:</h2>
          <h2>{manufacturer}</h2>
          <h2 style={{ color: 'goldenrod' }}>Category:</h2>
          <h2>{category}</h2>
          <h2 style={{ color: 'goldenrod' }}>Sub-Category:</h2>
          <h2>{subCategory}</h2>
        </div>
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

export default withRouter(MyGearCard);
