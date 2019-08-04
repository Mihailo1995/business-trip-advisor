import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Signup from './components/login-page/Signup';
import Login from './components/login-page/Login';
import Home from './components/home-page/Home';
import Life from './components/life-page/Life';
import Accommodation from './components/accommodation-page/Accommodation';
import Transportation from './components/transportation-page/Transportation';
import Feedbacks from './components/feedbacks-page/Feedbacks';
import Providers from './components/providers-page/Providers';
import Page404 from './components/Page404';

class App extends Component {
  state = {
    // user je undefined po defaultu sve dok ne prodje log in
    user: undefined
  }

  // login funkcija koja prihvata parametar iz Login.js (storedEmail)
  onLogin = (user) => {
    this.setState({ user: user });
  }

  render() {
    // ovde vadim user-a iz state-a
    const isLoggedIn = this.state.user;

    return (
      <Fragment>
        <Switch>
          {/* razradjena logika da ako je logovan user odradi redirect na home; ako nije, ostaje na log in-u */}
          <Route path="/" exact component={Signup} />
          <Route path="/log-in" exact component={() => isLoggedIn ?
            <Redirect to={"/home"} /> :
            <Login onLogin={this.onLogin} />}
          />
          {/* <Route path="/home" component={Home} /> */}
          <Route path="/home" exact component={() => isLoggedIn ?
            <Home /> :
            <Redirect to={"/log-in"} />}
          />
          {/* <Route path="/life" component={Life} /> */}
          <Route path="/life" exact component={() => isLoggedIn ?
            <Life /> :
            <Redirect to={"/log-in"} />}
          />
          {/* <Route path="/accommodation" component={Accommodation} /> */}
          <Route path="/accommodation" exact component={() => isLoggedIn ?
            <Accommodation /> :
            <Redirect to={"/log-in"} />}
          />
          {/* <Route path="/transportation" component={Transportation} /> */}
          <Route path="/transportation" exact component={() => isLoggedIn ?
            <Transportation /> :
            <Redirect to={"/log-in"} />}
          />
          {/* <Route path="/feedbacks" component={Feedbacks} /> */}
          <Route path="/feedbacks" exact component={() => isLoggedIn ?
            <Feedbacks /> :
            <Redirect to={"/log-in"} />}
          />
          {/* <Route path="/providers" component={Providers} /> */}
          <Route path="/providers" exact component={() => isLoggedIn ?
            <Providers /> :
            <Redirect to={"/log-in"} />}
          />
          <Route path="*" component={Page404} />
        </Switch>
      </Fragment >
    );
  }
}

export default App;
