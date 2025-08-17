const item = {
    id: Number,
    title: String,
    status: Boolean,
}

const items = JSON.parse(localStorage.getItem('storedItems')) || [];

function renderArray(){

    const displayedItems = document.getElementById('content')
    displayedItems.innerHTML = ''

    items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.title;
    displayedItems.appendChild(li)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "delete"
    deleteBtn.style.marginLeft = "10px"

    deleteBtn.addEventListener('click', () => {
        const itemID = item.id;
        const result = items.find(item => item.id === itemID)
        if(result !== -1) {
            items.splice(result, 1)
        }
        localStorage.setItem('storedItems', JSON.stringify(items));
        renderArray()
    })
    displayedItems.appendChild(deleteBtn)
})
}

function push(){
    const id = Date.now()
    const title = document.getElementById("input").value;
    const item = {
        id: id,
        title: title,
        status: false,
    }

    items.push(item)
    localStorage.setItem('storedItems', JSON.stringify(items));
    renderArray()
    
}

renderArray()