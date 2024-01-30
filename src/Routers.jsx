import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views";
import Marketplace from "./views/Marketplace";
import DataTables from "./views/DataTables";
import Profile from "./views/Profile";
import SignIn from "./views/SignIn";

const routeArr = [
    {path: "/", element: <Home />},
    {path: "/marketplace", element: <Marketplace />},
    {path: "/datatables", element: <DataTables />},
    {path: "/profile", element: <Profile />},
    {path: "/signin", element: <SignIn />},
]

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routeArr.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element}/>
                ))}
            </Routes>
        </BrowserRouter>    
    )
}

export default Routers