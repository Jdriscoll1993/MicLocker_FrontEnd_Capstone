import React, { Component } from 'react'

export class Gravatar extends Component {
  render() {
    let src = 'https://www.gravatar.com/avatar/' + (this.email) + '?s=' + this.size;
    return (
      <figure>
         <img src={src} />
         <figcaption>Joey Driscoll</figcaption>
      </figure>
    )
  }
}

export default Gravatar
