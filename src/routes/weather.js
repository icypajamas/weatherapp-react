import express from "express";
import { fetchData } from "../services/weatherService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { city, country } = req.query;

  if (!city || !country) {
    return res.status(400).json({
      error: "Enter a valid city or country",
    });
  }
  try {
    const weather = await fetchData(city, country);
    
    if (weather.success) {
      res.status(200).json(weather);
    } else {
      if (weather.error.userFacing) {
        res.status(400).json({ error: "Unable to fetch data" });
      } else {
        res.status(500).json({
          error: "Service Error",
          errorInfo: weather.error.internalDetails,
        });
      }
    }
  } catch (error) {
    res.status(500).json({error: "Unable to fetch data from server"});
  }
});

export default router;
