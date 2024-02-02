import { BrowserRouter, Route, Routes } from "react-router-dom";
import Marketplace from "./views/marketplace/Marketplace";
import DataTables from "./views/datatables/DataTables";
import Profile from "./views/profile/Profile";
import SignIn from "./views/signin/SignIn";
import Home from "./views/home/Home";

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