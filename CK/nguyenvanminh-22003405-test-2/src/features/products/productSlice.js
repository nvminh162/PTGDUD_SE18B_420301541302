import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:3000/products');
    if (!response.ok) {
      throw new Error('Server Error!');
    }
    const data = await response.json();
    return data;
  }
);

// Async thunk for fetching a single product
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id) => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    if (!response.ok) {
      throw new Error('Product not found!');
    }
    const data = await response.json();
    return data;
  }
);

// Async thunk for adding a product
export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product) => {
    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    if (!response.ok) {
      throw new Error('Failed to add product!');
    }
    const data = await response.json();
    return data;
  }
);

// Async thunk for updating a product
export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (product) => {
    const response = await fetch(`http://localhost:3000/products/${product.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    if (!response.ok) {
      throw new Error('Failed to update product!');
    }
    const data = await response.json();
    return data;
  }
);

// Async thunk for deleting a product
export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id) => {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Failed to delete product!');
    }
    return id;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      // Handle fetchProductById
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      // Handle addProduct
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      
      // Handle updateProduct
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
        state.product = action.payload;
      })
      
      // Handle deleteProduct
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload);
      });
  }
});

export default productSlice.reducer;