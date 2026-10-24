import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../CartSlice.jsx'

const categories = [
  {
    name: 'Air-Purifying Favorites',
    plants: [
      { id: 1, name: 'Snake Plant', price: 18, description: 'Upright, sculptural leaves and easy care.', image: 'photo-1501004318641-b39e6451bec6' },
      { id: 2, name: 'Peace Lily', price: 22, description: 'Elegant green leaves and graceful white blooms.', image: 'photo-1593691509543-c55fb32e5cee' },
      { id: 3, name: 'Spider Plant', price: 14, description: 'A cheerful, fast-growing houseplant.', image: 'photo-1497250681960-ef046c08a56e' },
      { id: 4, name: 'Areca Palm', price: 28, description: 'Tropical fronds for a bright living space.', image: 'photo-1518531933037-91b2f5f229cc' },
      { id: 5, name: 'Golden Pothos', price: 16, description: 'Trailing vines with golden-green leaves.', image: 'photo-1614594975525-e45190c55d0b' },
      { id: 6, name: 'Rubber Plant', price: 26, description: 'Glossy, deep-green statement foliage.', image: 'photo-1509423350716-97f9360b4e09' }
    ]
  },
  {
    name: 'Low-Maintenance Plants',
    plants: [
      { id: 7, name: 'ZZ Plant', price: 20, description: 'Glossy foliage that tolerates lower light.', image: 'photo-1632207691143-643e2f7b8f3e' },
      { id: 8, name: 'Jade Plant', price: 15, description: 'A compact succulent with rounded leaves.', image: 'photo-1501004318641-b39e6451bec6' },
      { id: 9, name: 'Aloe Vera', price: 12, description: 'A sun-loving succulent with bold form.', image: 'photo-1509423350716-97f9360b4e09' },
      { id: 10, name: 'Ponytail Palm', price: 24, description: 'A playful plant with a distinctive trunk.', image: 'photo-1485955900006-10f4d324d411' },
      { id: 11, name: 'Cast Iron Plant', price: 23, description: 'Durable, lush foliage for shaded corners.', image: 'photo-1497250681960-ef046c08a56e' },
      { id: 12, name: 'Parlor Palm', price: 19, description: 'Soft tropical fronds in a compact size.', image: 'photo-1518531933037-91b2f5f229cc' }
    ]
  },
  {
    name: 'Statement & Tropical Plants',
    plants: [
      { id: 13, name: 'Monstera Deliciosa', price: 32, description: 'Iconic split leaves for a bold look.', image: 'photo-1614594975525-e45190c55d0b' },
      { id: 14, name: 'Bird of Paradise', price: 45, description: 'Large tropical leaves with dramatic presence.', image: 'photo-1597055181300-8b3b6e4e8b6a' },
      { id: 15, name: 'Fiddle-Leaf Fig', price: 39, description: 'A sculptural indoor tree with broad leaves.', image: 'photo-1509423350716-97f9360b4e09' },
      { id: 16, name: 'Calathea Orbifolia', price: 29, description: 'Rounded leaves with silvery-green stripes.', image: 'photo-1497250681960-ef046c08a56e' },
      { id: 17, name: 'Philodendron Brasil', price: 18, description: 'Heart-shaped trailing leaves with variegation.', image: 'photo-1614594975525-e45190c55d0b' },
      { id: 18, name: 'Chinese Money Plant', price: 17, description: 'Distinctive round leaves on slender stems.', image: 'photo-1485955900006-10f4d324d411' }
    ]
  }
]

function PlantCard({ plant }) {
  const dispatch = useDispatch()
  const inCart = useSelector(state => state.cart.items.some(item => item.id === plant.id))
  const imageUrl = `https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=700&q=80`
  return (
    <article className="plant-card">
      <img src={imageUrl} alt={plant.name} loading="lazy"
        onError={event => { event.currentTarget.src = 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80' }} />
      <div className="plant-info">
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <div className="plant-card-bottom">
          <strong>${plant.price.toFixed(2)}</strong>
          <button disabled={inCart} onClick={() => dispatch(addItem(plant))}>
            {inCart ? 'Added ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default function ProductList() {
  return (
    <main className="page-shell">
      <section className="page-heading">
        <p className="eyebrow">THE PLANT COLLECTION</p>
        <h1>Find your perfect plant</h1>
        <p>Explore our hand-picked greenery for every room and routine.</p>
      </section>
      {categories.map(category => (
        <section className="plant-category" key={category.name}>
          <h2>{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map(plant => <PlantCard key={plant.id} plant={plant} />)}
          </div>
        </section>
      ))}
    </main>
  )
}
