import React, { Component } from 'react';
import {getType, getImage} from '../utils';

export default class BlockItem extends Component {
  render() {
    const type = getType(this.props.data);
    const image = getImage(this.props.data);
    let title = this.props.data.title || '';
    if(title.length>40)
      title = title.substr(0,37)+'...';
    return (
      <figure className='blockItem' onClick={()=>this.props.itemClicked(type, this.props.data)}>
        <img src={image} alt={title}/>
        <figurecaption>{title}</figurecaption>
      </figure>
    );
  }
}
