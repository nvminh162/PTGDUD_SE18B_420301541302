import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../features/productSlice";

const useProduct = () => {
  const { products, product, isLoading, error } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const createProductHook = useCallback(() => {
    (product) => {
      dispatch(createProduct(product));
    };
  }, [dispatch]);

  const updateProductHook = useCallback(() => {
    (product) => {
      dispatch(updateProduct(product));
    };
  }, [dispatch]);

  const deleteProductHook = useCallback(() => {
    (id) => {
      dispatch(deleteProduct(id));
    };
  }, [dispatch]);

  return {
    products,
    product,
    isLoading,
    error,
    createProductHook,
    updateProductHook,
    deleteProductHook,
  };
};

export default useProduct;
