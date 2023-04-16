// assets
import sun from "assets/images/sun.png";
// commons
import { timeFormat } from "commons/utils";
// interfaces
import { WeatherData } from "interfaces";

type Props = {
	info?: WeatherData;
};

const AppWeatherBoard = ({ info }: Props) => {
	const mainTemperature = info?.temp ?? "";
	const highTemperature = info?.h ?? "";
	const lowTemperature = info?.l ?? "";
	const location = info?.location ?? "";
	const currentDateTime = info?.currentDateTime ?? 0;
	const humidity = info?.humidity ?? "";
	const mainDescription = info?.mainDescription ?? "";

	return (
		<div className="app-weather-board">
			<div className="board">
				<div className="board__weather-info-row">
					<div className="board__weather-info-column">
						<div className="board__todays-weather-label">Today's Weather</div>
						<div className="board__weather-celcius">{mainTemperature}°</div>
						<div className="board__weather-high-low">{`H:${highTemperature}° L:${lowTemperature}°`}</div>
					</div>
					<img className="board__weather-image" src={sun} alt="weather" />
				</div>

				<div className="board__weather-more-info-row">
					<div className="board__weather-location">{location}</div>
					<div className="board__weather-more-info-row-2">
						<div>{timeFormat(currentDateTime)}</div>
						<div>Humidity: {humidity}%</div>
						<div>{mainDescription}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppWeatherBoard;
