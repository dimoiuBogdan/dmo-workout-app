import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Footer from "./components/common/Footer";
import Homepage from "./components/Homepage/Homepage";
import Workouts from "./components/Workouts/Workouts";

const App = () => {
  const theme = useSelector((state: any) => state.themeReducer.theme);

  return (
    <BrowserRouter>
      <div className={`${theme}`}>
        <div
          className={`p-2 pb-14 max-w-screen-md mx-auto shadow-xl min-h-screen bg-gradient-to-br from-slate-700 to-slate-800 text-slate-200`}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/register" element={<Auth template="register" />} />
            <Route path="/login" element={<Auth template="login" />} />
            <Route path="/*" element={<div>PAGE NOT FOUND...</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
