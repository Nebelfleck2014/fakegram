import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
  {id:1, message:'Hey, whatsup?'},
  {id:1, message:'Hey, dude?'}
]

let dialogData = [
  {id: 1, name: 'Melissa'},
  {id: 2, name: 'Mike'},
  {id: 3, name: 'Audrey'},
  {id: 4, name: 'Anna'},
  {id: 5, name: 'John'},
  {id: 6, name: 'Cub'}
]

let messageData = [
  {id: 1, message: 'Hey'},
  {id: 2, message: 'Hi'},
  {id: 3, message: 'Privet'}
]

let newsData = [
  {id:1, news: 'Oh i, i just died in your arms tonight'},
  {id:1, news: 'Somewhere only we know'},
  {id:1, news: 'Stranger things'}
]

ReactDOM.render(<App postsData={postsData} dialogData={dialogData} messageData={messageData} newsData={newsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
