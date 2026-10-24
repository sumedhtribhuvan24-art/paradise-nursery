import { Routes, Route, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function Home() {
const navigate = useNavigate();

return ( <main className="landing-page"> <section className="landing-overlay"> <h1>Paradise Nursery</h1> <h2>Bring Nature Home 🌿</h2> <p>
Discover beautiful indoor plants and transform your living
space into a green paradise. </p>
<button onClick={() => navigate("/plants")}>
Get Started </button> </section>

```
  <AboutUs />
</main>


);
}

export default function App() {
return ( <Routes>
<Route path="/" element={<Home />} />
<Route path="/plants" element={<ProductList />} />
<Route path="/cart" element={<CartItem />} /> </Routes>
);
}
