import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = import.meta.env.VITE_URL;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error((await response.json())?.message || "Lấy dữ liệu thất bại");
      }
      return await response.json();
    } catch (err) {
      return rejectWithValue(err.message || "Có lỗi xảy ra khi lấy dữ liệu");
    }
  }
);

export const postProduct = createAsyncThunk(
  "products/postProduct",
  async (newProduct, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      if (!response.ok) {
        throw new Error((await response.json())?.message || "Thêm thất bại");
      }
      return await response.json();
    } catch (err) {
      return rejectWithValue(err.message || "Có lỗi xảy ra khi thêm");
    }
  }
);

export const putProduct = createAsyncThunk(
  "products/putProduct",
  async (putProduct, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const { id, ...data } = putProduct;
      const response = await fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error((await response.json())?.message || "Cập nhật thất bại");
      }
      return await response.json();
    } catch (err) {
      return rejectWithValue(err.message || "Có lỗi xảy ra khi cập nhật");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${URL}/${id}`, { method: "DELETE" });
      if (!response.ok) {
        throw new Error((await response.json())?.message || "Xóa sản phẩm thất bại");
      }
      return id;
    } catch (err) {
      return rejectWithValue(err.message || "Có lỗi xảy ra khi xóa sản phẩm");
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //fetchProducts
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //postProduct
      .addCase(postProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list.push(action.payload);
      })
      .addCase(postProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //putProduct
      .addCase(putProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(putProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = state.list.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(putProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //deleteProduct
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = state.list.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
