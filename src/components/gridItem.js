import React, { Component } from 'react';
import {getType, getImage} from '../utils';

export default class GridItem extends Component {
  render() {
    const type = getType(this.props.data);
    const image = getImage(this.props.data);
    const title = this.props.data.title || '';
    const description = this.props.data.description || '';
    const url = this.props.data.url || '#';
    let action = 'Read More';
    if(type==='video') action = 'Watch the Video';
    if(type==='tweet') action = 'See the Tweet';
    return (
      <article className={'gridItem '+type} >
        <img className='image' src={image} alt={title}/>
        <img className='type' src={`/images/${type}.png`} alt={type}/>
        <h2 className='title'><span>{title}</span></h2>
        <p className='description'>{description}</p>
        <button className='actionBtn' onClick={this.props.itemAction.bind(this,type,url)} >{action}</button>
      </article>
    );
  }
}
