
// for gender switch button
var btn = document.getElementById('btn')

function leftClick() {
	btn.style.left = '0'
}

function rightClick() {
	btn.style.left = "50%";
}


const product = [

    {
        id:0,
        image: 'assets/product_image.png',
        title: 'Dress',
		card_location: 'Maltepe,İstanbul',
		text: 'Elegance weaved in every stitch, a timeless masterpiece for your dream wedding day.',
        price: 500,
		size: 38,
    },
	{
        id:2,
        image: 'assets/greydress.png',
        title: 'Mini Dress',
		card_location: 'Beykoz,İstanbul',
		text: 'Anja In Bolivian Mini Dress',
        price: 850,
		size: 36,
    },
	{
        id:3,
        image: 'assets/channel-bag.png',
        title: 'CHANEL Beg',
		card_location: 'Beykoz,İstanbul',
		text: 'Classic and elegant chanel beg for all styles',
        price: 120,
		size: 'Small',
    },
	{
        id:4,
        image: 'assets/dress2.png',
        title: ' Henna Dress',
		card_location: 'Üsküdar,İSTANBUL',
		text: 'Elegance weaved in every stitch, a timeless masterpiece for your dream wedding day.',
        price: 120,
		size: 400,
    },
	{
        id:5,
        image: 'assets/earring.png',
        title: 'Diamond Earrings',
		card_location: 'Sarıyer,İSTANBUL',
		text: 'Exclusive diamond earring by harry winston',
        price: 2300,
		size: 'M',
    },
	{
        id:6,
        image: 'assets/dress3.png',
        title: 'Dress in Black',
		card_location: 'Üsküdar,İSTANBUL',
		text: 'Black dress for henna nights, special event or more',
        price: 120,
		size: 'Small',
    },
	{
        id:7,
        image: 'assets/product_image.png',
        title: 'Dress',
		card_location: 'Beşiktaş,İSTANBUL',
		text: 'Elegance weaved in every stitch, a timeless masterpiece for your dream wedding day.',
        price: 940,
		size: 38,
    },
   
];
const categories = [...new Set(product.map((item)=> 
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image,title,price,card_location, text, size} = item;
    return(
			`<div class="card" style="width: 18rem;">
			<div class="like-button">
			  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
				<path d="M13.5 4.05313C20.4349 -3.07499 37.7723 9.39922 13.5 25.4375C-10.7723 9.39922 6.56506 -3.07499 13.5 4.05313Z" stroke="#060047" stroke-width="2"/>
			  </svg>
			</div>
			<img src=${image} class="card-img-top" alt="...">
			<div class="card-body">
				<div class="card-title">${title}</div>
				<div class="location-container">
					<div class="card-location">${card_location}</div>
					<div class="location-icon">
					  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.9 3.6C0.9 1.61178 2.51177 0 4.5 0C6.48822 0 8.1 1.61178 8.1 3.6C8.1 5.43583 6.72584 6.9507 4.95 7.17215V12.15C4.95 12.3985 4.74853 12.6 4.5 12.6C4.25147 12.6 4.05 12.3985 4.05 12.15V7.17215C2.27416 6.9507 0.9 5.43583 0.9 3.6ZM3.14395 11.3168C3.18457 11.562 3.01873 11.7937 2.77354 11.8343C2.13324 11.9404 1.62232 12.0995 1.28469 12.2774C1.11565 12.3664 1.00998 12.4499 0.951468 12.5162C0.923384 12.548 0.910423 12.5711 0.904743 12.5842C0.901973 12.5905 0.90088 12.5946 0.900442 12.5967C0.900023 12.5986 0.9 12.6 0.9 12.6C0.9 12.6 0.899956 12.6022 0.901375 12.6069C0.902902 12.6119 0.906672 12.6218 0.915784 12.6367C0.934884 12.6678 0.973836 12.7146 1.04681 12.7721C1.19539 12.8892 1.43827 13.0143 1.77852 13.1277C2.45431 13.353 3.41653 13.5 4.5 13.5C5.58347 13.5 6.54569 13.353 7.22148 13.1277C7.56173 13.0143 7.80461 12.8892 7.95319 12.7721C8.02616 12.7146 8.06512 12.6678 8.08422 12.6367C8.09333 12.6218 8.0971 12.6119 8.09863 12.6069C8.10001 12.6024 8.1 12.6001 8.1 12.6001C8.1 12.6001 8.09998 12.5986 8.09956 12.5967C8.09912 12.5946 8.09803 12.5905 8.09526 12.5842C8.08958 12.5711 8.07662 12.548 8.04853 12.5162C7.99002 12.4499 7.88435 12.3664 7.71531 12.2774C7.37768 12.0995 6.86676 11.9404 6.22646 11.8343C5.98127 11.7937 5.81543 11.562 5.85605 11.3168C5.89667 11.0716 6.12835 10.9058 6.37354 10.9464C7.06678 11.0612 7.68087 11.2419 8.13485 11.4811C8.55079 11.7003 9 12.0613 9 12.6C9 12.9834 8.7665 13.277 8.51027 13.4789C8.24897 13.6849 7.89874 13.8506 7.50608 13.9815C6.71606 14.2449 5.65328 14.4 4.5 14.4C3.34672 14.4 2.28394 14.2449 1.49391 13.9815C1.10126 13.8506 0.751033 13.6849 0.489731 13.4789C0.233502 13.277 0 12.9834 0 12.6C0 12.0613 0.449207 11.7003 0.865154 11.4811C1.31913 11.2419 1.93322 11.0612 2.62646 10.9464C2.87165 10.9058 3.10333 11.0716 3.14395 11.3168Z" fill="black"/>
					  </svg>
					</div>
				</div>
				<div class="card-text">${text}</div>
				<div class="card-size">Size: ${size}</div>
			</div>
	  
			<div class="card-bottom">
			  <div class="card-bottom-text">
				${price} ₺ <span class="card-bottom-text2">/ day</span>
			  </div>`+"<button class='card-bottom-button' onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
			  `</div>
		</div>`
        
    )
}).join('')

const dailyProduct = [

    {
        id:1,
        image: 'assets/makosen-shoes.png',
        title: 'Dress',
		card_location: 'Maltepe,İstanbul',
		text: 'Elegance weaved in every stitch, a timeless masterpiece for your dream wedding day.',
        price: 400,
		size: 40,
    },
	{
        id:2,
        image: 'assets/makosen-shoes.png',
        title: 'Mini Dress',
		card_location: 'Beykoz,İstanbul',
		text: 'Anja In Bolivian Mini Dress',
        price: 350,
		size: 38,
    },
	{
        id:3,
        image: 'assets/ekosedress.png',
        title: 'Ekose Dress',
		card_location: 'Nişantaşı, Bebek',
		text: 'Classic and daily so chic dresses',
        price: 350,
		size: 'Medium',
    },
	{
        id:4,
        image: 'assets/whitebag.png',
        title: ' White Beg',
		card_location: 'Kadıköy,İstanbul',
		text: 'for casual, night and special events for your style',
        price: 120,
		size: 40,
    },
	{
        id:5,
        image: 'assets/jean.png',
        title: 'Skinny Jean',
		card_location: 'Bağdat Caddesi,İSTANBUL',
		text: 'For street style and comfortable jeans with high quality',
        price: 2300,
		size: '40-42',
    },
	{
        id:6,
        image: 'assets/sneakers.png',
        title: 'Nike Sneakers',
		card_location: 'Üsküdar,İSTANBUL',
		text: 'Like new sneakers for daily usage',
        price: 120,
		size: 38,
    },
	{
        id:7,
        image: 'assets/cottondress.png',
        title: 'Cotton Dress',
		card_location: 'Beşiktaş,İSTANBUL',
		text: 'Spun from wool, the gold-tone safety pin and logo patch at the front adds a branded touch.',
        price: 940,
		size: 38,
    },
   
];
const dailyCategories = [...new Set(dailyProduct.map((item)=> 
    {return item}))]
    let y=0;

document.getElementById('root2').innerHTML = dailyProduct.map((item)=>
{
    var {image,title,price,card_location, text, size} = item;
    return(
			`<div class="card" style="width: 18rem;">
			<div class="like-button">
			  <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
				<path d="M13.5 4.05313C20.4349 -3.07499 37.7723 9.39922 13.5 25.4375C-10.7723 9.39922 6.56506 -3.07499 13.5 4.05313Z" stroke="#060047" stroke-width="2"/>
			  </svg>
			</div>
			<img src=${image} class="card-img-top" alt="...">
			<div class="card-body">
				<div class="card-title">${title}</div>
				<div class="location-container">
					<div class="card-location">${card_location}</div>
					<div class="location-icon">
					  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M0.9 3.6C0.9 1.61178 2.51177 0 4.5 0C6.48822 0 8.1 1.61178 8.1 3.6C8.1 5.43583 6.72584 6.9507 4.95 7.17215V12.15C4.95 12.3985 4.74853 12.6 4.5 12.6C4.25147 12.6 4.05 12.3985 4.05 12.15V7.17215C2.27416 6.9507 0.9 5.43583 0.9 3.6ZM3.14395 11.3168C3.18457 11.562 3.01873 11.7937 2.77354 11.8343C2.13324 11.9404 1.62232 12.0995 1.28469 12.2774C1.11565 12.3664 1.00998 12.4499 0.951468 12.5162C0.923384 12.548 0.910423 12.5711 0.904743 12.5842C0.901973 12.5905 0.90088 12.5946 0.900442 12.5967C0.900023 12.5986 0.9 12.6 0.9 12.6C0.9 12.6 0.899956 12.6022 0.901375 12.6069C0.902902 12.6119 0.906672 12.6218 0.915784 12.6367C0.934884 12.6678 0.973836 12.7146 1.04681 12.7721C1.19539 12.8892 1.43827 13.0143 1.77852 13.1277C2.45431 13.353 3.41653 13.5 4.5 13.5C5.58347 13.5 6.54569 13.353 7.22148 13.1277C7.56173 13.0143 7.80461 12.8892 7.95319 12.7721C8.02616 12.7146 8.06512 12.6678 8.08422 12.6367C8.09333 12.6218 8.0971 12.6119 8.09863 12.6069C8.10001 12.6024 8.1 12.6001 8.1 12.6001C8.1 12.6001 8.09998 12.5986 8.09956 12.5967C8.09912 12.5946 8.09803 12.5905 8.09526 12.5842C8.08958 12.5711 8.07662 12.548 8.04853 12.5162C7.99002 12.4499 7.88435 12.3664 7.71531 12.2774C7.37768 12.0995 6.86676 11.9404 6.22646 11.8343C5.98127 11.7937 5.81543 11.562 5.85605 11.3168C5.89667 11.0716 6.12835 10.9058 6.37354 10.9464C7.06678 11.0612 7.68087 11.2419 8.13485 11.4811C8.55079 11.7003 9 12.0613 9 12.6C9 12.9834 8.7665 13.277 8.51027 13.4789C8.24897 13.6849 7.89874 13.8506 7.50608 13.9815C6.71606 14.2449 5.65328 14.4 4.5 14.4C3.34672 14.4 2.28394 14.2449 1.49391 13.9815C1.10126 13.8506 0.751033 13.6849 0.489731 13.4789C0.233502 13.277 0 12.9834 0 12.6C0 12.0613 0.449207 11.7003 0.865154 11.4811C1.31913 11.2419 1.93322 11.0612 2.62646 10.9464C2.87165 10.9058 3.10333 11.0716 3.14395 11.3168Z" fill="black"/>
					  </svg>
					</div>
				</div>
				<div class="card-text">${text}</div>
				<div class="card-size">Size: ${size}</div>
			</div>
	  
			<div class="card-bottom">
			  <div class="card-bottom-text">
				${price} ₺ <span class="card-bottom-text2">/ day</span>
			  </div>`+"<button class='card-bottom-button' onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
			  `</div>
		</div>`
        
    )
}).join('')


var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}


function delElement(a){
    cart.splice(a,1);
    displaycart();
}



function displaycart(a){
    let j=0, total=0;

    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = 0+".00₺";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items) =>
        {
            var {image,title,price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = total+".00 ₺";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>${price}.00 ₺</h2>` + 
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('');
    }
}







