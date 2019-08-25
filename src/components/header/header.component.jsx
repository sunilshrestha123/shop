import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './header.component.styles.scss';
import { auth } from '../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-drop.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selectors';
const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='' />
    </Link>
    <div className='options'>
      <Link className='option' to='/'>
        HOME
      </Link>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contactus'>
        CONTACT US
      </Link>
      <div className='option'>
        ABOUT
        <i class='fa fa-caret-down' />
        <div class='subnav-content'>
          <a href='#company'>Company</a>
          <a href='#team'>Team</a>
          <a href='#careers'>Careers</a>
        </div>
      </div>

      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
          {/* <Link>{currentUser.displayName}</Link> */}
        </div>
      ) : (
          <Link className='option' to='/signup'>
            SIGN IN
        </Link>
        )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
