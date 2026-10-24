import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem, updateQuantity } from '../CartSlice.jsx'

export default function CartItem() {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <main className="page-shell cart-page">
      <section className="page-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <p>Review your plants and adjust quantities before checkout.</p>
      </section>
      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-icon">🪴</div>
          <h2>Your cart is ready to grow</h2>
          <p>You have not added any plants yet.</p>
          <Link className="primary-button" to="/plants">Continue Shopping</Link>
        </section>
      ) : (
        <>
          <div className="cart-list">
            {items.map(item => (
              <article className="cart-row" key={item.id}>
                <img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=300&q=80`} alt={item.name}
                  onError={event => { event.currentTarget.src = 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=300&q=80' }} />
                <div className="cart-product">
                  <h3>{item.name}</h3>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <button className="text-button delete-button" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
                </div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button aria-label="Decrease quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label="Increase quantity" onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                </div>
                <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
              </article>
            ))}
          </div>
          <section className="cart-summary">
            <div><p>Order total</p><h2>${total.toFixed(2)}</h2></div>
            <div className="cart-actions">
              <Link className="secondary-button" to="/plants">Continue Shopping</Link>
              <button className="primary-button" onClick={() => window.alert('Coming Soon! Checkout will be available shortly.')}>Checkout</button>
            </div>
          </section>
        </>
      )}
    </main>
  )
}
