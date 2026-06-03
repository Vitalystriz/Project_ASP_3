const express = require('express')
var app = express()
app.use(express.json());

const restaurantsRoutes = require('./routes/restaurantRouter');
app.use('/api/restaurants', restaurantsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});