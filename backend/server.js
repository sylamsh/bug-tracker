import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import bugRoutes from './Routes/bugRoutes.js'

const app = express()

dotenv.config()

app.use(express.json({ extended : true }))
app.use(express.urlencoded({ extended : true }))
app.use(cors())

app.use('/bugs', bugRoutes)

const PORT = process.env.PORT || 3350
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))})
    .catch((error) => console.log(error))

