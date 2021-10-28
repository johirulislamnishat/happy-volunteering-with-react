import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Banner from './Components/Header/Banner';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Route>
          <Banner></Banner>
        </Route>

        <Route>
          <Home></Home>
        </Route>
      </Router>
    </>
  );
}

export default App;
