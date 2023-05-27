import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage from "./Homepage.jsx";
import Termsofservice from './Termsofservices.jsx';
const App = () => {
return (
<Routes>
<Route path={'/'} element={<Homepage />}/>
</Routes>
);
};
export default App;