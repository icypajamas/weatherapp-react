import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import WeatherToday from "./components/WeatherToday";
import { fetchData } from "./services/weatherService";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city, country) => {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchData(city, country);

      if (result.success) {
        setWeatherData(result);
      } else {
        setError(
          result.error.userFacing
            ? "City not found. Please check the spelling."
            : "Something went wrong. Please try again.",
        );
      }
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gray-600">
      {/* Header sends search terms UP to App */}
      <Header onSearch={handleSearch} />

      {/* WeatherToday receives data DOWN from App */}
      <WeatherToday weatherData={weatherData} loading={loading} error={error} />
    </div>
  );
}

export default App;
