import { Link } from 'react-router-dom'
import './App.css'
import AboutUs from './components/AboutUs.jsx'
import Navbar from './components/Navbar.jsx'
import ProductList from './components/ProductList.jsx'
import CartItem from './components/CartItem.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'

function LandingPage() {
  return (
    <>
      <main className="landing">
        <div className="landing-shade" />
        <section className="landing-content">
          <p className="eyebrow">BRING NATURE HOME</p>
          <h1>Paradise Nursery</h1>
          <h2>Find your little piece of green.</h2>
          <p className="landing-copy">Thoughtfully selected houseplants to make your space feel calmer, fresher, and more alive. Start your indoor jungle with us.</p>
          <Link className="primary-button" to="/plants">Get Started <span aria-hidden="true">→</span></Link>
        </section>
      </main>
      <AboutUs />
    </>
  )
}

export default function App() {
  const location = useLocation()
  const isLanding = location.pathname === '/'
  return (
    <>
      {!isLanding && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
      <footer className="site-footer">© {new Date().getFullYear()} Paradise Nursery · Grow something good.</footer>
    </>
  )
}
