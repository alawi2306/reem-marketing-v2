import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import GetStarted from "./GetStarted";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/getstarted" element={<GetStarted />} />
    </Routes>
  );
}

export default App;
