import Image from 'next/image'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Experience from './sections/Experience'
import Testimonial from './sections/Testimonial'
import AppDownload from './sections/AppDownload'
import Our_Stories from './sections/Our_Stories'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main className=' min-h-screen '>
      <div className='bg-gradient-to-b pt-5 from-[#181818] to-[#474a51] relative h-[60vh] md:h-[75vh] lg:h-[80vh] xl:h-[100vh]'>
      <Navigation/>
      <Hero/>
      <div className='lg:-mt-[40%] xl:-mt-[20%] xl:ml-[1%] xl:mb-[16%]'>
      <Image src='/range.png' alt='car' width={500} height={100} className='overflow-hidden hidden lg:inline-flex md:h-[30%] md:w-[70%] lg:w-[50%] '/>
      </div>
      </div>
     
      <Services/>
      <Experience/>
      <Testimonial/>
      <AppDownload/>
      <Our_Stories/>
      <Footer/>
      
    </main>
  )
}
