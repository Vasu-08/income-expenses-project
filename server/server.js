require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./config/dbConnect');
const userRoutes = require('./routes/users/usersRoute');
const transactionsRoutes = require('./routes/transactions/transactionsRoute');
const accountsRoutes = require('./routes/accounts/accountRoute');
const globalErrHandler = require('./middlewares/globalErrHandler');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/accounts', accountsRoutes);
app.use('/api/v1/transactions', transactionsRoutes);

app.use(globalErrHandler);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
