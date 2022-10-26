import React from 'react';

function Incompatible() {
  return (
    <div className='ml-4 w-full h-screen dark:bg-gray-900'>
      <div className='incompatible-container'>
        <div className='incompatible-content-container shadow-lg'>
          <p>
            Unsupported screen size. Please try again on a device that's 768px
            or over
          </p>
        </div>
      </div>
    </div>
  );
}

export default Incompatible;
