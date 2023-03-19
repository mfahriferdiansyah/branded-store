import { fetchGet } from "../../helpers/fetch"
import toastify from "../../helpers/toastify"
import { IMAGES_FETCH, PRODUCT_DETAIL, PRODUCT_FETCH, SET_ISLOADING } from "./actionType"

export const setImages = (payload) => {
  return {
    type: IMAGES_FETCH,
    payload
  }
}

export const setProductList = (payload) => {
  return {
    type: PRODUCT_FETCH,
    payload
  }
}

export const setProductDetail = (payload) => {
  return {
    type: PRODUCT_DETAIL,
    payload
  }
}

export const setIsLoading = (payload) => {
  return {
    type: SET_ISLOADING,
    payload
  }
}

export const getImages = (id) => {
 return (dispatch) => {
  dispatch(setIsLoading(true))
  return fetchGet(`images?productId=${id}`)
 }
}

export const getProductDetail = (id) => {
  return (dispatch) => {
    dispatch(setIsLoading(true))
    return fetchGet(`products?id=${id}`)
  }
}

export const getProducts = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true))
    return fetchGet('products')
  }
}
