console.log('n8n bot system loaded!');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.send('Bot system is running 24×7 ✅');
});

app.listen(PORT, () => {
  console.log(`Server live at http://localhost:${PORT}`);
});
