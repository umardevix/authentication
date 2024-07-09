import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { userRouter } from './routes/Users.js'



const url = 'mongodb+srv://admin:umar2003@recipes.0u9byhi.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes'

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, }
).then(() => console.log('Mongo DB connected'))
	.catch(err => console.log('Mongo DB error:', err))

app.use('/auth', userRouter)




app.listen(3001, () => console.log('Server Started'))