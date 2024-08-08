const express = require('express');
const bodyParser = require('body-parser');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/api/cart', cartRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
