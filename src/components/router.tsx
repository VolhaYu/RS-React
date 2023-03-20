import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import FormsPage from '../pages/Forms';

class RouterPage extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}
export default RouterPage;
