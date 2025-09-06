const open = document.querySelector('.open');
const close = document.querySelector('.close');
const sideBar = document.querySelector('.sidebar');

open.addEventListener("click", ()=>{
    close.style.display = 'block';
    sideBar.style.display = 'flex';
});
close.addEventListener("click", ()=>{
    close.style.display = 'none';
    sideBar.style.display = 'none'; 
});

const fetchData = 'https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';

document.addEventListener("DOMContentLoaded", ()=>{
    let cardSection = document.querySelector('.card-section');
    function getMenu(){
        fetch(fetchData).then(response =>{
            return response.json();
        }).then(data =>{
            data.forEach((items)=>{
                cardSection.innerHTML += `
                 <div class="card">
                  <img src=${items.imgSrc} alt="card-img" class="card-main-img"/>
                    <div class="card-content">
                        <div class="card-start-content">
                            <p class="food-name">${items.name}</p>
                            <p class="cost">${items.price}/-</p>
                        </div>
                        <div class="card-end-content">
                            <img src="./images/plus-icon.png" alt="plus-icon" />
                        </div>
                    </div>
                 </div>
                `
            })
        })
    }
    getMenu();

    function takeOrder(){
        return new Promise(resolve =>{
            setTimeout(()=>{
                const burgers = [
                    { name: "cheese Burger", price: 5.99},
                    { name: "Veggie Burger", price: 6.49 },
                    { name: "Bacon Burger", price: 7.49 },
                    { name: "Chicken Burger", price: 6.99 },
                    { name: "Mushroom Burger", price: 6.79 },
                    { name: "Double Cheese Burger", price: 8.99 },
                    { name: "BBQ Burger", price: 7.99 },
                    { name: "Fish Burger", price: 7.29 },
                    { name: "Turkey Burger", price: 6.49 },
                    { name: "Spicy Burger", price: 7.49 }
                ];
                const randomBurger = [];
                for(let i=0; i<3; i++){
                    const randomIndex = Math.floor(Math.random() * burgers.length);
                    randomBurger.push(burgers[randomIndex]);
                }
                resolve(randomBurger);
            },2500);
        });
    }

    function orderPrep(){
        return new Promise(resolve =>{
            setTimeout(()=>{
                let orderPrepObj = {order_status: true, paid: false}
                resolve(orderPrepObj);
            },1500);
        })
    }

    function payOrder(){
        return new Promise(resolve =>{
            setTimeout(()=>{
                let payOrderObj = {order_status: true, paid: true}
                resolve(payOrderObj);
            },1000);
        });
    }
    
    function thankYou(){
        alert('Thankyou for eating with us today!');
    }

    function main(){
        takeOrder()
         .then(order =>{
            console.log('Your order: ', order);
            return orderPrep();
         })
         .then(orderStatus =>{
            console.log('Order preparation status: ', orderStatus);
            return payOrder();
         })
         .then(payOrderStatus =>{
            console.log('Payment status: ', payOrderStatus);
            if(payOrderStatus && payOrderStatus.paid){
                thankYou();
            }
         })
    }
    main();
})

function secondScreen(){
    let hideMainImg = document.querySelector('.hero-img');
    hideMainImg.style.display = 'none';
}