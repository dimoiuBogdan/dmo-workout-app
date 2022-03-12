import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import { store } from "./redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="p-2">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Navbar />
    </Provider>
  );
};

export default App;
