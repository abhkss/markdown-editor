const express = require('express');
const app = express();
const marked = require('marked');

app.use(express.json());

app.post('/convert', (req, res) => {
  const markdown = req.body.markdown;
  const html = marked(markdown);
  res.json({ html });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});