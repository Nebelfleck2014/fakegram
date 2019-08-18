let rerenderEntireTree = () => {
  console.log('state changed');
}

let state = {

  profilePage: {
    postsData: [
    {id:1, message:'Hey, whatsup?'},
    {id:1, message:'Hey, dude?'}
  ],
    newPostText: ''
},

  messagesPage: {
    dialogData: [
      {id: 1, name: 'Melissa'},
      {id: 2, name: 'Mike'},
      {id: 3, name: 'Audrey'},
      {id: 4, name: 'Anna'},
      {id: 5, name: 'John'},
      {id: 6, name: 'Cub'}
    ],
    messageData: [
      {id: 1, message: 'Hey'},
      {id: 2, message: 'Hi'},
      {id: 3, message: 'Privet'}
    ],
  },

  newsPage: {
    newsData: [
      {id:1, news: 'Oh i, i just died in your arms tonight'},
      {id:1, news: 'Somewhere only we know'},
      {id:1, news: 'Stranger things'}
    ],
  }
}

export let addPost =() => {
  let newPost = {
    id:5,
    message: state.profilePage.newPostText,
  }

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
  }

export default state;
