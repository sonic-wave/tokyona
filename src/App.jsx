import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import TourPage from './pages/TourPage/TourPage';

function App() {

  return (
    <>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/circle/:id" element={<CirclePage />} />  */}
        <Route path="/tours" element={<TourPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
