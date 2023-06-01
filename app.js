const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const customMware = require('./middleware');
  
const app = express();
  
const port = process.env.PORT || 3000;
  
app.use(session({
    secret:'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));

app.set("view engine", "ejs");
app.set("views", "./views");
  
app.use(flash());
app.use(customMware.setFlash);
  
// app.get('/', (req, res) => {
//   req.flash('message', 'Success!!');
// //   res.redirect('/gfg');
// });
  
app.get('/gfg', (req, res) => {
    res.send(req.flash('message'));
});

app.use("/", require("./route.js"));
  
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log('Server is up and listening on', port);
});``