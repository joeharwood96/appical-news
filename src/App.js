import { Switch, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home/Home.page';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
