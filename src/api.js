async function fetchData(city, country) {
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
      temperature: data.days[0].temp,
      conditions: data.days[0].conditions,
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
