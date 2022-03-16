import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import { store } from "./redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="p-2 pb-8">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
