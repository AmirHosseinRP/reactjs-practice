import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import UseRefPage from "./pages/UseRefPage";
import UseStatePage from "./pages/UseStatePage";
import UseEffectPage from "./pages/UseEffectPage";
import NoPage from "./pages/NoPage";
import UseContextPage from "./pages/UseContextPage";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<UseRefPage/>}/>
                        <Route path="useState" element={<UseStatePage/>}/>
                        <Route path="useEffect" element={<UseEffectPage/>}/>
                        <Route path="useContext" element={<UseContextPage/>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);