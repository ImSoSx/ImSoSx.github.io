const btn = document.querySelector('.tooglethm');

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  const list =document.querySelectorAll('.light-theme, .content, header, #footer, html');

  for (const item of list){
    item.classList.toggle('dark-theme');
  }
  //document.body.classList.toggle('dark-theme');  
  //document.getElementsByClassName('content').classList.add('dark-theme');
})