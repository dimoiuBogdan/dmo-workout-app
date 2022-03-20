import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Workouts from "./components/Workouts/Workouts";

const App = () => {
  const theme = useSelector((state: any) => state.themeReducer.theme);

  return (
    <BrowserRouter>
      <div className={`${theme}`}>
        <div
          className={`p-2 pb-14 max-w-screen-md mx-auto shadow-xl min-h-screen bg-slate-100 dark:bg-zinc-800 dark:text-white text-zinc-800`}
        >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
