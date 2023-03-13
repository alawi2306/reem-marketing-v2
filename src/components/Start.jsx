import React from 'react';
import styles from '../style';
import { phone, Emails, form } from '../assets';

const Start = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} items-center h-70 relative m-0`}

    >
      <div className={`${styles.flexCenter} flex justify-between w-full h-1/2 absolute top-0 bottom-0 m-15`}>
        

        {/* Pictures and text */}
        <div className="w-2/5 h-full flex flex-col items-center ">
          <img src={phone} className="w-[70%] z-0 " alt="phone" />
          <div className='text-center'>
          <h3 className={`font-poppins font-semibold xs:text-[48px] text-[10px] text-white xs:leading-[76.8px] leading-[66.8px] w-full`}>sdddkahs</h3>
          <p className={`${styles.paragraph} text-[10]`}>To get into contact with us, you can call us at 07484881692. If we are not available, we can be sure to follow up and respond.</p>
          </div>
        </div>
        <div className="w-1/5 h-full flex flex-col items-center">
          <img src={Emails} className="w-[90%] z-0" alt="phone" />
          <div>
          <h3 className={`${styles.heading2}`}>sdddkahs</h3>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col items-center">
          <img src={form} className="w-[70%] z-0" alt="phone" />
          <div>
          <h3 className={`${styles.heading2}`}>sdddkahs</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;

