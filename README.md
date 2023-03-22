# Install React JS in the folder "client"

> npx create-react-app ./

# Initialise and install dependencies needed in the folder "server

> npm init -y

> npm i @azure/cosmos cors express sqlite3 sequelize dotenv

# In the server directory, make a .env file and ask Yahya for the keys. This is how it should look

> COSMOS_URI= <uri goes in here>
> COSMOS_KEY= <key goes in heree>
> PORT=3000

# In the server's package.json, go to the scripts and add:

> "dev": "nodemon main.js"

# On two different terminals, run the react app and the server (be sure you're in the right directory for both. server directory for the server terminal and client directory for react)

> npm run dev (server)

> npm start (client)

```js
console.log('hello world')
```
