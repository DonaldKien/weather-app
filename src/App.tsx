import Home from "pages/index";
import AppContextProvider from "contexts/app";
import AppLayout from "components/app-layout";
import store, { persistor } from "redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<AppContextProvider>
					<AppLayout>
						<Home />
					</AppLayout>
				</AppContextProvider>
			</PersistGate>
		</Provider>
	);
}

export default App;
