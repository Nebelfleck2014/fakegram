import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';


const Dialogs = (props) => {

  let dialogElement = props.dialogData
    .map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messageElements = props.messageData
    .map( message => <Message message={message.message} />)

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
