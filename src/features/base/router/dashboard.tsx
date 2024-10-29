import { Outlet } from "react-router-dom"
import NavbarAdmin from "../components/navbar/navbar-admin"
import Cookies from 'js-cookie'
import { Navigate } from "react-router-dom"

function Dashboard() {
    // const token = Cookies.get("token");
    // let userLogin = null;
    // if (token) {
    //     try {
    //         const payloadBase64 = token.split('.')[1];
    //         if (payloadBase64) {
    //             const decodedPayload = JSON.parse(atob(payloadBase64));
    //             userLogin = decodedPayload;
    //         }
            
    //     } catch (error) {
    //         console.error('Failed to decode token:', error);
    //     }
    // }
    // if (userLogin.role !== "admin") {
    //     return <Navigate to={"/"} />;
    // }
    return (
        <>
            <NavbarAdmin />
            <Outlet />
        </>
    )
}

export default Dashboard