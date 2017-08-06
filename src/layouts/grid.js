import React, { Component } from 'react';
import Item from '../components/gridItem';

export default class Grid extends Component {
  render() {
    return (
      <section className="grid">
        {this.props.data.map((elm,i)=><Item data={elm} key={'item'+i} itemAction={this.props.itemAction}/>)}
      </section>
    );
  }
}
