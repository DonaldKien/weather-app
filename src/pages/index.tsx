import React, { useContext } from "react";
import { AppContext } from "contexts/app";

const Home: React.FC<any> = () => {
	const { setLightTheme, lightTheme } = useContext(AppContext);

	return (
		<div className="page-home">
			<div className="home">
				<button onClick={() => setLightTheme(!lightTheme)}>theme switch</button>
			</div>
		</div>
	);
};

export default Home;
