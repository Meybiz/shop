import React from "react";
import AppRoutes from '../components/Routes/Routes';
import Footer from "./Footer";
import Header from './Header';
import Sidebar from "./Sidebar";

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <Sidebar />
                <AppRoutes />
            </div>
            
            <Footer />
        </div>
    );
};

export default App