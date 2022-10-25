import React from 'react';

import meLight from '../assets/planetBlobLight.png';

function Hosting() {
  return (
    <div className='hosting-container ml-4 w-full h-screen dark:bg-gray-900'>
      <div className='home-image-container'>
        <img src={meLight} alt='me' />
      </div>
      <div className='hosting-content-container ml-4 flex flex-col justify-center items-center w-full h-screen shadow-lg'>
        <p className='text-green-500 pb-5'>
          Hosting: I hosted this website using IPFS. IPFS stands for
          InterPlanatary File System and is a distributed file storage protocol
          that computers (nodes) to store and serve files as part of a giant
          peer to peer network. If you'd like to host your own website on the
          IPFS network, check out MY_READ_ME_LINK.
        </p>
        <p>
          Domains: This website is accessable through one of the following: xyz
        </p>
      </div>
    </div>
  );
}

export default Hosting;
