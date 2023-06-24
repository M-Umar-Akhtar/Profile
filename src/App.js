import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home index={0}/>} />
          <Route exact path='/about' element={<AboutMe index={1}/>} />
          <Route exact path='/portfolio' element={<Portfolio index={2}/>} />
          <Route exact path='/contact' element={<Contact index={3}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
