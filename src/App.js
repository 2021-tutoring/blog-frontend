import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PostDetail from "./component/PostDetail";
import PostPage from "./page/PostPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact patch="/:postId" component={PostPage}/>
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
