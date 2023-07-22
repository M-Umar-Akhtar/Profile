import { BrowserRouter as Router} from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";


function App() {
  /*<AboutMe index={1}/>
      <Portfolio index={2}/>
      <Contact index={3}/>*/
  return (
    <>
      <Router>
        <AnimatedRoutes/>
      </Router>

    </>
  );
}

export default App;
