import Hero from '../components/hero'
import Header from '../components/header'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Products from '../components/procucts'

function Home(){
    return (
       <>
       <Header />

        <main>
            <Hero />
            <About />
            <Projects />
            <Products />
            <Contact />
        </main>

        <Footer />
       </>
    )
}

export default Home