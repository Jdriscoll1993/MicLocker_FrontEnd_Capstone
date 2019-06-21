import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';

export class MyGearCard extends Component {
  state = {
    saveDisabled: false
  };

  handleClick = () => {
    this.setState({
      saveDisabled: true
    });
    this.props.deleteGearItem(
      this.props.gearItem.id,
      this.props.gearItem.userId
    );
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
      <Card.Group>
        <Card style={{ display: 'flex', justifyContent: 'space-between', flexWrap:'nowrap'  }}>
          <Card.Content>
            <Card.Header style={{ textAlign: 'center' }}>{model}</Card.Header>
            <Card.Description>
              <Image src={url} alt="gear pic" />
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
          <Button
            color="red"
            onClick={this.handleClick}
            disabled={this.state.saveDisabled}
          >
            Delete
          </Button>
          <Button
            color="yellow"
            type="button"
            onClick={() => {
              this.props.history.push(
                `/gearItems/edit/${this.props.gearItem.id}`
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

export default withRouter(MyGearCard);
