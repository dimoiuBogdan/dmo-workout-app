import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import { store } from "./redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
