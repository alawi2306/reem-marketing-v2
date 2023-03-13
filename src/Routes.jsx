import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage from "./Homepage.jsx";
import GetStarted from './Signup';
import Termsofservice from './Termsofservices.jsx';
const App = () => {
return (
<Routes>
<Route path={'/'} element={<Homepage />}/>
<Route path={'/signup'} element={<GetStarted />}/>
<Route path='termsofservice' element={<Termsofservice />} ></Route>
</Routes>
);
};
export default App;