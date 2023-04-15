import { useState } from "react";
import Home from "pages/index";

const theme = (lightTheme: boolean) => {
  if (lightTheme) return "light-theme";
  else return "dark-theme";
};

function App() {
  const [lightTheme, setLightTheme] = useState<boolean>(true);

  return (
    <div className={`app ${theme(lightTheme) || ""}`}>
      <button onClick={() => setLightTheme((prev) => !prev)}>change</button>
      <Home />
    </div>
  );
}

export default App;
