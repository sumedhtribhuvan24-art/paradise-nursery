import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/CartSlice";

const categories = [
{
name: "Air Purifying Plants",
plants: [
{ id: 1, name: "Snake Plant", price: 18, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b6b?auto=format&fit=crop&w=600&q=80" },
{ id: 2, name: "Peace Lily", price: 22, image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=600&q=80" },
{ id: 3, name: "Spider Plant", price: 15, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80" },
{ id: 4, name: "Areca Palm", price: 25, image: "https://images.unsplash.com/photo-1597055181300-a8b4be4a6e9a?auto=format&fit=crop&w=600&q=80" },
{ id: 5, name: "Rubber Plant", price: 24, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" },
{ id: 6, name: "Boston Fern", price: 17, image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80" },
],
},
{
name: "Easy Care Plants",
plants: [
{ id: 7, name: "Aloe Vera", price: 12, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
{ id: 8, name: "Jade Plant", price: 14, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
{ id: 9, name: "ZZ Plant", price: 20, image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?auto=format&fit=crop&w=600&q=80" },
{ id: 10, name: "Pothos", price: 16, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80" },
{ id: 11, name: "Lucky Bamboo", price: 13, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80" },
{ id: 12, name: "Succulent Mix", price: 11, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80" },
],
},
{
name: "Decorative Plants",
plants: [
{ id: 13, name: "Monstera", price: 28, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80" },
{ id: 14, name: "Fiddle Leaf Fig", price: 32, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80" },
{ id: 15, name: "Calathea", price: 23, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" },
{ id: 16, name: "Philodendron", price: 21, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80" },
{ id: 17, name: "Bird of Paradise", price: 35, image: "https://images.unsplash.com/photo-1597055181300-a8b4be4a6e9a?auto=format&fit=crop&w=600&q=80" },
{ id: 18, name: "Parlor Palm", price: 19, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b6b?auto=format&fit=crop&w=600&q=80" },
],
},
];

export default function ProductList() {
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);
const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

return ( <div className="page"> <nav className="navbar"> <Link to="/">Paradise Nursery</Link> <div> <Link to="/">Home</Link> <Link to="/plants">Plants</Link> <Link to="/cart">🛒 Cart ({cartCount})</Link> </div> </nav>

```
  <header className="page-heading">
    <h1>Our Beautiful Plants</h1>
    <p>Find the perfect green companion for your space.</p>
  </header>

  {categories.map((category) => (
    <section className="plant-category" key={category.name}>
      <h2>{category.name}</h2>
      <div className="plant-grid">
        {category.plants.map((plant) => {
          const added = cartItems.some((item) => item.id === plant.id);

          return (
            <article className="plant-card" key={plant.id}>
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p className="price">${plant.price.toFixed(2)}</p>
              <button
                disabled={added}
                onClick={() => dispatch(addItem(plant))}
              >
                {added ? "Added to Cart" : "Add to Cart"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  ))}
</div>


);
}