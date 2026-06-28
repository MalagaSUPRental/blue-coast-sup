import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Prices from '@/components/Prices'
import Pickup from '@/components/Pickup'
import Equipment from '@/components/Equipment'
import Rules from '@/components/Rules'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Prices />
        <Pickup />
        <Equipment />
        <Rules />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
