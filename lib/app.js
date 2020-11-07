const express = require('express');
const app = express();
const cors = require('cors');
app.use(require('cookie-parser')());

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use('/api/v1/user', require('./routes/user'));
app.use('/api/v1/link', require('./routes/link'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));



module.exports = app;
