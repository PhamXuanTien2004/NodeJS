document.getElementById('myForm').addEventListener('submit', async function (e) {
e.preventDefault();
const name = document.getElementById('name').value;
const response = await fetch('/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name }),
});
const data = await response.json();
document.getElementById('response').textContent = data.message;
const nameList = document.getElementById('response').textContent += 'Tat ca ten: ${nameList}';
});