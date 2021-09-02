import { Switch, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home/Home.page';

// Components
import Header from './components/Header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
