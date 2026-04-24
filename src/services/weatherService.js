export async function fetchData(city, country) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}?key=EG836SSTH7ESCZ6FJ5UW8FQE7`,
    );
    if (!response.ok) {
      return {
        success: false,
        error: {
          userFacing: response.status === 400 || response.status === 404,
          internalDetails: `HTTP ${response.status}: ${response.statusText}`,
        },
      };
    }
    let info = {};
    const data = await response.json();
    info.general = {
      address: data.address,
      timezone: data.timezone,
      description: data.description,
    };
    info.conditions = {
      temperature: data.currentConditions.temp,
      condition: data.currentConditions.conditions,
      icon: data.currentConditions.icon,
      humidity: data.currentConditions.humidity,
      feelslike: data.currentConditions.feelslike,
      windspeed: data.currentConditions.windspeed,
      visibility: data.currentConditions.visibility,
      sunrise: data.currentConditions.sunrise,
      sunset: data.currentConditions.sunset,

    };
    info.success = true;
    return info;
  } catch (error) {
    return {
      success: false,
      error: {
        userFacing: false,
        internalDetails: error.message,
      },
    };
  }
}