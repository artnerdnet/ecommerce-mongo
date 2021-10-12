import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './src/controllers/index'
dotenv.config();

const app = express();
const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
  res.send('the server is running')
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})

app.use('/api', routes)

try {
  const connected = mongoose.connect(
    mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  if (connected) {
    console.log('Connected successfully to MongoDB')

    mongoose.connection.once('open', _ => {
      console.log('Database connected:', 'ecommerce')
    })

  } else {
    console.log('There has been an error connecting to MongoDB')
  }
} catch (error) {
  console.log(`Error ${error}`)
};
