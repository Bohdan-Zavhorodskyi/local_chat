import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const Chat = ({ name, setMessages, messages }) => {

  const addMessage = (e) => {
    setMessages(prev => ([...prev.concat({ user: name, message: e.target.value, date: new Date() })]));
  };

  return (
    <div className='chat'>
      <div className='chat__title'>

        {name}
      </div>
      <div className='chat__messages'>
        {messages.map((messages, i) => (
          <div key={i} className={name === messages.user ? 'currentUser' : 'chatUser'}>
            <div>
              {messages.user}
            </div>
            <div className='chat_message'>
              {messages.message}
            </div>
            <div>
              {(messages.date).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      <div className="chat__input">
        <TextArea rows={6} onPressEnter={(e) => addMessage(e)} />
        <div className='chat__submit'>
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
};

export default Chat;
