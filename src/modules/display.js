const newEntry = document.querySelector('.table')
const display = (data) => {
  while (newEntry.hasChildNodes()) {
    newEntry.removeChild(newEntry.lastChild)
  }
  data.result.sort((a, b) => a.score - b.score)

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.result.length; i++) {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${data.result[i].user}</td>
        <td>: ${data.result[i].score}</td>
    `
    newEntry.appendChild(newRow)
  }
}

export default display
