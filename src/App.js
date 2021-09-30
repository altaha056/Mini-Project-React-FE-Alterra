import { Switch, Route } from "react-router-dom";

import About from "./components/about/about";
import Blog from "./components/blog/blog";
import Dotd from "./components/dotd/dotd";
import Header from "./components/header/Header";
import Home from "./components/home/home";
import Login from "./components/login/login";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/about" exact component={About} />
        <Route path="/dotd" exact component={Dotd} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </>
  );
}

export default App;
