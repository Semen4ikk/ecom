import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {MainPage} from "./pages/MainPages.tsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </Router>
    );
}

export default App
