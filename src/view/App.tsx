import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Page from "./pages/Page";
import Workspace from "./pages/Workspace";
import Layout from "./pages/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="workspace" element={<Workspace/>}/>
                    <Route path="page" element={<Page/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
