const item = {
    id: Number,
    title: String,
    status: Boolean,
}

const items = JSON.parse(localStorage.getItem('storedItems')) || [];

function renderArray(){

    const displayedItems = document.getElementById('content')
    displayedItems.innerHTML = ''


    //rendering
    items.forEach(item => {

    const li = document.createElement('li');
    li.textContent = item.title;
    li.style.textDecoration = item.status ? 'line-through' : 'none';

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = item.status;
    checkbox.classList.add('checkbox-style')

    checkbox.addEventListener('change', () => {
        item.status = checkbox.checked;
        li.style.textDecoration = item.status ? 'line-through' : 'none';

        localStorage.setItem('storedItems', JSON.stringify(items))
    })

    //delete
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
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


    //final items
    const listItem = document.createElement('div')
    li.appendChild(checkbox)
    listItem.appendChild(li)
    listItem.appendChild(deleteBtn)
    displayedItems.appendChild(listItem)
})
}

function push(){
    const id = Date.now()
    const title = document.getElementById("input").value.trim();
    const errorMsg = document.getElementById('error-message')
    if(title === ''){
        errorMsg.textContent = "Please enter a title before adding"
        errorMsg.style.display = 'block'
        return;
    }

    errorMsg.textContent = '';
    errorMsg.style.display = 'none';

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