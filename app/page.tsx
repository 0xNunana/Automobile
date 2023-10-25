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
      <div className='bg-gradient-to-b pt-5 from-[#181818] to-[#474a51]'>
      <Navigation/>
      <Hero/>
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
