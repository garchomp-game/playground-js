const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/sample', (_, res) => {
  res.json({ data: { message: 'HTMXからのリクエストを受け取りました！', answer: 42 } });
});

app.listen(port, () => {
  console.log(`サーバーがポート ${port} で起動しました。`);
});
