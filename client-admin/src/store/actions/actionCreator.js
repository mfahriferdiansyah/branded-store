import { fetchDelete, fetchGet, fetchPatch, fetchPost } from "../../helpers/fetch";

import {
  CATEGORY_FETCH,
  EDITCATEGORY_FETCH,
  EDITIMG_FETCH,
  EDITPRODUCT_FETCH,
  PRODUCT_FETCH,
  RESET_EDIT,
  SET_ISEDIT,
  SET_ISMODAL,
  SET_ISLOADING,
  SET_ISMODALLOADING,
  SET_FETCHDATA
} from "./actionType";

export const setProductList = (payload) => {
  return {
    type: PRODUCT_FETCH,
    payload,
  };
};

export const setCategoryList = (payload) => {
  return {
    type: CATEGORY_FETCH,
    payload,
  };
};

export const setImageList = (payload) => {
  return {
    type: EDITIMG_FETCH,
    payload,
  };
};

export const setProductById = (payload) => {
  return {
    type: EDITPRODUCT_FETCH,
    payload,
  };
};

export const setCategoryById = (payload) => {
  return {
    type: EDITCATEGORY_FETCH,
    payload,
  };
};

export const resetEditData = () => {
  return {
    type: RESET_EDIT,
  };
};

export const setIsEdit = (payload) => {
  return {
    type: SET_ISEDIT,
    payload,
  };
};

export const setIsModal = (payload) => {
  return {
    type: SET_ISMODAL,
    payload,
  };
};

export const setIsLoading = (payload) => {
  return {
    type: SET_ISLOADING,
    payload
  }
}

export const setIsModalLoading = (payload) => {
  return {
    type: SET_ISMODALLOADING,
    payload
  }
}

export const setFetchData = (payload) => {
  return {
    type: SET_FETCHDATA,
    payload
  }
}


export const getProducts = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true))
    fetchGet("products")
      .then((products) => dispatch(setProductList(products)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)))
  };
};

export const getCategories = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true))
    fetchGet("categories")
      .then((categories) => dispatch(setCategoryList(categories)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)))
  };
};

export const getImages = (productId) => {
  return (dispatch) => {
    dispatch(setIsModalLoading(true))
    fetchGet(`images?productId=${productId}`)
      .then((images) => dispatch(setImageList(images)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsModalLoading(false)))
  };
};

export const getProductById = (productId) => {
  return (dispatch) => {
    dispatch(setIsLoading(true))
    fetchGet(`products?id=${productId}`)
      .then(([product]) => dispatch(setProductById(product)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)))
  };
};

export const getCategoryById = (categoryId) => {
  return (dispatch) => {
    dispatch(setIsLoading(true))
    fetchGet(`categories?id=${categoryId}`)
      .then(([category]) => dispatch(setCategoryById(category)))
      .catch((error) => console.log(error))
      .finally(() => dispatch(setIsLoading(false)))
  }
}

export const deleteCategory = (id) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    await fetchDelete('categories/' + id)
      .then(() => dispatch(getCategories()))
      .finally(() => dispatch(setIsLoading(false)))
  }
}

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    await fetchDelete('products/' + id)
      .then(() => dispatch(getProducts()))
      .finally(() => dispatch(setIsLoading(false)))
  }
}

export const postProducts = (product) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    await fetchPost('products', product)
      .then(() => dispatch(getProducts()))
      .finally(() => dispatch(setIsLoading(false)))
  }
}

export const patchProducts = ({ product, productId }) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    await fetchPatch('products/' + productId, product)
      .then(() => dispatch(getProducts()))
      .finally(() => dispatch(setIsLoading(false)))
  }
}

export const postUser = (newRegister) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    await fetchPost('register', newRegister)
      .then((response) => console.log('Success register: ' + response.email))
      .finally(() => dispatch(setIsLoading(false)))
  }
}

export const postCategory = (newCategory) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    await fetchPost('categories', newCategory)
      .then(() => dispatch(getCategories()))
      .finally(() => dispatch(setIsLoading(false)))
  }
}

export const patchCategory = ({ id, newCategory }) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    await fetchPatch('categories/' + id, newCategory)
      .then(() => dispatch(getCategories))
      .finally(() => dispatch(setIsLoading(false)))
  }
}

export const postLogin = (data) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true))
    await fetchPost('login', data)
      .then(({ access_token }) => localStorage.access_token = access_token)
      .finally(() => dispatch(setIsLoading(false)))
  }
}
