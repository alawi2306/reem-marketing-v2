import { Route, Routes } from "react-router-dom";
import HomePage from "./Homepage.jsx";
import GetStarted from "./GetStarted";
import Termsofservice from "./termsofservice";

function App() {
  return (
    <Routes>
      <Route path="/terms-of-service" component={<Termsofservice />} />
      <Route path="/" component={<HomePage />} />
      <Route path="/getstarted" component={<GetStarted />} />
    </Routes>
  );
}

export default App;
