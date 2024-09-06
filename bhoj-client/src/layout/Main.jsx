import React from "react"
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../../src/App.css";
import Footer from "../components/Footer";
const Main = () => {
    return (
        <div className="bg-primarybg">
            <Navbar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );

}
export default Main;