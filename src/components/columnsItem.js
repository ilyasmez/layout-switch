import React, { Component } from 'react';
import {getType, getImage} from '../utils';

export default class ColumnsItem extends Component {
  render() {
    const type = getType(this.props.data);
    const image = getImage(this.props.data);
    const title = this.props.data.title || '';
    const description = this.props.data.description || '';
    const url = this.props.data.url || '#';
    return (
      <section className={'columnsItem '+type} onClick={this.props.itemAction.bind(this,type,url)}>
        <img className='type' src={`/images/${type}.png`} alt={type}/>
        <img className='image' src={image} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
    );
  }
}
