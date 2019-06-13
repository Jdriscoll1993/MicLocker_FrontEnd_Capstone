import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyGearCard from './MyGearCard';
// import GearManager from '../../../modules/GearManager';
export class MyGearList extends Component {


  render() {
    return (
      <div>
        <button style={{ float: 'right'}}>
          <Link to="/new-gear">+</Link>
        </button>
        <section>
          {this.props.gearItems.map(gearItem => {
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
