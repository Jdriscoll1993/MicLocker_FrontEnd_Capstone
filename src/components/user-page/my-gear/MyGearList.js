import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyGearCard from './MyGearCard';
import GearManager from '../../../modules/GearManager';
export class MyGearList extends Component {
  state = {
    gearItems: []
  };

  componentDidMount = () => {
    GearManager.getAll('gearItems').then(gearItems =>
      this.setState({ gearItems })
    );
  };

  render() {
    return (
      <div>
        <button style={{ float: 'right'}}>
          <Link to="/new-gear">+</Link>
        </button>
        <section>
          {this.state.gearItems.map(gearItem => {
            return (
              <MyGearCard
                {...this.props}
                key={gearItem.id}
                gearItem={gearItem}
                delItem={this.props.delItem}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default MyGearList;
