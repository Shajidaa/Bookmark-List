function remove(btn) {
console.log('click');
btn.parentElement.remove();
console.log('remove btn');

  
}

document.getElementById('add-btn').addEventListener('click',function () {
  const bookName=document.getElementById('bookmaker-name').value;
    const bookUrl=document.getElementById('book-url').value;
    if (bookName.trim() === '' ||  bookUrl.trim() === '') {
     alert(`Please fill up `);
    return;
    }
    
    const newDiv=document.createElement('div');
    newDiv.innerHTML=`
    <div id='cart' class="border-gray-300 border-1 flex justify-between p-4 mb-2">
          <h1 id="title-name" class="md:text-2xl text-xl font-medium text-green-500">
            ${bookName}
          </h1>
          <button
            id=' ' onclick="remove(this)"
            class="bg-red-600 remove-btn md:p-5 p-4 font-medium text-white md:text-2xl text-xl btn"
          >
            Remove
          </button>
        </div>
    `  
 
   const  addCart=document.getElementById('add-cart');
    addCart.appendChild(newDiv);
   
document.getElementById('bookmaker-name').value='';
   document.getElementById('book-url').value='';
 
})

// document.getElementById('add-cart').addEventListener('click',function(e){
//   if (e.target.classList.contains('remove-btn')) {
//     console.log('click');
//     e.target.parentElement.remove();

//     console.log('element remove');
    
    
//   }
// })