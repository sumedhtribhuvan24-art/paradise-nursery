import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "../redux/CartSlice";

export default function CartItem() {
const dispatch = useDispatch();
const items = useSelector((state) => state.cart.items);

const total = items.reduce(
(sum, item) => sum + item.price * item.quantity,
0
);

const cartCount = items.reduce(
(sum, item) => sum + item.quantity,
0
);

return ( <div className="page"> <nav className="navbar"> <Link to="/">Paradise Nursery</Link> <div> <Link to="/">Home</Link> <Link to="/plants">Plants</Link> <Link to="/cart">🛒 Cart ({cartCount})</Link> </div> </nav>

```
  <main className="cart-container">
    <h1>Your Shopping Cart</h1>

    {items.length === 0 ? (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <Link className="primary-link" to="/plants">
          Continue Shopping
        </Link>
      </div>
    ) : (
      <>
        {items.map((item) => (
          <article className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>Unit price: ${item.price.toFixed(2)}</p>
              <p>
                Item total: ${(item.price * item.quantity).toFixed(2)}
              </p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity - 1,
                      })
                    )
                  }
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>

              <button
                className="remove-button"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Delete
              </button>
            </div>
          </article>
        ))}

        <section className="cart-summary">
          <h2>Total: ${total.toFixed(2)}</h2>
          <button onClick={() => window.alert("Checkout Coming Soon!")}>
            Checkout
          </button>
          <Link className="primary-link" to="/plants">
            Continue Shopping
          </Link>
        </section>
      </>
    )}
  </main>
</div>


);
}
