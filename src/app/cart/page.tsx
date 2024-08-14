"use client";
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import useCartStore from '../store/cartstore';

interface CartItem {
  title: string;
  price: string;
  quantity: number;
}

interface CustomerDetails {
  name: string;
  address: string;
  phone: string;
}

const Cart = () => {
  const cartItems = useCartStore((state: any) => state.cartItems);
  const removeFromCart = useCartStore((state: any) => state.removeFromCart);
  const clearCart = useCartStore((state: any) => state.clearCart);
  const increaseQuantity = useCartStore((state: any) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state: any) => state.decreaseQuantity);

  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: '',
    address: '',
    phone: ''
  });

  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleOrder = () => {
    // Implement order handling logic here
    console.log("Order confirmed", customerDetails, cartItems);
    // Clear cart after order is placed
    clearCart();
    setOrderConfirmed(true);
  };

  const totalPrice = cartItems.reduce((total: number, item: CartItem) => total + (parseFloat(item.price) * item.quantity), 0);

  return (
    <div className="container mx-auto my-20 py-5 bg-[#111827] text-white">
      <div className="text-center animate-fadeInUp">
        <h5 className="font-secondary py-3 text-2xl font-normal uppercase tracking-widest text-[#F14321]">Your Cart</h5>
        <h2 className="mb-5 text-4xl font-bold">Cart Items</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white text-black rounded-lg shadow-lg p-6 w-full md:w-2/3 lg:w-1/2">
          {orderConfirmed ? (
            <div className="text-center">
              <p className="text-xl font-bold text-green-500 mb-4">Your order is confirmed.</p>
              <p className="text-lg">Wait for our response. Thank you!</p>
            </div>
          ) : (
            <>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">No items in cart</p>
              ) : (
                <ul>
  {cartItems.map((item: CartItem, index: number) => (
    <li key={index} className="mb-2 flex justify-between">
      <div className="flex flex-col">
        <span>{item.title} x {item.quantity}</span>
        <span>{item.price}</span>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className='flex justify-center items-center gap-2'>
        <button
          className="text-green-500 text-xl text-bold hover:text-green-700"
          onClick={() => increaseQuantity(item.title)}
        >
          +
        </button>
        <span>{item.quantity}</span>
        <button
          className="text-red-500 text-3xl  text-bold hover:text-red-700"
          onClick={() => decreaseQuantity(item.title)}
        >
          -
        </button>
        </div>
       <div>
       <button
          className="text-red-500  hover:text-red-700 ml-4"
          onClick={() => removeFromCart(item.title)}
        >
          Remove
        </button>
       </div>
       
      </div>
    </li>
  ))}
</ul>
              )}
              {cartItems.length > 0 && (
                <>
                  <div className="mt-4">
                    <span className="text-lg j font-bold">Total Price: {totalPrice} TK</span>
                  </div>
                  <div className="mt-4">
                    <button
                      className="w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </button>
                  </div>
                </>
              )}
              <div className="mt-4">
                <Link href="/menu">
                  <button className="w-full py-2 bg-[#F14321] text-white rounded hover:bg-gray-200 hover:text-[#000] transition duration-300">
                    Continue Shopping
                  </button>
                </Link>
              </div>
              {cartItems.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-bold mb-2">Customer Details</h3>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={customerDetails.name}
                    onChange={handleChange}
                    className="w-full mb-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#F14321]"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={customerDetails.address}
                    onChange={handleChange}
                    className="w-full mb-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#F14321]"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={customerDetails.phone}
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#F14321]"
                  />
                  <button
                    className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                    onClick={handleOrder}
                  >
                    Order Now
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
