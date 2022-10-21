import { BsHouseFill } from 'react-icons/bs';
import { FaSuitcase, FaGamepad, FaCloud } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideBar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div
      className='fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg'
    >
      <Link to=''>
        <SideBarIcon icon={<BsHouseFill size='22' />} text='home' />
      </Link>
      <Link to='exp'>
        {' '}
        <SideBarIcon icon={<FaSuitcase size='22' />} text='experience' />
      </Link>
      <Link to='hobbies'>
        <SideBarIcon icon={<FaGamepad size='22' />} text='hobbies' />
      </Link>
      <Link to='other'>
        <SideBarIcon icon={<FaCloud size='22' />} text='other' />
      </Link>
      <Divider />
      <SideBarIcon
        text={darkTheme ? 'light mode' : 'dark mode'}
        icon={<BsHouseFill size='22' />}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
      />
    </div>
  );
};

const SideBarIcon = ({
  icon,
  text = 'tooltip 💡',
  darkTheme,
  setDarkTheme,
}) => (
  <div className='sidebar-icon group' onClick={() => setDarkTheme(!darkTheme)}>
    {icon}
    <span class='sidebar-tooltip group-hover:scale-100'>{text}</span>
  </div>
);

const Divider = () => <hr className='sidebar-hr' />;

export default SideBar;
