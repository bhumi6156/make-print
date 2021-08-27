import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Sections/Home';
import HIW from './components/Sections/HIW';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/make-print' exact component={Home} />
          <Route path='/hiw' exact component={HIW} />
        </Switch>
      </Router>

    </>
  );
}

export default App;
