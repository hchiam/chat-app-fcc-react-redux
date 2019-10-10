# chat-app-fcc-react-redux

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Learning to build a chat app with React and Redux, using a [Free Code Camp tutorial](https://www.youtube.com/watch?v=x_fHXt9V3zQ).

For reference, here's Beau Carnes' repo: <https://github.com/beaucarnes/fcc-project-tutorials/tree/master/chat>

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

Edit `src/index.js` to initialize Redux.

Redux has "reducers", "store", and "actions".

Redux uses "actions" to indirectly change state, since the "store" is read-only. "Actions" get dispatched, and "reducers" actually create the new state.

Inside `src` folder, create:

```text
src
--actions
----index.js
--constants
----ActionTypes.js
--reducers
----index.js
----messages.js
----users.js
```

### Create React Components and Containers

We need to implement the custom components used in the file `src/App.js`.

Inside `src` folder, create components:

```text
src
--components
----AddMessage.js
----Message.js
----MessagesList.js
----SideBar.js
```

Inside `src` folder, create containers:

```text
src
--containers
----AddMessage.js
----Message.js
----MessagesList.js
----SideBar.js
```

We'll connect the components and containers with React-Redux.

`App.js` will import the containers to use them in the main app.

i.e.: **components** -> **containers** -> `App.js`

Containers also connect components to redux state/actions.

### WebSocket Server to Communicate with Network

Inside the `chat` folder:

```bash
npm install ws --save
```

Inside `chat` folder, create server:

```text
chat
--server
----app.js
```

Inside `src` folder, create sockets info:

```text
src
--sockets
----index.js
```

### Install Redux-Saga

Inside the `chat` folder:

```bash
npm install redux-saga --save
```

Redux-Sage handles side-effects for Redux-React. It is a Redux middleware.

Side effects happen because we're using a server that deals with things outside of our functions. We need to handle creating a websocket event to broadcast new message to all clients.

Inside `src` folder, create sagas:

```text
src
--sagas
----index.js
```

### Use Chance as Username Generator

Inside the `chat` folder:

```bash
npm install chance --save
```

Inside `src` folder, create utility:

```text
src
--utils
----name.js
```

### Run Backend Server at the Same Time

Inside the `chat` folder: **(run JUST ONCE, and ONLY FOR TESTING LOCALLY)**

```bash
sudo chmod 0777 ./server/app.js
```

(Aside: `chmod 0777` means [everyone can read, write, and execute](https://www.maketecheasier.com/file-permissions-what-does-chmod-777-means/).)

Now to actually run the server:

```bash
cd server
node app.js
```

### Quick Review

Run client (`chat` folder):

* `npm start`

Run server (`chat/server` folder):

* `node app.js`
