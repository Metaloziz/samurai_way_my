import style from './News.module.css';
import { Component } from 'react';

class News extends Component {
  render() {
    return (<div className={style.header}>
      <h1>News</h1>
    </div>);
  }
}

export default News;