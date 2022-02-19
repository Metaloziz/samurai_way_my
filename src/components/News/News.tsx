import style from './News.module.css';
import { Component } from 'react';

export class News extends Component {
  render() {
    return (<div className={style.header}>
      <h1>News</h1>
    </div>);
  }
}