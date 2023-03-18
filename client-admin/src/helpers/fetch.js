const baseUrl = 'http://localhost:3000/'

async function fetchPost(endpoint, dataTarget) {
    const response = await fetch(baseUrl + endpoint, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "access_token": localStorage.access_token
      },
      body: JSON.stringify(dataTarget)
    })
    if (!response.ok) throw await response.text()
    const parsedResponse = await response.json()
    console.log(parsedResponse, '<--- POST Method')
    return await parsedResponse
}

async function fetchGet(endpoint) {
    const response = await fetch(baseUrl + endpoint, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "access_token": localStorage.access_token
      },
    })
    if (!response.ok) throw await response.text()
    const parsedResponse = await response.json()
    console.log(parsedResponse, '<--- GET Method')
    return await parsedResponse
}

async function fetchDelete(endpoint) {
    const response = await fetch(baseUrl + endpoint, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "access_token": localStorage.access_token
      },
    })
    console.log(response, 'res del')
    if (!response.ok) throw await response.text()
    console.log(response, '<--- DELETE Method')
    return response
}

async function fetchPatch(endpoint, dataTarget){
    const response = await fetch(baseUrl + endpoint, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "access_token": localStorage.access_token
      },
      body: JSON.stringify(dataTarget)
    })
    if (!response.ok) throw await response.text()
    console.log(response, '<--- Patch Method')
    return  response
}

module.exports = {fetchPost, fetchGet, fetchDelete, fetchPatch}