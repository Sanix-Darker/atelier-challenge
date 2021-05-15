import {useEffect} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"

import Home from "./components/Home"
import Header from "./components/Header"
import Scores from "./components/Scores"
import Footer from "./components/Footer"

const App = () => {


  useEffect(() => {
    // Mobile device alert
    if(window.matchMedia("(max-width: 767px)").matches){
      alert("This app is not yet supported on a mobile device !");
    }
  }, [])

  return (
    <Router>
      <div className="container">
        <Header />
        <br/>
        <Route path={["/", "/catmash"]} exact component={Home} />
        <Route path="/scores" exact component={Scores} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
