const lists = document.querySelectorAll('.list');
let rightList= document.getElementById('right');
let leftList= document.getElementById('left');

for(list of lists){
    list.addEventListener('dragstart', addEventListener);    
}

function addEventListener(e){
    let selectedItem= e.target;

    rightList.addEventListener('dragover', function(e){
        e.preventDefault();
    });

    rightList.addEventListener('drop', function(e){
       rightList.appendChild(selectedItem); 
       selectedItem = null;
       
    });

    leftList.addEventListener('dragover', function(e){
        e.preventDefault();
    });

    leftList.addEventListener('drop', function(e){
       leftList.appendChild(selectedItem); 
       selectedItem = null;
       
    });
}
