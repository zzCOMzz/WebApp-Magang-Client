const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use('/assets',express.static('assets'));

app.get('/', (req, res) => {
  res.render('index',{
    pageTitle: "Login"
  });
});

app.get('/form', (req, res)=>{
  res.render('form', {
    pageTitle : 'Form '
  })
})

app.get('/home', (req, res)=>{
  res.render('home',{
    pageTitle : 'Home'
  });
})

app.get('/listTamu',(req, res)=>{
  res.render('listTamu', {
    pageTitle : 'List Tamu'
  });
})
app.listen(3000, () => {
  console.log(`Server started on port http://localhost:3000`);
});