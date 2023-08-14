var items=document.getElementsByClassName('list-group-item');
console.log(items);

console.log(items[1]);
items[1].textContent = 'hello';

var items=document.getElementsByTagName('li');
console.log(items);

console.log(items[2]);
items[2].textContent = 'hello ooo';
items[2].style.fontweight='bold';
items[3].style.display='none';

var secound=document.querySelector('li:nth-child(2)');
secound.style.color='blue';

var odd=document.querySelectorAll('li');
for(var i=0;i<=odd.length;i+2){
    odd[i].style.backgroundColor='green';
    
}
