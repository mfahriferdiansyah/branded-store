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
  return (dispatch) => {
    fetchDelete('categories/'+id)
      .then(() => dispatch(getCategories()))
      .catch((error) => console.log(error, 'ioni error'));
  }
}

export const deleteProduct = (id) => {
  return (dispatch) => {
    fetchDelete('products/'+id)
      .then(() => dispatch(getProducts()))
      .catch((error) => console.log(error));
  }
}

export const postProducts = (product, img2, img3) => {
  return (dispatch) => {
    fetchPost('products', product)
      .then(({id:productId}) => fetchPost('images', {imgUrl: img2 || '', productId}))
      .then(({productId}) => fetchPost('images', {imgUrl: img2 || '', productId}))
      .then(() => dispatch(getProducts()))
      .catch((error) => console.log(error));
  }
}

export const patchProducts = ({product, img2, img3, imgId2, imgId3, productId}) => {
  return (dispatch) => {
    fetchPatch('products/'+productId, product)
      .then(() => fetchPatch('images/'+imgId2, {imgUrl: img2, productId}))
      .then(() => fetchPatch('images/'+imgId3, {imgUrl: img3, productId}))
      .then(() => dispatch(getProducts()))
      .catch((error) => console.log(error));
  }
}

export const postUser = (newRegister) => {
  return () => {
    fetchPost('authors', newRegister)
      .then((response) => console.log('Success register: ' + response.email ))
      .catch((error) => console.log(error));
  } 
}

export const postCategory = (newCategory) => {
  return (dispatch) => {
    fetchPost('categories', newCategory)
    .then((response) => console.log('Success add category: '+ response.name))
    .then(() => dispatch(getCategories()))
    .catch((error) => console.log(error));
  }
}

export const patchCategory = ({id, newCategory}) => {
  return (dispatch) => {
    fetchPatch('categories/'+id, newCategory)
      .then(() => dispatch(getCategories))
      .catch((error) => console.log(error));
  }
}
