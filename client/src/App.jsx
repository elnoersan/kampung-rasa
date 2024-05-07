import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import LandingPage from "./pages/LandingPage/LandingPage";
import { DashboardAdmin } from "./pages/Dashboard/DashboardAdmin";



export default function App() {
    return (
        <>
            <ThemeProvider>
                <Router>
                    <Routes>
                        <Route path="/home" element={<LandingPage />} />
                        <Route path="/dashboard" element={<DashboardAdmin />} />
                    </Routes>
                </Router>

            </ThemeProvider>
        </>
    );
}
