import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './styles.css';
import { Avatar, IconButton } from '@material-ui/core';

const Chat: React.FC = () => {
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

      <div className="chat__body">
        <p>
          <span className="chat__name">Vinicius</span>
          Mensagem

          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Chat;
