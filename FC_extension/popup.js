document.getElementById('sendRequest').addEventListener('click', () => {
  const data = document.getElementById('data').value;
  const url = 'https://home8-backend.onrender.com/offer';

  const body = {
    id: 1,
    property_id: 123,
    content: btoa(data),  // Base64 encode the data
    status: 0
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('response').innerText = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    document.getElementById('response').innerText = 'Error: ' + error;
  });
});
