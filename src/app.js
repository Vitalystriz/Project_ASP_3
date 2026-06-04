const express = require('express')
const app = express()
const usersRouter = require('./routes/users')
const tokensRouter = require('./routes/tokens')
const restaurantsRoutes = require('./routes/restaurantRouter')
const ordersRouter = require('./routes/orders')

app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/tokens', tokensRouter)
app.use('/api/restaurants', restaurantsRoutes)
app.use('/api/orders', ordersRouter)

const PORT = process.env.PORT || 3000 //עושים או שלושת-אלפים למתי שאני מריצה את הפרויקט לוקאלית

app.listen(PORT)
