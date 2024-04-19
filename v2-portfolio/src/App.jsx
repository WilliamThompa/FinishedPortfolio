import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ContactLinks from "./components/ContactLinks"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {
  return (
    <div>
      <Navbar /> {/*Where the Navbar is called*/}
      <Home /> {/*Where Home is called*/}
      <About /> {/*Where About is called*/}
      <Projects /> {/*Where Projects is called*/}

      <ContactLinks /> {/*Where ContactLinks is called*/}
    </div>
  )  
  
}

export default App
