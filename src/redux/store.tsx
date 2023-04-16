import { configureStore, combineReducers, MiddlewareArray } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import type { PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import weatherHistory from "./slices/weatherHistory";

const persistConfig = {
	key: "root_6b47285a-e32e-485e-8454-e1bc23624223",
	storage,
};

const dev = process.env.NODE_ENV === "development";
const middlewares = [];

if (dev) {
	const { createLogger } = require("redux-logger");
	const reduxLogger = createLogger({ collapsed: true });
	middlewares.push(reduxLogger);
}

const reducers = {
	weatherHistory: weatherHistory,
};

const combinedReducers = combineReducers(reducers);
const rootReducer = (state: any, action: PayloadAction) => {
	return combinedReducers(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
	reducer: persistedReducer,
	middleware: new MiddlewareArray().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export default store;
