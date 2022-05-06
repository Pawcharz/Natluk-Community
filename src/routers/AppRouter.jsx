import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from '../components/pages/Home'
import DataSciencePage from '../components/pages/DataScience'
import BlockchainPage from '../components/pages/Blockchain'
import PythonPage from '../components/pages/Python'

const setMetaData = () => {
    document.title = "Natluk Community";
    document.icon = "/images/data-science-lg.png";
    console.log(document.icon)
}

const AppRouter = () =>
    <BrowserRouter>
        <>
            <Routes>
                <Route path="/" element={<HomePage/>} exact={true}/>
            </Routes>

            <Routes>
                <Route path="/data-science" element={<DataSciencePage/>} exact={true}/>
            </Routes>

            <Routes>
                <Route path="/blockchain" element={<BlockchainPage/>} exact={true}/>
            </Routes>

            <Routes>
                <Route path="/python" element={<PythonPage/>} exact={true}/>
            </Routes>
        </>
    </BrowserRouter>
;

export default AppRouter;