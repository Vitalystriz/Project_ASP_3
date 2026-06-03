const express = require('express')
const app = express()
const usersRouter = require('./routes/users')
const tokensRouter = require('./routes/tokens')

app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/tokens', tokensRouter)

const PORT = process.env.PORT || 3000 //עושים או שלושת-אלפים למתי שאני מריצה את הפרויקט לוקאלית

app.listen(PORT)