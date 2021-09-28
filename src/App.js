import { Switch, Route } from "react-router-dom";

import About from "./components/about/about";
import Blog from "./components/blog/blog";
import Dotd from "./components/dotd/dotd";
import Header from "./components/header/Header";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={Blog} />
        <Route path="/blog" exact component={About} />
        <Route path="/dotd" exact component={Dotd} />
      </Switch>
    </>
  );
}

export default App;
