const api = {
	getWeatherDataApi: (payload: URLSearchParams) => `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_APP_ID}&${payload}`,
};

export default api;
