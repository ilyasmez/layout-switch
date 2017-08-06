import React, { Component } from 'react';
import {GridLayout, ColumnsLayout, BlocksLayout} from './layouts';
import {shuffle} from './utils';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      news: [],
      layout: 'grid'
    };
  }
  componentWillMount(){
    fetch('/data/news.json')
    .then(res=>res.json())
    .then(json=>{
      this.setState({
        news: json.articles.sort((a,b)=>(a.publishedAt<b.publishedAt)?1:-1)
      });
    })
  }
  itemAction(type,url){
    if(type==='video')
      this.showVideo(url);
    else
      window.open(url,'_blank');
  }
  showVideo(url){
    url = 'https://www.youtube.com/embed/'+url.split('?v=')[1];
    url += '?autoplay=1&enablejsapi=1';
    this.refs.videoPlayer.src = url;
    this.refs.lightbox.style.display = 'block';
  }
  closeLightbox(){
    this.refs.lightbox.style.display = 'none';
    this.refs.videoPlayer.src = '';
  }
  switchLayout(layout){
    this.setState({
      layout: layout
    });
  }
  render() {
    let content = null;
    if(this.state.layout === 'columns')
      content = <ColumnsLayout data={shuffle(this.state.news)} itemAction={this.itemAction.bind(this)}/>;
    else if(this.state.layout === 'blocks')
      content = <BlocksLayout data={this.state.news} itemAction={this.itemAction.bind(this)}/>;
    else
      content = <GridLayout data={shuffle(this.state.news)} itemAction={this.itemAction.bind(this)}/>;

    return (
      <main className="app">
        <header>
          <section className='btns'>
            <button className={'gridBtn'+((this.state.layout==='grid')?' active':'')} onClick={this.switchLayout.bind(this, 'grid')}></button>
            <button className={'columnsBtn'+((this.state.layout==='columns')?' active':'')} onClick={this.switchLayout.bind(this, 'columns')}></button>
            <button className={'blocksBtn'+((this.state.layout==='blocks')?' active':'')} onClick={this.switchLayout.bind(this, 'blocks')}></button>
          </section>
        </header>
        {content}
        <section ref='lightbox' className='lightbox'>
          <section className='container'>
            <button className='close' onClick={this.closeLightbox.bind(this)}>✕</button>
            <iframe ref='videoPlayer' title='videoPlayer' className='videoPlayer' src=''></iframe>
          </section>
        </section>
      </main>
    );
  }

}
