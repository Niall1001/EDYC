import { Route, Routes } from "react-router-dom";
import {
	Home
} from "./pages";
import { Navigation } from "./constants";
import { Navbar } from "./components";


function App() {
  return (
    <div className="app">
      <Navbar/>
			<Routes>
				<Route
					path={Navigation.HOME}
					caseSensitive={false}
					element={<Home />}
				/>
      </Routes>
    </div>
  );
}

export default App;
