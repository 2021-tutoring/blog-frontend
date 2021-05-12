import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PostDetailPage from "./page/PostDetailPage";
import PostListPage from "./page/PostListPage";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route patch="/" exact component={PostListPage}/>
                <Route patch="/:postId" exact component={PostDetailPage}/>
            </Switch>
        </Router>
{/*      <header className="App-header">
      </header>
      <body>
      <img src={logo} className="App-logo" alt="logo" />
      </body>*/}
    </div>
  );
}

export default App;
