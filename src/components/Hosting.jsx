import React from 'react';

import meLight from '../assets/planetBlobLight.png';

function Hosting() {
  return (
    <div className='hosting-container ml-4 w-full h-screen dark:bg-gray-900'>
      <div className='home-image-container'>
        <img src={meLight} alt='me' />
      </div>
      <div className='hosting-content-container ml-4 flex flex-col justify-center items-center w-full h-screen shadow-lg dark:bg-gray-900'>
        <p className='text-green-500 pb-5'>
          I hosted this website using IPFS. IPFS stands for InterPlanatary File
          System and is a distributed file storage protocol that uses computers
          (nodes) to store and serve files as part of a giant peer to peer
          network. If you'd like to host your own website on the IPFS network,
          check out{' '}
          <a
            href='https://github.com/aasirvalji/port-host/blob/master/README.md#setup-website-on-ipfs-network'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa-brands fa-github'></i>
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Hosting;
