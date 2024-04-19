import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ContactLinks from "./components/ContactLinks"
import About from "./components/About"
import Portfolio from "./components/Portfolio"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />

      <ContactLinks />
    </div>
  )  
  
}

export default App
