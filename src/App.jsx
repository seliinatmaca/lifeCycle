import React, { useState } from "react";
import FunctionComp from "./components/functionComp";
import UserPage from "./components/UserPage";
import CountDown from "./components/CountDown";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  console.log(isVisible);
  return (
    <div className="container">
      <button
        className="btn btn-danger mb-5"
        onClick={() => setIsVisible(!isVisible)}
      >
        Gizle/Göster
      </button>

      {isVisible && <FunctionComp />}

      <UserPage />
      <CountDown />
    </div>
  );
};

export default App;
