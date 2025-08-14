const item = {
    id: Number,
    title: String,
    status: Boolean,
}


const items = JSON.parse(localStorage.getItem('storedItems'));

const displayedItems = document.getElementById('content')

items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.title;
    displayedItems.appendChild(li)
})

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
    console.log(items);
}