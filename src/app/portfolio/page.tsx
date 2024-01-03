import React from 'react'; 
import styles from "./page.module.css"
import Link from 'next/link';
const about = () => {
    return (
        <div className=' container mx-auto'>
            <h1 className='text-8xl text-center font-bold mt-3'>Our Works</h1>
            <p className='text-5xl mt-4 font-semibold '>Chose a gallery..</p><hr className='mt-2 bg-orange-400' />

            <div className='mt-16 flex justify-between'>
                <Link href="/portfolio/illustration"><div className={styles.card}>
                    <div className=" ">
                        <h1 className={styles.title}>Illustration</h1>
                    </div>
                </div>
                </Link>
                <Link href="/portfolio/website">
                    <div className={styles.card2}>

                        <h1 className={styles.title}>Website</h1>
                    </div>
                    </Link>
                <Link href="/portfolio/application">
                <div className={styles.card3}> 
                    <h1 className={styles.title}>Application</h1>
                </div>
                </Link>

            </div>
        </div>
    );
};

export default about;