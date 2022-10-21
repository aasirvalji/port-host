import Sidebar from './components/Sidebar';
import useDarkMode from './hooks/useDarkMode';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FaMoon, FaSun } from 'react-icons/fa';
import Hobbies from './components/Hobbies';
import Home from './components/Home';
import Hosting from './components/Hosting';
import Work from './components/Work';

function App() {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <>
      <div className='flex'>
        <Router>
          <Sidebar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exp' element={<Work />} />
            <Route exact path='/hobbies' element={<Hobbies />} />
            <Route exact path='/other' element={<Hosting />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
