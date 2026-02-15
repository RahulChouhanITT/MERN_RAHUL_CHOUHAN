import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import BooksPage from "./pages/BookPages";
import AboutPage from "./pages/About";
import FavouritePage from "./pages/FavouritePage";
import NotFoundPage from "./pages/NotFoundpage";
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
