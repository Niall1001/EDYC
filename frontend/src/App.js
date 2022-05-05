import { Route, Routes } from "react-router-dom";
import {
	Home
} from "./pages";
import { Navigation } from "./constants";
import { Navbar } from "./components";
import OurClub from "./pages/ourClub";
import Events from "./pages/events";
import Membership from "./pages/membership";
import Contact from "./pages/contact";
import OnTheWater from "./pages/onTheWater";
import Schools from './pages/school';
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
				<Route
					path={Navigation.OURCLUB}
					caseSensitive={false}
					element={<OurClub />}
				/>
				<Route
					path={Navigation.EVENTS}
					caseSensitive={false}
					element={<Events />}
				/>
				<Route
					path={Navigation.MEMBERSHIP}
					caseSensitive={false}
					element={<Membership />}
				/>
				<Route
					path={Navigation.CONTACT}
					caseSensitive={false}
					element={<Contact />}
				/>
				<Route
					path={Navigation.ONTHEWATER}
					caseSensitive={false}
					element={<OnTheWater />}
				/>
				<Route
					path={Navigation.SAILINGSCHOOL}
					caseSensitive={false}
					element={<Schools />}
				/>
      </Routes>
    </div>
  );
}

export default App;
