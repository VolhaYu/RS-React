import About from './pages/About';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import NotFound from './pages/NotFound';
import Header from './components/header';

export function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
