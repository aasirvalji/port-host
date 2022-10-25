import React from 'react';

import meLight from '../assets/planetBlobLight.png';
import apexLight from '../assets/apexLight.png';
import psgLight from '../assets/psgLight.png';

import interstellarLight from '../assets/interstellarLight.png';

function Hobbies() {
  return (
    <div className='hobbies-container ml-4 w-full h-screen dark:bg-gray-900'>
      <div className='home-image-container'>
        <img src={meLight} alt='me' />
      </div>
      <div className='hobbies-content-container ml-4 flex flex-col justify-center items-center w-full h-screen shadow-lg'>
        <p className='text-green-500 pb-5'>Some of my hobbies include</p>
        <div className='hobby-icon-container'>
          <div className='gaming-container'>
            <a
              href='https://www.youtube.com/watch?v=xZEhNpKXIKc&ab_channel=AasirValji'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={apexLight} className='p-2 shadow-lg' alt='apex-light' />
              <p>playing video games</p>
            </a>
          </div>
          <div className='soccer-container'>
            <a
              href='https://en.psg.fr/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={psgLight} className='p-3 shadow-lg' alt='psg-light' />
            </a>
            <p>watching soccer</p>
          </div>
          <div className='movies-container'>
            <a
              href='https://www.imdb.com/title/tt0816692/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={interstellarLight}
                className='p-3 shadow-lg'
                alt='interstellar-light'
              />
            </a>
            <p>watching movies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
