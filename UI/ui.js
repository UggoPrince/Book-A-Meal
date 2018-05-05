
// handle the loading of header.html into the header
var xmlhObj;
var currentPage;
var nav1;
var mobileNavButton;
var mobileNav;
var closeMobileNav;
var mobileNavOpen = false;
var widthChange;

const ajaxREQ = new XMLHttpRequest();

/*class AjaxReq
{
	constructor(url, id, sendData, method)
	{
		this.url = url;
		this.id = id;
		this.sendData = sendData;
		this.method = method;
		this.req = new XMLHttpRequest();
		this.req.open(this.method, url);
	} // end constructor

	sender()
	{
		this.req.send(this.sendData);
	} // end method sender

	reqReadyStateChange()
	{
		let resp = this.req;
		if(resp.readyState == 4 && resp.status == 200)
			document.getElementById(this.id).innerHTML = resp.responseText;
	} // end method reqReadyStateChange
} // end class AjaxReq
*/

let menuBank = 
			[
				{
					"name": "Ben",
					"menu":{
						"item1":{
							"name":"Rice and Stew",
							"price": "N250",
							"image": "meal1.png"
						},
						"item2":{
							"name":"Okra Soup",
							"price": "N300",
							"image": "meal2.jpg"
						},
						"item3":{
							"name":"Egusi and Eba",
							"price": "N250",
							"image": "meal3.jpg"
						},
						"item4":{
							"name":"Amala and Ewedu",
							"price": "N300",
							"image": "meal4.jpg"
						},
						"item5":{
							"name":"Pizza",
							"price": "N500",
							"image": "meal5.jpg"
						},
						"item6":{
							"name":"Fried Rice",
							"price": "N400",
							"image": "meal6.jpg"
						},
						"item7":{
							"name":"Tea",
							"price": "N300",
							"image": "meal8.jpg"
						},
						"item8":{
							"name":"Egusi and Eba",
							"price": "N250",
							"image": "meal3.jpg"
						}
					}
				},
				{
					"name":"Agnes",
					"menu":{
						"item1":{
							"name":"Dodo and Eggs",
							"price": "N350",
							"image": "meal7.jpg"
						},
						"item2":{
							"name":"Tea",
							"price": "N300",
							"image": "meal8.jpg"
						},
						"item3":{
							"name":"Egusi and Eba",
							"price": "N250",
							"image": "meal3.jpg"
						},
						"item4":{
							"name":"Amala and Ewedu",
							"price": "N300",
							"image": "meal4.jpg"
						},
						"item5":{
							"name":"Pizza",
							"price": "N500",
							"image": "meal5.jpg"
						},
						"item6":{
							"name":"Fried Rice",
							"price": "N400",
							"image": "meal6.jpg"
						},
						"item7":{
							"name":"Egusi and Eba",
							"price": "N250",
							"image": "meal3.jpg"
						},
						"item8":{
							"name":"Amala and Ewedu",
							"price": "N300",
							"image": "meal4.jpg"
						}
					}
				},
				{
					"name":"Keshia",
					"menu":{
						"item1":{
							"name":"Pizza",
							"price": "N350",
							"image": "meal5.jpg"
						},
						"item2":{
							"name":"Tea",
							"price": "N300",
							"image": "meal8.jpg"
						},
						"item3":{
							"name":"Egusi and Eba",
							"price": "N250",
							"image": "meal3.jpg"
						},
						"item4":{
							"name":"Amala and Ewedu",
							"price": "N300",
							"image": "meal4.jpg"
						},
						"item5":{
							"name":"Egusi and Eba",
							"price": "N400",
							"image": "meal3.jpg"
						},
						"item6":{
							"name":"Fried Rice",
							"price": "N400",
							"image": "meal6.jpg"
						},
						"item7":{
							"name":"Rice and Stew",
							"price": "N250",
							"image": "meal1.png"
						},
						"item8":{
							"name":"Okra Soup",
							"price": "N300",
							"image": "meal2.jpg"
						}
					}
				}
			];

let catererBank = 
				[
					{
						"name":"Ben",
						"id" : 1,
						"bisname":"Ben kitchens",
						"image": "chefavatar.jpg",
						"location":"Ikoyi"
					},
					{
						"name":"Agnes",
						"id": 2,
						"bisname":"OK Restaurant",
						"image": "chefavatar.jpg",
						"location":"Victoria Island"
					},
					{
						"name":"Keshia",
						"id":3,
						"bisname":"Kesha Bar and Eatery",
						"image": "chefavatar.jpg",
						"location":"Ikorodu Road"
					},
					{
						"name":"Peter",
						"id": 4,
						"bisname":"The Chef",
						"image": "chefavatar.jpg",
						"location":"Bode Thomas"
					},
					{
						"name":"Jane",
						"id": 5,
						"bisname":"Fresh Bakery",
						"image": "chefavatar.jpg",
						"location":"Ojuelebga"
					},
					{
						"name":"John",
						"id": 6,
						"bisname":"Ten Ten Eatery",
						"image": "chefavatar.jpg",
						"location":"Ojuelebga"
					},
				];


function getPage(url, id){
	$(document).ready(function(e) {
		$(id).load(url);
		//$('#footer').load('footer.html');
	});
}

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
}

function setup(){
}

let countDummyMenu = 0;

function menuForIndex(){
	let menuDiv = document.getElementById('indexMenu');
	let holder = " ";
	let countEnd = 8; // display only first six menu items
	if(countDummyMenu < menuBank.length)
	{
		let j = countDummyMenu;
		//alert(j);
		holder = '<p>' + menuBank[j].name + "'s Today Menu."  + '</p>';

		let aDiv = document.createElement('div');

		for (let i = 0; i < 8; i++)
		{
			let item = "item" + (i + 1);

			let div = document.createElement("div");
			div.className = "itemBlock";

			let img = document.createElement("img");
			img.src = "image/" + menuBank[j].menu[item].image;

			let br = document.createElement('br');

			let name = document.createElement('span');
			name.innerHTML = menuBank[j].menu[item].name;
			name.className = "foodNameSpan";
			
			let price = document.createElement('span');
			price.innerHTML = "Price: "+ menuBank[j].menu[item].price;
			price.className = "foodPriceSpan";

			div.appendChild(img);
			
			div.appendChild(name);
			div.appendChild(price);

			aDiv.appendChild(div);

		}
		if(countDummyMenu == menuBank.length) --countDummyMenu;
		menuDiv.innerHTML = holder;
		menuDiv.appendChild(aDiv);
	}
} // end function menu For index

let countMenu = 0;
var presentCat = 0;
let presentSide = 0;

function loadMenu(){
	let menuDiv = document.getElementById('menu');
	let j = presentCat;
	let k = 0;
	if( presentCat < menuBank.length)
	{
		let holder = '<span>' + menuBank[j].name + "'s Today Menu."  + '</span>';
		let aDiv = document.createElement('div');
		for(let i = countMenu; i < 4; i++)
		{
			let item = "item" + (i + 1);
			let br = document.createElement('br');

			if(k == 2 || k == 4) aDiv.appendChild(br);

			let div = document.createElement("form");
			let catId = catererBank
			div.setAttribute('name', (j+1));
			div.className = "foodBlock";

			let img = document.createElement("img");
			img.src = "image/" + menuBank[j].menu[item].image;

			let name = document.createElement('span');
			name.innerHTML = menuBank[j].menu[item].name;
			name.className = "foodNameSpan";
			
			let price = document.createElement('span');
			price.innerHTML = "Price: "+ menuBank[j].menu[item].price;
			price.className = "foodPriceSpan";

			let button = document.createElement('input');
			button.setAttribute('type', 'button');
			button.setAttribute('value', 'Book')

			let dSpan = document.createElement('span');

			div.appendChild(img);
			
			div.appendChild(name);
			div.appendChild(price);
			dSpan.innerHTML = "Day " + '<input type="date"/>';
			div.appendChild(dSpan);
			div.appendChild(button);

			aDiv.appendChild(div);
			//alert('yes')
			++k;
			++presentSide;
		}
		++countMenu;
		//let date = '<input type="date" />'
		menuDiv.innerHTML = holder;
		menuDiv.appendChild(aDiv);
	}
}

let myPresentCat = 0;
let myCountOrders = 0;

function loadMyOrders(){
	let menuDiv = document.getElementById('myorders');
	let j = myPresentCat;
	let k = 0;
	if( myPresentCat < menuBank.length)
	{
		let holder = '<p><strong>My Orders</strong></p>';
		let aDiv = document.createElement('div');
		for(let i = myCountOrders; i < 2; i++)
		{
			let item = "item" + (i + 1);
			let br = document.createElement('br');

			if(k == 4) aDiv.appendChild(br);

			let div = document.createElement("form");
			let catId = catererBank
			div.setAttribute('name', (j+1));
			div.className = "foodBlock";

			let bookday = document.createElement('span');
			bookday.innerHTML = "Booked on dd/mm/yyyy";
			bookday.style.fontSize = "14px";

			let img = document.createElement("img");
			img.src = "image/" + menuBank[j].menu[item].image;

			let name = document.createElement('span');
			name.innerHTML = menuBank[j].menu[item].name;
			name.className = "foodNameSpan";
			
			let price = document.createElement('span');
			price.innerHTML = "Price: "+ menuBank[j].menu[item].price;
			price.className = "foodPriceSpan";

			let button = document.createElement('input');
			button.setAttribute('type', 'button');
			button.setAttribute('value', 'Rebook')

			let dSpan = document.createElement('span');

			div.appendChild(bookday);
			div.appendChild(img);
			
			div.appendChild(name);
			div.appendChild(price);
			dSpan.innerHTML = "Change Day " + '<input type="date"/>';
			dSpan.style.fontSize = '14px';
			div.appendChild(dSpan);
			div.appendChild(button);

			aDiv.appendChild(div);
			//alert('yes')
			++k;
			++presentSide;
		}
		++countMenu;
		//let date = '<input type="date" />'
		menuDiv.innerHTML = holder;
		menuDiv.appendChild(aDiv);
	}
} // end function loadOrders

function regILinks(){
	document.getElementById('preLink').addEventListener('click', callMenuForIndex);
	document.getElementById('nextLink').addEventListener('click', callMenuForIndex);
} // end function regILinks

function callMenuForIndex(e){
	let target = e.target;
	if(target.name == "preLink" && countDummyMenu > 0){
		--countDummyMenu;
		menuForIndex();
	}
	else if(target.name == "nextLink" && countDummyMenu < menuBank.length ){
		++countDummyMenu;
		if(countDummyMenu == menuBank.length) --countDummyMenu;
		else{
			menuForIndex();
		}
	}
}

function regMLinks(){
	document.getElementById('preLinkMenu').addEventListener('click', showNextMenuSide);
	document.getElementById('nextLinkMenu').addEventListener('click', showNextMenuSide);
} // end function regILinks

function showNextMenuSide(e){
	/*let target = e.target;
	if(target.name == "preLinkMenu" && presentSide > 0){
		--countMenu;
		presentCat -= 4;
		//alert(presentSide);
		loadMenu();
	}
	if(target.name == "nextLinkMenu" && presentSide < menuBank[presentCat].length){
		alert(target.name);
		loadMenu();
	}*/
}

function loadLatestCaterer(){
	let count = 3;
	let holder = document.createElement('div');
	holder.style.display = "inline-block";
	holder.style.width = "99%";
	for(let i = 0; i < count; i++)
	{
		let div = document.createElement('div');
		div.className = "catBlock";

		let img = document.createElement('img');
		img.src = "image/" + catererBank[i].image;

		let bisname = document.createElement('span');
		bisname.innerHTML = catererBank[i].bisname;

		let locate = document.createElement('span');
		locate.innerHTML = "location: " + catererBank[i].location;

		let input = document.createElement('input');
		input.setAttribute('type', 'button');
		input.setAttribute('name', catererBank[i].id);
		input.setAttribute('value', 'Menu');

		let textDiv = document.createElement('div');

		textDiv.appendChild(bisname);
		textDiv.appendChild(locate);
		textDiv.appendChild(input);

		div.appendChild(img);
		div.appendChild(textDiv);
		holder.appendChild(div);
	}
	document.getElementById('newCatererNotice').appendChild(holder);
}

function loadMyCaterers(){
	let count = 3;
	let holder = document.createElement('div');
	holder.style.display = "inline-block";
	holder.style.width = "99%";
	for(let i = 0; i < count; i++)
	{
		let div = document.createElement('div');
		div.className = "caterersBlock";


		let img = document.createElement('img');
		img.src = "image/" + catererBank[i].image;

		let bisname = document.createElement('span');
		bisname.innerHTML = catererBank[i].bisname;

		let locate = document.createElement('span');
		locate.innerHTML = "location: " + catererBank[i].location;

		let input = document.createElement('input');
		input.setAttribute('type', 'button');
		input.setAttribute('name', catererBank[i].id);
		input.setAttribute('value', 'Unfollow');

		let textDiv = document.createElement('div');

		textDiv.appendChild(bisname);
		textDiv.appendChild(locate);
		textDiv.appendChild(input);

		div.appendChild(img);
		div.appendChild(textDiv);
		holder.appendChild(div);
	}
	document.getElementById('mycaterers').innerHTML = "<p><strong>My Caterers</strong></p>"
	document.getElementById('mycaterers').appendChild(holder);
}

function loadSomeCaterers(){
	let count = 6;
	let holder = document.createElement('div');
	holder.style.display = "inline-block";
	holder.style.width = "99%";
	for(let i = 3; i < count; i++)
	{
		let div = document.createElement('div');
		div.className = "catBlock";

		let img = document.createElement('img');
		img.src = "image/" + catererBank[i].image;

		let bisname = document.createElement('span');
		bisname.innerHTML = catererBank[i].bisname;

		let locate = document.createElement('span');
		locate.innerHTML = "location: " + catererBank[i].location;

		let input = document.createElement('input');
		input.setAttribute('type', 'button');
		input.setAttribute('name', catererBank[i].id);
		input.setAttribute('value', 'Follow');

		let textDiv = document.createElement('div');

		textDiv.appendChild(bisname);
		textDiv.appendChild(locate);
		textDiv.appendChild(input);

		div.appendChild(img);
		div.appendChild(textDiv);
		holder.appendChild(div);
	}
	document.getElementById('innerSideDiv').appendChild(holder);
}

function loadSomeCaterersIndex(){
	let count = 6;
	let holder = document.createElement('div');
	holder.style.display = "inline-block";
	holder.style.width = "99%";
	for(let i = 3; i < count; i++)
	{
		let div = document.createElement('div');
		div.className = "catBlock";

		let img = document.createElement('img');
		img.src = "image/" + catererBank[i].image;

		let bisname = document.createElement('span');
		bisname.innerHTML = catererBank[i].bisname;

		let locate = document.createElement('span');
		locate.innerHTML = "location: " + catererBank[i].location;

		/*let input = document.createElement('input');
		input.setAttribute('type', 'button');
		input.setAttribute('name', catererBank[i].id);
		input.setAttribute('value', 'Follow');*/

		let textDiv = document.createElement('div');

		textDiv.appendChild(bisname);
		textDiv.appendChild(locate);
		//textDiv.appendChild(input);

		div.appendChild(img);
		div.appendChild(textDiv);
		holder.appendChild(div);
	}
	document.getElementById('innerSideDiv').appendChild(holder);
}


function loadBookedMeals(){
	let count = 6;
	let holder = document.createElement('div');
	holder.style.display = "inline-block";
	holder.style.width = "99%";
	for(let i = 3; i < count; i++)
	{
		let div = document.createElement('div');
		div.className = "catBlock";

		let img = document.createElement('img');
		img.src = "image/" + catererBank[i].image;

		let bisname = document.createElement('span');
		bisname.innerHTML = catererBank[i].bisname;

		let locate = document.createElement('span');
		locate.innerHTML = "location: " + catererBank[i].location;

		let input = document.createElement('input');
		input.setAttribute('type', 'button');
		input.setAttribute('name', catererBank[i].id);
		input.setAttribute('value', 'Follow');

		let textDiv = document.createElement('div');

		textDiv.appendChild(bisname);
		textDiv.appendChild(locate);
		textDiv.appendChild(input);

		div.appendChild(img);
		div.appendChild(textDiv);
		holder.appendChild(div);
	}
	document.getElementById('innerSideDiv2').appendChild(holder);
}



function hide_A_ManageForm(show, hide1, hide2){
	document.getElementById(show).style.display = "inline-block";
	document.getElementById(hide1).style.display = "none";
	document.getElementById(hide2).style.display = "none";
} // end function hide_A_ManageForm

function hide_A_CatererForm(show, hide){
	document.getElementById(show).style.display = "block";
	document.getElementById(show).style.margin = "auto";
	document.getElementById(hide).style.display = "none";
} // 

document.addEventListener('DOMContentLoaded', setup);