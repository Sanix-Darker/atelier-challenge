import {BrowserRouter as Router, Route} from "react-router-dom"

import Home from "./components/Home"
import Header from "./components/Header"
import Scores from "./components/Scores"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/scores" component={Scores} />
      </div>
    </Router>
  );
}

export default App;
