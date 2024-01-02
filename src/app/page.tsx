import Image from 'next/image'
import Hero from "/public/hero.png" 
import  styles  from './page.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className=' container mx-auto  flex items-center justify-center gap-24  mt-7'>
      <div className=''>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className='mt-6 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit molestiae ducimus similique expedita ex, autem sapiente dolor qui corrupti dolorem voluptate earum commodi quas sunt totam labore explicabo. Enim iure, nostrum optio itaque delectus dolorem maiores quos accusamus numquam animi, consequuntur sit, quis cum magni quam eaque necessitatibus atque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis ipsam autem, quasi pariatur asperiores.</p>
        <Link href="/portfolio"><button className='bg-green-900 p-3 rounded-lg text-white mt-3 w-fit '>See Our Works</button></Link>
      </div>
      <Image className={styles.img} src={Hero} alt='image'></Image>
    </div> 
  )
}
