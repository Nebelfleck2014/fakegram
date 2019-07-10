import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + '' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
)
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

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

let dialogElement = dialogData
  .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let messageElements = messageData
  .map( message => <Message message={message.message} />)

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogElement}
      </div>
      <div className={s.messages}>
        {messageElements}
      </div>
    </div>
  )
}


export default Dialogs;
