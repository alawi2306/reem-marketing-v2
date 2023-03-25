import React from 'react';
import styles from '../style';
import { phone, Emails} from '../assets';

const Start = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-start h-screen relative m-0">
  <h1 className={`text-4xl font-bold mb-20 mt-10 font-poppins font-semibold xs:text-[48px] text-[40px] text-white `}>Get started with us</h1>
    
    <div className='flex flex-row flex-wrap mt-14 '>
      <img src={phone} className="max-w-lg" alt="" />
      <div className='flex lg:ml-20 items-center'>
        <p className={`${styles.paragraph}`}>To get started with us, you can email us us at ali@reemmarketing.com.</p>
      </div>
    </div>
         {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        <div className="absolute z-[0] w-[50%] h-[30%] right-20 bottom-0 blue__gradient" />
        <div className="absolute z-[0] w-[20%] h-[40%] left-0 top-0 blue__gradient" />
        {/* gradient end */}
        
        
    </section>
  );
};

export default Start;

