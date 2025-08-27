const BASE_URL = "http://127.0.0.1:8000";

async function reasonQuery() {
  const res = await fetch(BASE_URL + '/reason_query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await res.json();
  if (!res.ok) {
    return Promise.reject({ status: res.status, data });
  }
  return data;
}

async function recommendBooks() {
  const res = await fetch(BASE_URL + '/recommend_books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await res.json();
  if (!res.ok) {
    return Promise.reject({ status: res.status, data });
  }
  return data;
}


export default {
  createChat, sendChatMessage
};