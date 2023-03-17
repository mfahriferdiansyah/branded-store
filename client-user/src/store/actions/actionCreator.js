import { fetchGet, fetchPost } from "../../helpers/fetch"
import { IMAGES_FETCH, PRODUCT_DETAIL, PRODUCT_FETCH } from "./actionType"

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

export const getImages = (id) => {
 return (dispatch) => {
  fetchGet(`images?productId=${id}`)
  .then((response) => dispatch(setImages(response)))
  .catch((error) => console.log(error))
 }
}

export const getProductDetail = (id) => {
  return (dispatch) => {
    fetchGet(`products?id=${id}`)
    .then(([response]) => dispatch(setProductDetail(response)))
    .catch((error) => console.log(error))
  }
}

export const getProducts = () => {
  return (dispatch) => {
    fetchGet('products')
      .then((response) => dispatch(setProductList(response)))
      .catch((error) => console.log(error))
  }
}
