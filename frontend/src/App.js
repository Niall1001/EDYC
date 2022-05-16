import { Route, Routes } from "react-router-dom";
import {
  Home,
  Admin,
  OurClub,
  Events,
  Membership,
  Contact,
  OnTheWater,
  Schools,
} from "./pages";
import { Navigation } from "./constants";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path={Navigation.HOME}
          caseSensitive={false}
          element={<Home />}
        />
        <Route
          path={Navigation.ADMIN}
          caseSensitive={false}
          element={<Admin />}
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
