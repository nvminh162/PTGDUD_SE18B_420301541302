import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = import.meta.env.VITE_URL_PRODUCTS;

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetchProduct
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //createProduct
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //updateProduct
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.products = state.products.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //deleteProduct
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //fetchProductById
      .addCase(fetchProductById.pending, (state) => {
        state.product = null;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.product = null;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProduct",
  async (_, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); //Mô phỏng loading
    return await fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        return res.json();
      })
      .catch((err) =>
        rejectWithValue(err.message || "Không thể kết nối đến server")
      );
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); //Mô phỏng loading
    return await fetch(`${URL}/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        return res.json();
      })
      .catch((err) =>
        rejectWithValue(err.message || "Không thể kết nối đến server")
      );
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (product, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); //Mô phỏng loading
    return await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        return res.json();
      })
      .catch((err) =>
        rejectWithValue(err.message || "Không thể kết nối đến server")
      );
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); //Mô phỏng loading
    return await fetch(`${URL}/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        return res.json();
      })
      .catch((err) =>
        rejectWithValue(err.message || "Không thể kết nối đến server")
      );
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); //Mô phỏng loading
    return await fetch(`${URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
        return id;
      })
      .catch((err) =>
        rejectWithValue(err.message || "Không thể kết nối đến server")
      );
  }
);

export default productSlice.reducer;
