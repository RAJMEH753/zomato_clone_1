import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./home";
import Filter from './Filter';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filter" element={<Filter />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;