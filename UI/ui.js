
// handle the loading of header.html into the header
var xmlhObj;
var currentPage;
var nav1;
var mobileNavButton;
var mobileNav;
var closeMobileNav;
var mobileNavOpen = false;
var widthChange;

$(document).ready(function(e) {
	$('#header').load('header.html');
	//$('#footer').load('footer.html');
});

function toggleMobileMenu(e){
	if(!mobileNavOpen)
	{
		mobileNavOpen = true;
		mobileNav.style.display = "block";
	}
	else
	{
		mobileNavOpen = false;
		mobileNav.style.display = "none"
	}
}

function WidthChange(widthChange){
	if(widthChange.matches){
		mobileNav.style.display = "none";
	}
}

function loadNav(){
	var url = location.href;
	var point = url.lastIndexOf('/');
	var page = url.substring(point+1);

	nav1 = document.getElementById('nav1');
	mobileNavButton = document.getElementById('mobileNavButton');
	mobileNav = document.getElementById('nav2');
	closeMobileNav = document.getElementById('closeMobileNav');

	if(matchMedia)
	{
		widthChange = window.matchMedia("(min-width: 500px)");
		widthChange.addEventListener('WidthChange', WidthChange);
	}

	try{
	mobileNavButton.addEventListener('click', toggleMobileMenu);
	closeMobileNav.addEventListener('click', toggleMobileMenu);
}
catch(e)
{
	alert(e.message);
}

	if(page == "index.html")
	{

		for(var i = 1; i < 4; i++)
		{
			document.getElementById('a' + i).style.display = "inline-block";
			document.getElementById('b' + i).style.display = "inline-block";
		}
	}
	else if(page == "signin.html" )
	{
		document.getElementById('a1').style.display = "inline-block";
		document.getElementById('a3').style.display = "inline-block";
		document.getElementById('b1').style.display = "inline-block";
		document.getElementById('b3').style.display = "inline-block";
	}
	else if(page == "signup.html")
	{
		document.getElementById('a1').style.display = "inline-block";
		document.getElementById('a2').style.display = "inline-block";
		document.getElementById('b1').style.display = "inline-block";
		document.getElementById('b2').style.display = "inline-block";
	}
	else if(page == "menu.html")
	{
		document.getElementById('a1').style.display = "inline-block";
		document.getElementById('a2').innerHTML = "Logout";
		document.getElementById('a2').style.display = "inline-block";

		document.getElementById('b1').style.display = "inline-block";
		document.getElementById('b2').firstChild.innerHTML = "Logout";
		document.getElementById('b2').style.display = "inline-block";
	}
	else if(page == "manage_meals.html" || page == "set_menu.html" || page == "order_history.html")
	{
		document.getElementById('a1').style.display = "inline-block";
		document.getElementById('a4').style.display = "inline-block";
		document.getElementById('a5').style.display = "inline-block";
		document.getElementById('a6').style.display = "inline-block";
		document.getElementById('a2').innerHTML = "Logout";
		document.getElementById('a2').style.display = "inline-block";

		document.getElementById('b1').style.display = "inline-block";
		document.getElementById('b4').style.display = "inline-block";
		document.getElementById('b5').style.display = "inline-block";
		document.getElementById('b6').style.display = "inline-block";
		document.getElementById('b2').firstChild.innerHTML = "Logout";
		document.getElementById('b2').style.display = "inline-block";
	}
}

function setup(){
}

document.addEventListener('DOMContentLoaded', setup);