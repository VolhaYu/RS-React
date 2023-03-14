import About from './pages/About';
import React from 'react';
import { HashRouter, Route, Router, Routes } from 'react-router-dom';
import Main from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/header/header';
import RouterPage from './components/router';

export function App() {
  return (
    <>
      <Header />
      <RouterPage />
    </>
  );
}
