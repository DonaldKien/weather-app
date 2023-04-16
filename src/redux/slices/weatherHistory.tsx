// libraries
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// interfaces
import { WeatherData } from "interfaces";

const initialState = [] as WeatherData[];

const weatherHistorySlice = createSlice({
	name: "weatherHistory",
	initialState,
	reducers: {
		addWeatherHistory(state, action: PayloadAction<WeatherData>) {
			const newState = [...state];
			newState.unshift(action.payload);
			return newState;
		},
		deleteWeatherHistory(state, action: PayloadAction<{ id: number }>) {
			return state.filter((f) => f.id !== action.payload.id);
		},
	},
});

export const { addWeatherHistory, deleteWeatherHistory } = weatherHistorySlice.actions;

export default weatherHistorySlice.reducer;
