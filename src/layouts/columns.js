import React, { Component } from 'react';
import Item from '../components/columnsItem';

export default class Columns extends Component {
  render() {
    return (
      <section className="columns">
        {this.props.data.map((elm,i)=><Item data={elm} key={'item'+i} itemAction={this.props.itemAction}/>)}
      </section>
    );
  }
}
