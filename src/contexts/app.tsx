import { ReactNode, createContext, FC, useState } from "react";

type Props = { children: ReactNode };

type ContextType = {
	lightTheme: boolean;
	setLightTheme: (lightTheme: boolean) => any;
};

export const AppContext = createContext<ContextType>({} as ContextType);

const theme = (lightTheme: boolean) => {
	if (lightTheme) return "light-theme";
	else return "dark-theme";
};

export const AppContextProvider: FC<Props> = ({ children }) => {
	const [lightTheme, setLightTheme] = useState<boolean>(true);

	return (
		<AppContext.Provider value={{ lightTheme, setLightTheme }}>
			<div className={`${theme(lightTheme) || ""}`}>{children}</div>
		</AppContext.Provider>
	);
};

export default AppContextProvider;
