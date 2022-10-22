import React from 'react';
import meLight from '../assets/planetBlobLight.png';

function Home() {
  return (
    <div className='ml-4 w-full h-screen'>
      <div className='home-container'>
        <div className='home-image-container'>
          <img src={meLight} alt='me' />
        </div>
        <div className='home-text-container dark:bg-gray-900 shadow-lg'>
          <p>
            {' '}
            Hey, thanks for visiting my website! My name is Aasir Valji and im a
            student at Western University. Im completing my fourth year of
            Software Engineering and will be starting full time in the Summer of
            2023.
          </p>
          <p>
            {' '}
            I've tried keeping this "portfolio" short and to the point but if
            you want to chat more about anything you see here, feel free to
            contact me on{' '}
            <a
              href='https://www.linkedin.com/in/aasir-valji/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa-brands fa-linkedin'></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
