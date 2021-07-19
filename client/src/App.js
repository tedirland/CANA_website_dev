import Carousel from './Components/Carousel';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import History from './Components/History';
import Map from './Components/Map';
import Members from './Components/Members';
import BusinessDirectory from './Components/BusinessDirectory';
import Events from './Components/Events';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/history" component={History} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/events" component={Events} />
          <Route
            exact
            path="/business-directory"
            component={BusinessDirectory}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
