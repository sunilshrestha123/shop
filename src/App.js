import React from 'react';
import './App.css';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import ContactUs from './components/contactus/contactus';
import SignInandSignUp from './pages/sign-in-and-sign-up/signup.component';
import {
  auth,
  createUserProfileDocument
} from './components/firebase/firebase.utils';
// import { setCurrentUser } from './components/redux/user/user.actions';
import { setCurrentUser } from './redux/user/user.actions';
import MenuBar from './components/menu-bars/menu-bars.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import Footer from './components/footer/footer.component';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // createUserProfileDocument(user);
      // console.log(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(sanpShot => {
          // console.log(sanpShot);
          // this.setState({
          // currentUser: {
          setCurrentUser({
            id: sanpShot.id,
            ...sanpShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className='App'>
        <Header />
        {/* <MenuBar /> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route path='/contact' component={HomePage} /> */}
          <Route path='/shop' component={ShopPage} />
          <Route path='/contactus' component={ContactUs} />
          <Route exact path='/checkout' component={CheckoutPage} />

          <Route
            exact
            path='/signup'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInandSignUp />
            }
          />
          {/* <Route path='Partner' component={Partner} /> */}

          {/* <Route path='/hatpage' component={Hatpage} />
        <Route path='/hatpage/:id' component={Hatpage} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
