import { Fragment } from "react";
import Home from "pages/index";
import AppContextProvider from "contexts/app";

function App() {
  return (
    <Fragment>
      <AppContextProvider>
        <Home />
      </AppContextProvider>
    </Fragment>
  );
}

export default App;
