const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/data', (_, res) => {
  res.json(42);
});

app.listen(port, () => {
  console.log(`サーバーがポート ${port} で起動しました。`);
});
