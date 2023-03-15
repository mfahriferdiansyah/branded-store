const baseUrl = 'http://localhost:4000/'

async function fetchPost(endpoint, dataTarget) {
  try {
    // dataTarget.price = parseFloat(dataTarget.price)
    // dataTarget.categoryId = parseFloat(dataTarget.categoryId)
    // dataTarget.slug = dataTarget.name
    const response = await fetch(baseUrl + endpoint, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataTarget)
    })
    if (!response.ok) throw response.text
    const parsedResponse = await response.json()
    console.log(parsedResponse, '<--- POST Method')
    return parsedResponse
  } catch (error) {
    console.log(error, '<--- POST Method Error')
    return error
  }
}

async function fetchGet(endpoint) {
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: 'GET',
    })
    if (!response.ok) throw response.text
    const parsedResponse = await response.json()
    console.log(parsedResponse, '<--- GET Method')
    return parsedResponse
  } catch (error) {
    console.log(error, '<--- GET Method Error')
    return error
  }
}

async function fetchDelete(endpoint) {
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: 'DELETE',
    })
    return response
  } catch (error) {
    console.log(error, '<--- DELETE Method Error')
    return error
  }
}

async function fetchPatch(endpoint, dataTarget){
  try {
    // dataTarget.price = parseFloat(dataTarget.price)
    // dataTarget.categoryId = parseFloat(dataTarget.categoryId)
    dataTarget.slug = dataTarget.name
    const response = await fetch(baseUrl + endpoint, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataTarget)
    })
    if (!response.ok) throw response.text
    const parsedResponse = await response.json()
    console.log(parsedResponse, '<--- POST Method')
    return parsedResponse
  } catch (error) {
    console.log(error, '<--- POST Method Error')
    return error
  }
}
module.exports = {fetchPost, fetchGet, fetchDelete, fetchPatch}