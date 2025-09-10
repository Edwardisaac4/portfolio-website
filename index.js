const sideBar = document.getElementById('sidebar');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close');

menu.addEventListener('click', function(){
    sideBar.classList.remove('closesidebar')
    sideBar.classList.add('opensidebar')
});

closeBtn.addEventListener('click', function(){
    sideBar.classList.remove('opensidebar')
    sideBar.classList.add('closesidebar')
});