import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncUpdateUserProfile } from '../store/actions/userAction';

const Cart = () => {
  const dispatch = useDispatch();

  // Select the user object directly.
  const user = useSelector((state) => state.userReducer.users);

  // --- Defensive Initial Check ---
  // Safely check for user, cart, and cart length
  if (!user || !user.cart || user.cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-gray-50 p-6 rounded-lg shadow-md m-4">
        <svg
          className="w-12 h-12 text-gray-400 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <div className="text-xl font-semibold text-gray-700">Your cart is empty</div>
        <Link to="/products" className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
          Start Shopping
        </Link>
      </div>
    );
  }

  // --- Calculation Logic (FIXED: Added robust checks) ---
  const subtotal = user.cart.reduce(
    (acc, item) => {
      // Use optional chaining (?. ) and nullish coalescing ( || 0) 
      // to ensure item.product, item.product.price, and item.quantity exist 
      // before attempting multiplication. This fixes the TypeError.
      const price = item?.product?.price || 0;
      const quantity = item?.quantity || 0;
      return acc + price * quantity;
    },
    0
  );

  const tax = subtotal * 0.10;
  const shipping = subtotal > 100 ? 0 : 10;
  const grandTotal = subtotal + tax + shipping;

  // --- Cart Interaction Handlers ---

  const handleQuantityIncrease = (index) => {
    // 1. Create a copy of the cart array
    const updatedCart = [...user.cart];

    // 2. Update the specific item's quantity immutably
    updatedCart[index] = {
      ...updatedCart[index], // Spread the existing item object
      quantity: (updatedCart[index]?.quantity || 0) + 1, // Safely increment quantity
    };

    // 3. Create a new user object with the updated cart
    const updatedUser = { ...user, cart: updatedCart };

    // 4. Dispatch the action
    dispatch(asyncUpdateUserProfile(updatedUser.id, updatedUser));
  };

  const handleRemoveItem = (productId) => {
    // 1. Ensure product ID comparison is type-safe
    const numericProductId = Number(productId); 

    // 2. CREATE THE NEW CART ARRAY WITH DEFENSIVE CHECK (The fix is here)
    const updatedCart = user.cart.filter(c => {
        // Check 1: Ensure the cart item 'c' and 'c.product' exist
        if (!c || !c.product) {
            return false; // Exclude malformed items
        }
        
        // Check 2: Perform the actual removal comparison
        return Number(c.product.id) !== numericProductId;
    });

    // 3. Create the new user object with the updated cart
    const updatedUser = { 
        ...user, 
        cart: updatedCart 
    };

    // 4. Dispatch the update action (Check for ID consistency is good practice)
    if (updatedUser.id) {
        dispatch(asyncUpdateUserProfile(updatedUser.id, updatedUser));
    } else {
        console.error("User ID is missing. Cannot dispatch profile update.");
    }
};

  const handleQuantityDecrease = (index) => {
    // Get the current quantity safely
    const currentQuantity = user.cart[index]?.quantity || 0;

    // If quantity is 1, remove the item instead of setting it to 0
    if (currentQuantity <= 1) {
      handleRemoveItem(user.cart[index].product.id);
      return;
    }

    // Create a copy of the cart array
    const updatedCart = [...user.cart];

    // Update the specific item's quantity immutably
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: currentQuantity - 1, // Decrement the quantity
    };

    // Create a new user object with the updated cart
    const updatedUser = { ...user, cart: updatedCart };

    // Dispatch the action
    dispatch(asyncUpdateUserProfile(updatedUser.id, updatedUser));
  };


  // --- Mapping Cart Items for Display ---
  
  // Filter out any potentially malformed items before mapping
  const validCartItems = user.cart.filter(c => c && c.product);

  const cartItems = validCartItems.map((c, index) => (
    <div
      key={c.product.id}
      className="flex items-center justify-between p-4 bg-white border-b border-gray-200 transition duration-150 ease-in-out hover:bg-gray-50"
    >

      {/* Product Details (Image, Title, Description) */}
      <div className="flex items-center space-x-4 w-1/2">
        <Link to={`/product/${c.product.id}`}>
          <img
            src={c.product.image}
            alt={c.product.title}
            className="w-16 h-16 object-cover rounded-md border border-gray-100"
          />
        </Link>
        <div className="flex flex-col">
          <Link to={`/product/${c.product.id}`} className="text-lg font-semibold text-gray-800 hover:text-blue-600">
            {c.product.title}
          </Link>

          <p className="text-sm text-gray-700 font-medium md:hidden">${c.product.price.toFixed(2)}</p>
        </div>
      </div>

      {/* Price (Desktop) */}
      <div className="hidden md:flex w-1/6 justify-center text-gray-700 font-medium">
        ${c.product.price.toFixed(2)}
      </div>

      {/* Quantity Controls */}
      <div className="w-1/4 md:w-1/6 flex justify-center items-center">
        <button
          onClick={() => handleQuantityDecrease(index)}
          disabled={c.quantity <= 1}
          className="p-1 border border-gray-300 rounded-l hover:bg-gray-100 disabled:opacity-50 cursor-pointer"
        >
          -
        </button>
        <input
          type="number"
          value={c.quantity}
          readOnly
          className="w-12 text-center border-t border-b border-gray-300 text-gray-700 text-sm focus:outline-none"
        />
        <button
          onClick={() => handleQuantityIncrease(index)}
          className="p-1 border border-gray-300 rounded-r hover:bg-gray-100 cursor-pointer"
        >
          +
        </button>
      </div>

      {/* Subtotal & Remove */}
      <div className="w-1/4 md:w-1/6 flex flex-col items-end">
        <p className="text-lg font-bold text-gray-900">
          {/* Also use safe access for calculation display */}
          ${((c.product?.price || 0) * (c.quantity || 0)).toFixed(2)} 
        </p>
        <button
          onClick={() => handleRemoveItem(c.product.id)}
          className="mt-1 text-sm text-red-500 hover:text-red-700 hover:bg-gray-300 transition cursor-pointer rounded-md px-2 py-1"
        >
          Remove
        </button>
      </div>
    </div>
  ));

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-2">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Cart Items List */}
        <div className="lg:w-3/4 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Header Row */}
          <div className="hidden md:flex justify-between p-4 bg-gray-100 border-b font-medium text-gray-600">
            <span className="w-1/2">Product</span>
            <span className="w-1/6 text-center">Price</span>
            <span className="w-1/6 text-center">Quantity</span>
            <span className="w-1/6 text-right">Total</span>
          </div>

          {/* List of Items */}
          <div className="divide-y divide-gray-200">
            {cartItems}
          </div>

          {/* Continue Shopping Link */}
          <div className="p-4 bg-white flex justify-between">
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Continue Shopping
            </Link>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className="lg:w-1/4">
          <div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 sticky top-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Order Summary</h2>

            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal ({user.cart.length} items)</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Estimate</span>
                <span className="font-medium">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span>Tax Estimate (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-3 text-xl font-bold text-gray-900">
                <span>Order Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              className="cursor-pointer w-full mt-6 bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition duration-150 shadow-md"
            >
              Proceed to Checkout
            </button>
            <p className="mt-3 text-xs text-gray-500 text-center">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;