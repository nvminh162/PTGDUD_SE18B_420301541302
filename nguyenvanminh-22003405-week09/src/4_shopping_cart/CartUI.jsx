import React from 'react';

function CartUI({ cartItems, addItem, removeItem, updateQuantity }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="p-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">Shopping Cart</h1>
        <p className="text-gray-500 mt-2">Manage your products and checkout</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
          <div className="mb-6">
            <svg className="w-20 h-20 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <button 
            onClick={() => addItem({
              id: Date.now(),
              name: `Awesome Product`,
              price: Math.floor(Math.random() * 100) + 10,
              image: `https://picsum.photos/200?random=${Date.now()}`,
              quantity: 1
            })}
            className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Add Product
          </button>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Cart items header */}
            <div className="bg-gray-50 px-6 py-4 border-b">
              <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-600">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Price</div>
                <div className="col-span-1"></div>
              </div>
            </div>

            {/* Cart items */}
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors duration-200">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 h-16 w-16 rounded-md overflow-hidden bg-gray-100">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{item.name}</h3>
                          <p className="text-sm text-gray-500">SKU: {item.id.toString().slice(-6)}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-3">
                      <div className="flex items-center justify-center">
                        <div className="flex border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none text-gray-600"
                          >
                            −
                          </button>
                          <div className="w-12 text-center py-1 font-medium">
                            {item.quantity}
                          </div>
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 focus:outline-none text-gray-600"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-span-2 text-right font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                      <div className="text-xs text-gray-500">${item.price.toFixed(2)} each</div>
                    </div>
                    
                    <div className="col-span-1 text-right">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                        aria-label="Remove item"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Cart summary */}
            <div className="bg-gray-50 px-6 py-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total Items:</span>
                <span className="font-medium">{calculateTotalItems()}</span>
              </div>
              
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-800 font-medium">Total Price:</span>
                <span className="text-xl font-bold text-gray-800">${calculateTotal().toFixed(2)}</span>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => addItem({
                    id: Date.now(),
                    name: `Product ${Math.floor(Math.random() * 1000)}`,
                    price: Math.floor(Math.random() * 100) + 10,
                    image: `https://picsum.photos/200?random=${Date.now()}`,
                    quantity: 1
                  })}
                  className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-3 rounded-lg hover:shadow-md transition-all duration-200 flex items-center justify-center font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                  Add Random Item
                </button>
                
                <button className="flex-1 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-3 rounded-lg hover:shadow-md transition-all duration-200 flex items-center justify-center font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartUI;