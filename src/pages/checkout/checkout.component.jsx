import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selector';
import './checkout.style.scss';
import { clearItemFromCart } from '../../redux/cart/cart.actions';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='checkout-block'>
        <span>Product</span>
      </div>
      <div className='checkout-block'>
        <span>Description</span>
      </div>
      <div className='checkout-block'>
        <span>Quantity</span>
      </div>
      <div className='checkout-block'>
        <span>Price</span>
      </div>
      <div className='checkout-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>Total:${total}</div>
  </div>
);
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);
