const express = require("express");
const app = express();
const port = 9000;

app.get('/', (req, res) => res.send('Hello!'));
app.get('/user/:username', (req, res) => res.send("Welcome!" + req.params.username));

app.listen(port, 
    () => console.log(`Sample App ${port}!`));
