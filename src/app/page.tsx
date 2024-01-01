import Image from 'next/image'
import Hero from "/public/hero.png" 
import  styles  from './page.module.css'
export default function Home() {
  return (
    <div className='container mx-auto text-3xl font-bold flex items-center justify-center gap-24  mt-7'>
      <div className='flex flex-col justify-between'>
        <h1 className={styles.header}>Better design for your digital products.</h1>
        <p className='mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis ipsam autem, quasi pariatur asperiores.</p>
        <button>See Our Works</button>
      </div>
      <Image className='w-1/3' src={Hero} alt='image'></Image>
    </div>
  )
}
