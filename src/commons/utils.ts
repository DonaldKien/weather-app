// libraries
import moment from "moment";
// constant
import CONSTANTS from "./constants";
// interfaces
import { FormikValues } from "interfaces";

export const queryStringFormat = (values: FormikValues) => {
	const queryArray = [];
	if (values.city) {
		queryArray.unshift(values.city);
	}
	if (values.country) {
		queryArray.push(values.country);
	}
	return queryArray.join(",");
};

export const timeFormat = (unix: number) => {
	return moment(unix * 1000).format(CONSTANTS.TIME_FORMAT);
};
