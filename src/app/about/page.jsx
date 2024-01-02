import React from 'react';
import Image from 'next/image';
import styles from './page.module.css'
import Link from 'next/link';
const page = () => {
    return (
        <div className='container mx-auto'> 
            <div className='w-full h-[300px] relative'>
                <Image
                    src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className="absolute rounded-lg bottom-5 left-5 bg-green-600 px-6 py-2 text-white">
                    <h1 className="text-4xl font-bold">Digital Storytellers</h1>
                    <h2 className="text-2xl">
                        Handcrafting award winning digital experiences
                    </h2>
                </div>
            </div>
            <div className="flex my-10 gap-11 container  mx-auto">
                <div className={styles.item}>
                    <h1 className='text-3xl font-bold'>Who Are We?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
                        beatae, a suscipit eos. Animi quibusdam cum omnis officiis
                        <br />
                        <br />
                        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
                        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
                        officiis voluptatum quo ea eveniet?
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className='text-3xl font-bold'>What We Do?</h1>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                        Creative Illustrations
                        <br />
                        <br /> - Dynamic Websites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </p>
                    <Link className='bg-green-700 my-4 mt-7 px-3 py-4 rounded-lg text-white font-bold' href={'/contact'}>Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default page;