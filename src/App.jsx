import { useEffect } from "react"
import Hero from "./components/hero"
import Lenis from "lenis";
import 'lenis/dist/lenis.css'
import Layout from "./layout";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./components/about";
import { OurWorks } from "./components/our-works";
import BookNow from "./components/book-now";
import Testimonials from "./components/testimonials";
import FAQ from "./components/faq";
import {Services} from "./components/services";


function App() {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    
    // Listen for the scroll event and log the event data
    lenis.on('scroll', () => {
    });
  }, []);


  return (
    
    <Layout>
       
        <Navbar />
        <Hero />
        {/* <Test /> */}
        <About />
        <FAQ />
        <Services />
        <OurWorks />
        <Testimonials />
        <BookNow />
    </Layout>
  )

}

export default App
