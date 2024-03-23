import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./home";
import Filter from './Filter';
import Details from './Details';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filter" element={<Filter />} />
                <Route path="/details" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;