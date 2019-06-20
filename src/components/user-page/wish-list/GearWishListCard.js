import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';

export class GearWishListCard extends Component {
  state = {
    saveDisabled: false
  };

  handleClick = () => {
    this.setState({
      saveDisabled: true
    });
    this.props.deleteWishList(this.props.wishItem.id);
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
    } = this.props.wishItem;
    return (
      <Card.Group>
        <Card style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card.Content>
        <Card.Header style={{ textAlign: 'center' }}>{model}</Card.Header>
        <Card.Description>
        <Image src={url} alt="gear pic"/>
        <br />
        <div className="gear-details">
          <h2>Manufacturer:</h2>
          <h2>{manufacturer}</h2>
          <h2>Category:</h2>
          <h2>{category}</h2>
          <h2>Sub-Category:</h2>
          <h2>{subCategory}</h2>
        </div>
        </Card.Description>
        </Card.Content>
        <Button color='red' onClick={this.handleClick} disabled={this.state.saveDisabled}>
          Delete
        </Button>
        <Button color='yellow'
          type="button"
          onClick={() => {
            this.props.history.push(
              `/wishItems/edit/${this.props.wishItem.id}`
            );
          }}
        >
          Edit
        </Button>
      </Card>
      </Card.Group>
    );
  }
}

export default withRouter(GearWishListCard);
