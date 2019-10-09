import React from 'react';
import logo from './logo.svg';
import './App.css';

// custom components:
// (each will have: presentation = UI; container = behaviour + data)
import { Sidebar } from './containers/Sidebar'
import { MessagesList } from './containers/MessagesList'
import { AddMessage } from './containers/AddMessage'

function App() {
  return (
    <div id="container">
      <Sidebar/>
      <section id="main">
        <MessagesList/>
        <AddMessage/>
      </section>
    </div>
  );
}

export default App;
