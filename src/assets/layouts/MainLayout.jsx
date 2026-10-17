import Navbar from "../components/NavBar";
import {Outlet} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function MainLayout() {
    return(
        <>
            <Navbar />
            <Outlet />
            <ToastContainer />
        </>
    )
}