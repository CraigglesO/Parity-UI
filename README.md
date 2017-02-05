




### Step 1) Install parity (or geth) and start (or continue) syncing


Make sure for this demonstration to open the Webpack's localhost port for CORS requests.

`parity --rpccorsdomain="http://localhost:3000"`


### Step 2) Start the web application first

```terminal
cd app
npm install
npm start
```

Webpack will run a local server of our React app.

### Step 3) Boot up Electron

```terminal
cd Electron
npm install
npm start
```
