import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const count = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0))
  return (
    <header className="navbar">
      <Link className="brand" to="/">🌿 Paradise Nursery</Link>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/cart">🛒 Cart <span className="cart-count">{count}</span></NavLink>
      </nav>
    </header>
  )
}
