import React, { MouseEvent, useState, useRef } from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

import { IData } from '../../App';

import './styles.css';
import { Avatar, IconButton } from '@material-ui/core';
import api from '../../services/api';

interface IChat {
  messages: IData[];
}

const Chat: React.FC<IChat> = ({ messages }) => {
  const [input, setInput] = useState('');
  const chatRref = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await api.post('/api/v1/messages', {
      message: input,
      name: 'Máquina',
      timestamp: 'Agora',
      received: true,
    });

    setInput('');

    chatRref?.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Name</h3>
          <p>Visto por último...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div ref={chatRref} className="chat__body">
        {messages?.map((message) => (
          <p
            key={message._id}
            className={`chat__message ${message.received && 'chat_receiver'}`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite uma mensagem"
            type="text"
          />
          <button onClick={handleSendMessage} type="submit">
            Enviar
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
