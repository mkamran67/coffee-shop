const express = require('express');

const app = express();

const PORT = 3000 || process.env.PORT;

app.get('/', (req: any, res: any) => {
  res.send(`hello`);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
