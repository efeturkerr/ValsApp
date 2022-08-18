import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  )
}

export default App;
