import { Fragment } from "react";
import Home from "pages/index";
import AppContextProvider from "contexts/app";
import AppLayout from "components/app-layout";

function App() {
	return (
		<Fragment>
			<AppContextProvider>
				<AppLayout>
					<Home />
				</AppLayout>
			</AppContextProvider>
		</Fragment>
	);
}

export default App;
