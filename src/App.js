import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Contact from './components/Contact';
import Order from './components/order';
import Mobile from './containers/mobile';
import Home from './containers/Home';
import Cars from './containers/cars';
import './containers/sidebar/sidebar.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About.jsx'




class App extends React.Component {
  render() {
    return (

      <div>
          <Header/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/car" component={Cars} />
        <Route exact path="/about" component={About} />
        <Route exact path="/mobile-phone" component={Mobile} />
        <Route exact path={"/order/:id"} component={Order} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
      </div>
    )
  }
}


export default App;


