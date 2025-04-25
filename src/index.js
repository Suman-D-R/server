const express = require('express');
const env = require('dotenv');
const routes = require('./routes/index');
const connectDB = require('./config/db');
const cors = require('cors')

env.config();
connectDB();
const app = express();

app.use(cors())
app.use(express.json());

const port = process.env.PORT;

app.use('/api', routes);

app.listen(port, () => {
  console.log('server started', port);
});
