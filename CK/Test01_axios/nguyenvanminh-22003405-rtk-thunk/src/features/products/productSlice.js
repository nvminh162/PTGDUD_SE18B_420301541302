import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = import.meta.env.VITE_URL;

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    try {
        const res = await axios.get(URL);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Có lỗi xảy ra');
    }
});

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (product, { rejectWithValue }) => {
        try {
            const res = await axios.post(URL, product);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Có lỗi xảy ra');
        }
    },
);

export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async (product, { rejectWithValue }) => {
        try {
            const res = await axios.put(`${URL}/${product.id}`, product);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Có lỗi xảy ra');
        }
    },
);

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (id, { rejectWithValue }) => {
    try {
        await axios.delete(`${URL}/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Có lỗi xảy ra');
    }
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch All
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
            // Create
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // update
            .addCase(updateProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.products.findIndex((product) => product.id === action.payload.id);
                if (index !== -1) state.products[index] = action.payload;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // Delete
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter((product) => product.id !== action.payload);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default productSlice.reducer;
