// libraries
import React, { Fragment, useCallback, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
// contexts
import { AppContext } from "contexts/app";
// assets
import searchIcon from "assets/icons/search.svg";
// services
import api from "services/api";
// redux
import { RootState } from "redux/store";
import { addWeatherHistory } from "redux/slices/weatherHistory";
// interfaces
import { FormikValues, WeatherData } from "interfaces";
// components
import appToastError from "components/app-toast";
import AppWeatherBoard from "components/app-weather-board";
import AppList from "components/app-list";
import AppSearchInput from "components/app-search";
import AppIconButton from "components/app-icon-button";
// commons
import { queryStringFormat } from "commons/utils";
import AppButton from "components/app-button";

const initialValues = {
	city: "",
	country: "",
};

const fields: { label: string; name: string }[] = [
	{
		label: "City",
		name: "city",
	},
	{
		label: "Country",
		name: "country",
	},
];

const Home: React.FC<{}> = () => {
	const { setLightTheme, lightTheme } = useContext(AppContext);
	const dispatch = useDispatch();
	const weatherHistoryState = useSelector((state: RootState) => state.weatherHistory);
	const [isLoading, setIsLoading] = useState(false);

	const onHandleGetWeatherData = useCallback(
		(values: FormikValues) => {
			setIsLoading(true);
			const params = new URLSearchParams({
				units: "metric",
				q: queryStringFormat(values),
			});
			fetch(api.getWeatherDataApi(params))
				.then((response) => response.json())
				.then((responseJson) => {
					if (responseJson.cod === 200) {
						const data: WeatherData = {
							id: (weatherHistoryState[0]?.id || 0) + 1,
							temp: responseJson?.main?.temp ?? 0,
							h: responseJson?.main?.temp_max ?? 0,
							l: responseJson?.main?.temp_min ?? 0,
							city: responseJson?.name ?? "",
							country: responseJson?.sys?.country ?? "",
							location: (responseJson?.name ?? "") + (responseJson?.sys?.country ? ", " : "") + (responseJson?.sys?.country ?? ""),
							currentDateTime: responseJson?.dt ?? 0,
							humidity: responseJson?.main?.humidity ?? 0,
							mainDescription: responseJson?.weather[0]?.main ?? "",
						};
						dispatch(addWeatherHistory(data));
					} else {
						appToastError(responseJson.message);
					}
					setIsLoading(false);
				});
		},
		[dispatch, weatherHistoryState]
	);

	const formik = useFormik<FormikValues>({
		initialValues: initialValues,
		onSubmit: (values) => {
			if (values.city || values.country) {
				onHandleGetWeatherData(values);
			}
		},
	});

	const onHandleThemeChange = useCallback(
		(e: any) => {
			e.preventDefault();
			setLightTheme(!lightTheme);
		},
		[lightTheme, setLightTheme]
	);

	return (
		<div className="page-home">
			<div className="home">
				<AppButton label={lightTheme ? "Switch to Dark Mode" : "Switch to Light Mode"} onClick={onHandleThemeChange} />

				<form autoComplete="off" onSubmit={formik.handleSubmit} className="home__input-form">
					{fields.map((o) => {
						return <AppSearchInput key={o.name} label={o.label} onChange={(e) => formik.handleChange(o.name)(e.target.value)} value={formik.values[o.name as keyof FormikValues]} error={formik.errors[o.name as keyof FormikValues]} />;
					})}
					<AppIconButton buttonType="submit" src={searchIcon} alt="search-icon" styleType="purple" disabled={isLoading} />
				</form>

				<div className="home__contents">
					{weatherHistoryState?.length ? (
						<Fragment>
							<AppWeatherBoard info={weatherHistoryState[0]} />
							<div className="home__search-history-content">
								<div className="home__search-history-label">Search History</div>
								{weatherHistoryState.map((o) => (
									<AppList key={o.id} info={o} onHandleSearch={onHandleGetWeatherData} />
								))}
							</div>
						</Fragment>
					) : (
						<div className="home__no-records">No records</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
