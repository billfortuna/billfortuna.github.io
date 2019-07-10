//get login element
var login = document.getElementById('modal');
//get open login button
var showlogin = document.getElementById('showlogin');
//get close button
var closeBtn = document.getElementById('closeBtn');

//detect clicks
showlogin.addEventListener('click', openLogin);
//detect close button click
closeBtn.addEventListener('click', closeLogin);

//fucntion to open login
function openLogin(){
	login.style.display = "block";
}
function closeLogin(){
	login.style.display = "none";
}