import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/ConnectDB.js'
import cors from 'cors'
import routes from './routes/airbnbRoutes.js'

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api", routes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
   console.log(`Server running on ${process.env.DEV_MODE} made on port ${PORT}`);
})