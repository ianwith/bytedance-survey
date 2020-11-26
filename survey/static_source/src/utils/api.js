import { getCookie } from './cookie'

const csrftoken = getCookie('csrftoken');

const BASE_URL = 'http://localhost:8000/survey_form/api/'

function req(endpoint, options) {
  const request = new Request(
    `${BASE_URL}${endpoint}`,
    {
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json'
      }
    }
  );
  return fetch(request, options)
    .then(res => res.json())
}

export function get(endpoint) {
  return req(endpoint)
}

export function post(endpoint, data) {
  return req(endpoint,
    {
      method: 'POST',
      body: JSON.stringify(data),
    })
}
