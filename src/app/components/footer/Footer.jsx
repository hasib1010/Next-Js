import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='flex  justify-evenly'>
                <p className='text-center mt-4'>@ all right reserved by next.js</p>
                <div>
                    <Image src="/1.png" width={30} height={30}></Image>
                </div>
            </div>
        </div>
    );
};

export default Footer;
