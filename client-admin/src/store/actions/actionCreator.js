import { fetchDelete, fetchGet, fetchPatch, fetchPost } from "../../helpers/fetch";
import {
  CATEGORY_FETCH,
  EDITCATEGORY_FETCH,
  EDITIMG_FETCH,
  EDITPRODUCT_FETCH,
  PRODUCT_FETCH,
  RESET_EDIT,
  SET_ISEDIT,
  SET_PATH,
  SET_ISMODAL
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

export const setPathNow = (payload) => {
  return {
    type: SET_PATH,
    payload,
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

export const getProducts = () => {
  return (dispatch) => {
    fetchGet("products")
      .then((products) => dispatch(setProductList(products)))
      .catch((error) => console.log(error));
  };
};

export const getCategories = () => {
  return (dispatch) => {
    fetchGet("categories")
      .then((categories) => dispatch(setCategoryList(categories)))
      .catch((error) => console.log(error));
  };
};

export const getImages = (productId) => {
  return (dispatch) => {
    fetchGet(`images?productId=${productId}`)
      .then((images) => dispatch(setImageList(images)))
      .catch((error) => console.log(error));
  };
};

export const getProductById = (productId) => {
  return (dispatch) => {
    fetchGet(`products?id=${productId}`)
      .then(([product]) => dispatch(setProductById(product)))
      .catch((error) => console.log(error));
  };
};

export const getCategoryById = (categoryId) => {
  return (dispatch) => {
    fetchGet(`categories?id=${categoryId}`)
      .then(([category]) => dispatch(setCategoryById(category)))
      .catch((error) => console.log(error));
  }
}

export const deleteCategory = (id) => {
  return async (dispatch) => {
    await fetchDelete('categories/' + id)
      .then(() => dispatch(getCategories()))
  }
}

export const deleteProduct = (id) => {
  return async (dispatch) => {
    await fetchDelete('products/' + id)
      .then(() => dispatch(getProducts()))
  }
}

export const postProducts = (product) => {
  return async (dispatch) => {
    await fetchPost('products', product)
      .then(() => dispatch(getProducts()))
  }
}

export const patchProducts = ({ product, productId }) => {
  return async (dispatch) => {
    console.log('ini dari action')
    await fetchPatch('products/' + productId, product)
      .then(() => dispatch(getProducts()))
  }
}

export const postUser = (newRegister) => {
  return () => {
    fetchPost('authors', newRegister)
      .then((response) => console.log('Success register: ' + response.email))
      .catch((error) => console.log(error));
  }
}

export const postCategory = (newCategory) => {
  return async (dispatch) => {
   await fetchPost('categories', newCategory)
      .then(() => dispatch(getCategories()))
  }
}

export const patchCategory = ({ id, newCategory }) => {
  return async (dispatch) => {
    await fetchPatch('categories/' + id, newCategory)
      .then(() => dispatch(getCategories))
  }
}

export const postLogin = (data) => {
  return async () => {
    await fetchPost('login', data)
      .then(({access_token}) => localStorage.access_token = access_token)
  }
}
