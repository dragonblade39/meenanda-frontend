import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { routing } from "./Routes/routes";

const App = () => {
  return (
    <Routes>
      {routing &&
        routing.map((item, index) => {
          return (
            <Route key={index} path={item.path} element={<item.component />} />
          );
        })}
    </Routes>
  );
};

export default App;
