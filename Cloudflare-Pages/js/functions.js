const input = document.querySelector("input")
const list = document.querySelector("table")
const sort = document.querySelector("span")
const bands = []

const addRow = () => {
    const newBand = input.value
    bands.push(newBand)
    addTableRow(newBand)
    input.value = ""
}

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addRow()
    }
})

const deleteRow = (band) => {
    const index = bands.indexOf(band)
    bands.splice(index, 1)
    list.deleteRow(index)
}

const addTableRow = (text) => {
    const row = list.insertRow()
    const col1 = row.insertCell(0)
    const col2 = row.insertCell(1)
    
    col1.innerHTML = text
    col2.innerHTML = '<a href="#" onClick="deleteRow(\'' + text + '\')">X</a' 
}

sort.addEventListener('click', () => {
    bands.sort()
    for (let i = bands.length - 1;i >= 0;i--) {
        list.deleteRow(i)
    }
    for (let i = 0;i<bands.length;i++) {
        addTableRow(bands [i])
    }
})