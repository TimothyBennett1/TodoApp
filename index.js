const express = require('express');
const bodyParser = require('body-parser').json();
const mongoose = require('mongoose');
const session = require('express-session');
const sessionConfig = require('./server/config/config');
const app = express();
const port = sessionConfig.port;
const mongoUri = 'mongodb://<Timb20>:<0213tben>@ds155727.mlab.com:55727/todo';

app.use(bodyParser());
app.use(express.static(`./public`))
app.use(express.static(`${__dirname}/node_modules`))
app.use(session(sessionConfig.session))
mongoose.connect( mongoUri );
mongoose.connection.once( 'open', () => console.log( `Connected to MongoDB at ${ mongoUri }` ) );


require('./server/features/Todos/todoRoutes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
