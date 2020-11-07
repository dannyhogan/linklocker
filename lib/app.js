const cors = require('cors');
const path = require('path');
const express = require('express');
const app = express();
app.use(require('cookie-parser')());

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use('/api/v1/user', require('./routes/user'));
app.use('/api/v1/link', require('./routes/link'));


app.get('*', (req, res) => {
  console.log(path.join(__dirname, '../../client/build/index.html'));
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));



module.exports = app;
