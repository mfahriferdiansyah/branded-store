const baseUrl = 'http://localhost:3000/pub/'

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

module.exports = {fetchGet}