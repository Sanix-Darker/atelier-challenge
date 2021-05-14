import {BrowserRouter as Router, Route} from "react-router-dom"

import Home from "./components/Home"
import Header from "./components/Header"
import Scores from "./components/Scores"
import Footer from "./components/Footer"

const App = () => {
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
