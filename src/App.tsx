import { Routes, Route } from "react-router-dom";
import RegisterPage from "./features/register/pages/register.pages";
function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
