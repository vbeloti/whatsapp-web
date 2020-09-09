import React, { useEffect } from 'react';
import Pusher from 'pusher-js';
import * as dontenv from 'dotenv';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

dontenv.config();

interface IData {
  name: string;
  message: string;
}

function App() {
  useEffect(() => {
    const pusher = new Pusher('3277987e3192daa36880', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('messages');

    channel.bind('inserted', function(data: IData) {
      alert(JSON.stringify(data));
    });

  }, []);

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
