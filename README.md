# chat-app-fcc-react-redux

Just one of the things I'm learning. https://github.com/hchiam/learning

Learning to build a chat app with React and Redux, using a [Free Code Camp tutorial](https://www.youtube.com/watch?v=x_fHXt9V3zQ).

For reference, here's Beau Carnes' repo: https://github.com/beaucarnes/fcc-project-tutorials/tree/master/chat

## Major Pieces

* server: Node.js
* client: React
* client-server communication: WebSockets
* to [manage data](https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/): Redux
* to manage side-effects: Redux-Saga

## Major Steps

### Install quick React web app setup

```bash
npm install -g create-react-app
```

### Use quick React web app setup

Make sure you're inside the right folder. For me, `chat-app-fcc-react-redux` is the name of my parent folder. The following bash command will create a folder named `chat`, with a the actual project inside it:

```bash
create-react-app chat
```

```bash
cd chat
npm start
```

`http://localhost:3000/` should open up.

The key files to start editing first are `chat/src/App.css` and `chat/src/App.js`.

### Install Redux

Inside the `chat` folder:

```bash
npm install redux react-redux --save
```
