const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
app.use(cors());
const PORT = 5000;

app.use(bodyParser.json());
app.use('/api/cart', cartRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
