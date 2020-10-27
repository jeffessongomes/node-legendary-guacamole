const express = require('express');

const app = express();

app.get('/projects', (req, res) => {
  return res.json({message: 'uhu'})
})


app.listen(3333);
