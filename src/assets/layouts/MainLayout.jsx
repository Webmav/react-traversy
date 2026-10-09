import Navbar from "../components/NavBar";
import {Outlet} from 'react-router-dom'

export default function MainLayout() {
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}