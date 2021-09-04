import { Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home.page';
import NewsItem from './pages/NewsItem/NewsItem.page';
import SearchResult from './pages/SearchResult/SearchResult.page';

// Components
import Header from './components/Header/Header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/newsItem">
          <NewsItem />
        </Route>
        <Route path="/searchResult">
          <SearchResult />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
