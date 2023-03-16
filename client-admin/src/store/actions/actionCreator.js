import { CATEGORY_FETCH, EDITCATEGORY_FETCH, EDITIMG_FETCH, EDITPRODUCT_FETCH, PRODUCT_FETCH, RESET_EDIT, SET_ISEDIT, SET_PATH } from "./actionType"

export const setProductList = (payload) => {
  return {
    type: PRODUCT_FETCH,
    payload
  }
}

export const setCategoryList = (payload) => {
  return {
    type: CATEGORY_FETCH,
    payload
  }
}

export const setImageList = (payload) => {
  return {
    type: EDITIMG_FETCH,
    payload
  }
}

export const setProductById = (payload) => {
  return {
    type: EDITPRODUCT_FETCH,
    payload
  }
}

export const setCategoryById = (payload) => {
  return {
    type: EDITCATEGORY_FETCH,
    payload
  }
}

export const resetEditData = () => {
  return {
    type: RESET_EDIT
  }
}

export const setPathNow = (payload) => {
  return {
    type: SET_PATH,
    payload
  }
}

export const setIsEdit = (payload) => {
  return {
    type: SET_ISEDIT,
    payload
  }
}