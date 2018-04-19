
// handle the loading of header.html into the header
var xmlhObj;
var currentPage;
var nav1;
var mobileNavButton;
var mobileNav;
var closeMobileNav;
var mobileNavOpen = false;

$(document).ready(function(e) {
	$('#header').load('header.html');
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

function loadNav(){
	var url = location.href;
	var point = url.lastIndexOf('/');
	var page = url.substring(point+1);

	nav1 = document.getElementById('nav1');
	mobileNavButton = document.getElementById('mobileNavButton');
	mobileNav = document.getElementById('nav2');
	closeMobileNav = document.getElementById('closeMobileNav');

	mobileNavButton.addEventListener('click', toggleMobileMenu);
	closeMobileNav.addEventListener('click', toggleMobileMenu);

	if(page == "signup.html" || page == "signin.html" || page == "index.html")
	{

		for(var i = 1; i < 4; i++)
		{
			document.getElementById('a' + i).style.display = "inline-block";
			document.getElementById('b' + i).style.display = "inline-block";
		}
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
	else if(page == "manage_meals.html" || page == "set_menu.html" || page == "order_history")
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