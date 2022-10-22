import React from 'react';

import amazonLight from '../assets/amazonLight.svg';
import bellLight from '../assets/bellLight.png';
import ibmLight from '../assets/ibmLight.png';

function Work() {
  return (
    <div className='ml-4 flex flex-col justify-center items-center w-full h-screen'>
      <p>Past places I've worked at</p>
      <div className='company-cards'>
        <div className='amazon-light-container dark:bg-gray-900 shadow-lg p-6'>
          <img src={amazonLight} alt='amazon' />
        </div>
        <div className='bell-light-container dark:bg-gray-900 shadow-lg p-2.5'>
          <img src={bellLight} alt='bell' />
        </div>
        <div className='ibm-light-container dark:bg-gray-900 shadow-lg'>
          <img src={ibmLight} alt='ibm' />
        </div>
      </div>
    </div>
  );
}

export default Work;
