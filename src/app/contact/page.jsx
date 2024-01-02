import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css'
const page = () => {
    return (
        <div className='container mx-auto  mb-5'>
            <h1 className='text-center mt-5 font-bold text-6xl'>Let's Keep in Touch</h1>
            <div className='flex justify-between items-center mt-36'>
                <div>
                    <Image className={styles.img} src='/contact.png' width={500} height={300}></Image>
                </div>
                <div>
                    <form action="">
                        <input type="text" placeholder='Name' className='border-2 w-96 py-2 pl-5'/> <br />  <br />
                        <input type="text" placeholder='Email Address' className='border-2 w-96 py-2 pl-5'/> <br /><br />
                        <textarea name="Your_messege" placeholder='Messege.....' className='border-2 p-6 w-96' id="" cols="30" rows="10"></textarea>
                        <br /><br /><Link className='bg-green-800 text-white px-3 py-2 rounded-md' href="#">Submit</Link>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default page;