import React from 'react';

import './styles.css';
import { Avatar } from '@material-ui/core';

const SidebarChat: React.FC = () => {
  return (
    <div className="sidebarChat">
      <Avatar />

      <div className="sidebarChat__info">
        <h2>Nome</h2>
        <p>Sua última mensagem</p>
      </div>
    </div>
  );
}

export default SidebarChat;
