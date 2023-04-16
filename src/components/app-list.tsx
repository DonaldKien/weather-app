// libraries
import React, { useCallback, useContext } from "react";
import { useDispatch } from "react-redux";
// components
import AppIconButton from "./app-icon-button";
// redux
import { deleteWeatherHistory } from "redux/slices/weatherHistory";
// common
import { timeFormat } from "commons/utils";
// interfaces
import { FormikValues, WeatherData } from "interfaces";
// context
import { AppContext } from "contexts/app";
// assets
import deleteIconDark from "assets/icons/delete-dark.svg";
import searchIconDark from "assets/icons/search-dark.svg";
import searchIcon from "assets/icons/search-gray.svg";
import deleteIcon from "assets/icons/delete.svg";

type Props = {
	info: WeatherData;
	onHandleSearch?: (values: FormikValues) => void;
};

const AppList: React.FC<Props> = (props) => {
	const dateTime = timeFormat(props.info.currentDateTime);
	const location = props.info.location;
	const { lightTheme } = useContext(AppContext);
	const dispatch = useDispatch();

	const onHandleDelete = useCallback(
		(id: number) => {
			dispatch(deleteWeatherHistory({ id }));
		},
		[dispatch]
	);

	const onHandleSearch = useCallback(
		(searchInfo: FormikValues) => {
			if (props.onHandleSearch) {
				props.onHandleSearch(searchInfo);
			}
		},
		[props]
	);

	return (
		<div className="app-list">
			<div className="list">
				<div className="list--column">
					<div className="list__location">{location}</div>
					<div className="list__date-time list__toggle-1">{dateTime}</div>
				</div>
				<div className="list__more-info">
					<div className="list--margin-left list__date-time list__toggle-2">{dateTime}</div>
					<div className="list--margin-left">
						<AppIconButton src={lightTheme ? searchIcon : searchIconDark} alt="search" styleType="white" onClick={() => onHandleSearch({ city: props.info.city, country: props.info.country })} />
					</div>
					<div className="list--margin-left">
						<AppIconButton src={lightTheme ? deleteIcon : deleteIconDark} alt="delete" styleType="white" onClick={() => onHandleDelete(props.info.id)} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppList;
