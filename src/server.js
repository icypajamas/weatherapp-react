import express from 'express';
import weatherRouter from './routes/weather.js';
const app = express();
const PORT = 8080;

app.use("/weather", weatherRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});