import React from 'react';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { Route, Routes } from 'react-router-dom';

class RouterPage extends React.Component {
  render() { 
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}
export default RouterPage;
