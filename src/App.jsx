import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';

function ScrollToTop() {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    return null;
}

function App() {

    return (
        <>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/results" element={<Results />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
