import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Header = () => {
    return (
        <div className='text-center py-10'>
            <Image
            className='mx-auto'
             src={logo} width={300} height={300} 
             alt='Logo'>

             </Image>
            <p>Journalism Without Fear or Favour</p>
            <p>Date</p>
        </div>
    );
};

export default Header;