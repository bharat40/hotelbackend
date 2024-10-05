import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import MenuPage from "./pages/MenuPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
