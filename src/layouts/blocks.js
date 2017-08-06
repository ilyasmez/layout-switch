import React, { Component } from 'react';
import Item from '../components/blockItem';
import {getType, getImage} from '../utils';

export default class Blocks extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedArticle: {},
      selectedVideo: {},
      selectedTweet: {}
    }
  }
  componentWillMount(){
    this.setState({
      selectedArticle: this.props.data.filter(elm=>getType(elm)==='article')[0],
      selectedVideo: this.props.data.filter(elm=>getType(elm)==='video')[0],
      selectedTweet: this.props.data.filter(elm=>getType(elm)==='tweet')[0]
    });
  }
  itemClicked(type, item){
    if(type==='article')
      this.setState({selectedArticle: item});
    else if(type==='video')
      this.setState({selectedVideo: item});
    else if(type==='tweet')
      this.setState({selectedTweet: item});
  }
  render() {
    let articles = this.props.data.filter(elm=>getType(elm)==='article').slice(0,4);
    let videos = this.props.data.filter(elm=>getType(elm)==='video').slice(0,4);
    let tweets = this.props.data.filter(elm=>getType(elm)==='tweet').slice(0,4);
    return (
      <section className='blocks'>
        <section className='block articles'>
          <section className='preview'>
            <img src={getImage(this.state.selectedArticle)} alt={this.state.selectedArticle.title}/>
            <h3>{this.state.selectedArticle.title}</h3>
            <p>{this.state.selectedArticle.description}</p>
          </section>
          <section className='items'>
            {articles.map(elm=><Item key={'article'+elm.id} data={elm} itemClicked={this.itemClicked.bind(this)}/>)}
          </section>
        </section>
        <section className='block videos'>
          <section className='preview'>
            <iframe src={'https://www.youtube.com/embed/'+this.state.selectedVideo.url.split('?v=')[1]} title='videoPreview'></iframe>
            <h3>{this.state.selectedVideo.title}</h3>
            <p>{this.state.selectedVideo.description}</p>
          </section>
          <section className='items'>
            {videos.map(elm=><Item key={'video'+elm.id} data={elm} itemClicked={this.itemClicked.bind(this)}/>)}
          </section>
        </section>
        <section className='block tweets'>
          <section className='preview'>
            <img src={getImage(this.state.selectedTweet)} alt={this.state.selectedTweet.title}/>
            <h3>{this.state.selectedTweet.title}</h3>
            <p>{this.state.selectedTweet.description}</p>
          </section>
          <section className='items'>
            {tweets.map(elm=><Item key={'tweet'+elm.id} data={elm} itemClicked={this.itemClicked.bind(this)}/>)}
          </section>
        </section>
      </section>
    );
  }
}
