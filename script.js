let addItemBtn = document.querySelector('input[type="submit"]');
let listItems = document.querySelector('.list-items');
let searchBtn = document.getElementById('search');

listItems.addEventListener('click', deleteLi);
addItemBtn.addEventListener('click', runEvent);
searchBtn.addEventListener('input', searchItem);

// function for add an items
function runEvent(e){
    e.preventDefault();
    let addInputText = document.querySelector('.form input[type="text"]').value;
    
    // craete a li element 
    let li = document.createElement('li');
    let txtNode = document.createTextNode(addInputText);
    li.appendChild(txtNode);
    document.querySelector('.form input[type="text"]').value= "";
    
    // create a button element
    let btn = document.createElement('button');
    btn.className = 'deleteBtn';
    
    let txtnodeBtn = document.createTextNode('X');
    btn.appendChild(txtnodeBtn);
    li.appendChild(btn);
    let ul = document.querySelector('.list-items');
    ul.appendChild(li);
}

// function for delete an items
function deleteLi(e){
    if(e.target.classList.contains('deleteBtn')){
        if(confirm('Are you sure you want to delete this item!')){
            e.target.parentElement.style.display = 'none';
        }else{
            e.target.parentElement.style.display = 'block';
        }
    }
}
// function for search an items
function searchItem(e){
    let text = e.target.value.toLowerCase();
    let ul = document.querySelector('.list-items');
    let items = ul.getElementsByTagName('li');
    Array.from(items).forEach(function (item){
        let itemname = item.firstChild.textContent.toLowerCase();
        if(itemname.indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}

