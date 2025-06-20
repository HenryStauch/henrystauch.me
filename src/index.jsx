import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  BrowserRouter, Routes, Route, useParams,
} from 'react-router';
import LandingPage from './components/LandingPage';

function About(props) {
  return <div> All there is to know about me </div>;
}

// function Nav(props) {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/">Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//       </ul>
//     </nav>
//   );
// }

function Test(props) {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="*" element={<FallBack />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
