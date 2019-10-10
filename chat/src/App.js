import React from 'react';
import './App.css';

// custom components:
// (each will have: presentation = UI; container = behaviour + data)
import { SideBar } from './containers/SideBar'
import { MessagesList } from './containers/MessagesList'
import { AddMessage } from './containers/AddMessage'

function App() {
  return (
    <div id="container">
      <SideBar/>
      <section id="main">
        <MessagesList/>
        <AddMessage/>
      </section>
    </div>
  );
}

export default App;
