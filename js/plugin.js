const navBtn = document.getElementById('nav-btn');
const cacelBtn = document.getElementById('cancelbtn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
navBtn.addEventListener('click', function(){
    sideNav.classList.add('show');
    modal.classList.add('showmodal');
});
cacelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showmodal');
});
window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showmodal');
    }
})