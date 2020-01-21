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
  createUserProfileDocument,
  addCollectionAndDocuments
} from './components/firebase/firebase.utils';
// import { setCurrentUser } from './components/redux/user/user.actions';
import { setCurrentUser } from './redux/user/user.actions';
import MenuBar from './components/menu-bars/menu-bars.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import ImageSlide from './components/imageSlides/imageSlides.component'
import Footer from './components/footer/footer.component';
import styled from 'styled-components'
import { selectCollectionsForPreview } from './redux/shop/shop-selectors'
import Default from './components/default';
import Catgory from './pages/category/category';
import login from './components/login/login';
import PageNotFound from './components/page-not-found/pagenotfound';
import Adspage from './pages/AdsPage/adspage';
const slide = styled.div`
height:20px;
width:100%;

`

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser, collectionArray } = this.props;
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
      addCollectionAndDocuments('collections', collectionArray.map(({ title, items }) => ({ title, items })));
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  clickHandel = () => {
    console.log('hello frind fuck you')
  }
  render() {
    return (
      <div>
        <Header />
        {/* <MenuBar /> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/' component={ImageSlide} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/contactus' component={ContactUs} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/login' component={login} />
          <Route exact path='/category' component={Catgory} />
          <Route component={PageNotFound} /><Route
            exact
            path='/signup'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                  <SignInandSignUp />
                )
            }
          />



        </Switch>

        <button onClick={this.clickHandel}>click me </button>
        <Adspage/>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionsForPreview
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
