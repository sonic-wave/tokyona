import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import TourPage from "./pages/TourPage/TourPage";
import ExcursionsPage from "./pages/ExcursionsPage/ExcursionsPage";
import ExcursionPage from "./pages/ExcursionPage/ExcursionPage";
import IndividualTourPage from "./pages/IndividualTourPage/IndividualTourPage";

function App() {
  return (
    <>
      <Router basename="/tokyona">
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/circle/:id" element={<CirclePage />} />  */}
          <Route path="/tours" element={<TourPage />} />
          <Route path="/excursions" element={<ExcursionsPage />} />
          <Route path="/excursions/:id" element={<ExcursionPage />} />
          <Route path="/individual_tour" element={<IndividualTourPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
