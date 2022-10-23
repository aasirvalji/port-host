import React from 'react';

import amazonLight from '../assets/amazonLight.svg';
import bellLight from '../assets/bellLight.png';
import ibmLight from '../assets/ibmLight.png';

import meLight from '../assets/planetBlobLight.png';

function Work() {
  return (
    <div className='work-container ml-4 w-full h-screen dark:bg-gray-900'>
      <div className='home-image-container'>
        <img src={meLight} alt='me' />
      </div>
      <div className='work-content-container ml-4 flex flex-col justify-center items-center w-full h-screen shadow-lg'>
        <p className='text-green-500 pb-5'>Past places I've worked at</p>
        <div className='company-cards'>
          <div className='amazon-light-container shadow-lg p-6'>
            <img src={amazonLight} alt='amazon' />
          </div>
          <div className='bell-light-container shadow-lg p-2.5'>
            <img src={bellLight} alt='bell' />
          </div>
          <div className='ibm-light-container shadow-lg'>
            <img src={ibmLight} alt='ibm' />
          </div>
        </div>

        <p className='text-green-500 pt-5'>
          Click{' '}
          <a
            href='https://file-cli-9999.s3.us-west-2.amazonaws.com/Aasir_Valji_Resume.pdf'
            type='application/pdf'
            target='_blank'
            rel='noreferrer'
          >
            <i class='fa-solid fa-file' />
          </a>{' '}
          for my full resume
        </p>
      </div>
    </div>
  );
}

export default Work;
