import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-slate-100">
      <div className="max-w-screen-md mx-auto shadow-xl min-h-screen bg-slate-200 bg-opacity-80">
        <Suspense fallback="...is loading">
          <App />
        </Suspense>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
