function deleteRow(row) {
  if (confirm('Are you sure to delete ?')) {
    document.querySelector(`[data-id='${row}']`).remove();
  }
}

function addRow() {
  const newRow = {
    title: document.querySelector('#titleInput').value,
    publisher: document.querySelector('#publisherInput').value,
  };

  createNewRow(newRow);
}

function createNewRow({ title, publisher }) {
  const newId = +new Date();
  const tr = document.createElement('tr');
  tr.setAttribute('data-id', newId);

  let td = document.createElement('td');
  td.innerHTML = `<button class='btn btn-danger' onclick='deleteRow(${newId})'>Delete</button>`;
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = title;
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerHTML = publisher;
  tr.appendChild(td);

  document.querySelector('#resultTable tbody').appendChild(tr);
}

function loadData() {
  const mockData = [
    { title: 'T1', publisher: 'P1' },
    { title: 'T2', publisher: 'P2' },
  ];

  mockData.forEach(createNewRow);
}

(function () {
  setTimeout(loadData, 2000);
})();
