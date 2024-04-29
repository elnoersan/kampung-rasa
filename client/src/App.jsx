import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import LandingPage from "./pages/LandingPage/LandingPage";



export default function App() {
    return (
        <>
            <ThemeProvider>
                <Router>
                    <Routes>
                        <Route path="/home" element={<LandingPage />} />

                    </Routes>
                </Router>

            </ThemeProvider>
        </>
    );
}
