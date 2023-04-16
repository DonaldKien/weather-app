export type WeatherData = {
	id: number;
	temp: number;
	h: number;
	l: number;
	city: string;
	country: string;
	location: string;
	currentDateTime: number;
	humidity: number;
	mainDescription: string;
};

export type FormikValues = {
	city: string;
	country: string;
};

export type ApiError = {
	cod: string;
	message: string;
};
