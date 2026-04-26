import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='bg-gray-200 text-lg flex items-center py-2 px-5'>
            <button className="btn bg-pink-500 text-white">Leatest News</button>
            <Marquee pauseOnHover={true}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, 
                inventore atque nostrum itaque voluptatem dolorum nulla recusandae 
                perspiciatis enim est mollitia tenetur fugiat autem perferendis 
                ratione cumque odit eum neque.
            </Marquee>
        </div>
    );
};

export default BreakingNews;