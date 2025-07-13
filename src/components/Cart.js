import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from './cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleClearcart = () => {
      dispatch(clearCart());
    };

    const totalItems = cartItems.length;

    const totalPrice = cartItems.reduce((acc, item) => {
      const price = item.card?.info?.price || item.card?.info?.defaultPrice || 0;
      return acc + price;
    }, 0);

    return (
      <div className="min-h-screen bg-gray-50 p-6">
          <div className="max-w-3xl w-full mx-auto text-center mb-8">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4 flex justify-center items-center gap-2">
              <span>🛒</span>
              <span className="animate-bounce">Your Cart</span>
            </h1>

            <div className="text-lg text-gray-600 mb-4">
              <p>{totalItems} item(s) | <span className="font-semibold text-green-600">₹{(totalPrice / 100).toFixed(2)}</span></p>
            </div>

            <button
              onClick={handleClearcart}
              className="bg-red-600 text-white px-6 py-2 rounded-full text-lg shadow hover:bg-red-700 transition"
            >
              Clear Cart
            </button>

            {cartItems.length === 0 && (
              <p className="mt-4 text-gray-600 text-lg">Your Cart is empty. Add some delicious items!</p>
            )}
          </div>

          <div className="max-w-3xl w-full mx-auto">
          <ItemList itemCards={cartItems} />
          </div>
        </div>

    );
};

export default Cart;
