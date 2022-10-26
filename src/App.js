import Sidebar from './components/Sidebar';
import useDarkMode from './hooks/useDarkMode';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useLayoutEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Hobbies from './components/Hobbies';
import Home from './components/Home';
import Hosting from './components/Hosting';
import Work from './components/Work';
import Incompatible from './components/Incompatible';

function App() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const [width, height] = useWindowSize();

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  return (
    <>
      <div className='flex'>
        <Router>
          <Sidebar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          {width <= 768 ? (
            <Incompatible />
          ) : (
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/exp' element={<Work />} />
              <Route exact path='/hobbies' element={<Hobbies />} />
              <Route exact path='/other' element={<Hosting />} />
            </Routes>
          )}
        </Router>
      </div>
    </>
  );
}

export default App;
