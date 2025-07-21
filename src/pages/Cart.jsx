import './Cart.css'
import { useState } from 'react'
import p1 from '../assets/products/f1.jpg'
import p2 from '../assets/products/f2.jpg'
import p3 from '../assets/products/f3.jpg'

const Tr = ({ imgSrc, name = "Cartoon Astronaut T-Shirts", price, quantity = 1 }) => {
  const [inputValue, setInputValue] = useState(quantity);
  return (
    <tr>
      <td><i className="far fa-times-circle"></i></td>
      <td><img src={imgSrc} alt="product image" /></td>
      <td>{name}</td>
      <td>${price}</td>
      <td><input type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} min={1} /></td>
      <td>${inputValue * price}</td>
    </tr>
  )
}

const Cart = () => {
  return (
    <>
      <section className="page-header about-header">
        <h2>#MyCollection</h2>
        <p>Track your own cart items!</p>
      </section>

      <section className='cart section-p1'>
        <table width="100%">
          <thead>
            <tr>
              <th>Remove</th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <Tr imgSrc={p1} price={199.99} quantity={1} />
            <Tr imgSrc={p2} price={199.99} quantity={1} />
            <Tr imgSrc={p3} price={199.99} quantity={1} />
          </tbody>
        </table>
      </section>

      <section className='cart-add section-p1'>
        <div className="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>
        <div className="subtotal">
          <h3>Cart Totals</h3>
          <table>
            <tbody>
              <tr>
                <td>Card Subtotal</td>
                <td>$335.00</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>Free</td>
              </tr>
              <tr>
                <th>Total</th>
                <th>$335.00</th>
              </tr>
            </tbody>
          </table>
          <button className="normal">Proceed to checkout</button>
        </div>
      </section>
    </>
  )
}

export default Cart