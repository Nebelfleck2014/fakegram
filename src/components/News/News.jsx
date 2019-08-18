import React from 'react';
import s from './News.module.css';
import OneNews from './OneNews/OneNews.jsx';


const News = (props) => {
  debugger;
  let newsElements = props.state.newsData.map(news => <OneNews news = {news.news} />)
  return (
    <div>
      {newsElements}
    </div>
  )
}


export default News;
