import React from 'react';

import meLight from '../assets/planetBlobLight.png';

function Hosting() {
  return (
    <div className='hosting-container ml-4 w-full h-screen dark:bg-gray-900'>
      <div className='home-image-container'>
        <img src={meLight} alt='me' />
      </div>
      <div className='hosting-content-container ml-4 flex flex-col justify-center items-center w-full h-screen shadow-lg'>
        <p className='text-green-500 pb-5'>I hosted this website using xyz</p>
      </div>
    </div>
  );
}

export default Hosting;
