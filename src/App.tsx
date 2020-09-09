import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import * as dontenv from 'dotenv';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Axios from 'axios';
import api from './services/api';

dontenv.config();

interface IData {
  name: string;
  message: string;
  timestamp: string;
}

function App() {
  const [messages, setMessages] = useState<IData[]>([]);

  useEffect(() => {
    api.get('/api/v1/messages').then((response) => {
      setMessages(response.data);
    });

  }, []);

  useEffect(() => {
    const pusher = new Pusher('3277987e3192daa36880', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('messages');

    channel.bind('inserted', function (newMessage: IData) {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />

        <Chat />
      </div>
    </div>
  );
}

export default App;
