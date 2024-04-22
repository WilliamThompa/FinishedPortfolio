import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ContactLinks from "./components/ContactLinks"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import LoaderSimple from "./components/LoaderSimple"

function App() {
  return (
    <div>
      <LoaderSimple /> {/*Where the LoaderSimple is called*/}

      <Navbar /> {/*Where the Navbar is called*/}
      <Home /> {/*Where Home is called*/}
      <About /> {/*Where About is called*/}
      <Projects /> {/*Where Projects is called*/}
      <Experience /> {/*Where Experience is called*/}
      <Contact /> {/*Where Contact is called*/}

      <ContactLinks /> {/*Where ContactLinks is called*/}
    </div>
  )  
  
}

export default App
