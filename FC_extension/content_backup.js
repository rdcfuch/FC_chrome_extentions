let panel = document.createElement('div');
panel.style.position = 'fixed';
panel.style.bottom = '20px';
panel.style.right = '20px';
panel.style.width = '300px';
panel.style.height = '400px';
panel.style.backgroundColor = 'white';
panel.style.border = '1px solid #ccc';
panel.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
panel.style.zIndex = 10000;
panel.style.padding = '10px';
panel.style.overflow = 'auto';

panel.innerHTML = `
  <h2>Send Data</h2>
  <form id="dataForm">
    <label for="data">Data:</label><br>
    <textarea id="data" name="data" rows="4" cols="30"></textarea><br>
    <input type="button" id="sendRequest" value="Send Request">
  </form>
  <div id="response"></div>
  <button id="closePanel" style="position: absolute; top: 5px; right: 5px;">X</button>
`;

document.body.appendChild(panel);
R
document.getElementById('closePanel').addEventListener('click', () => {
  panel.style.display = 'none';
});

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
