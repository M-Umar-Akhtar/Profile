import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home index={0}/>} />
          <Route exact path='/about' element={<AboutMe index={1}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
