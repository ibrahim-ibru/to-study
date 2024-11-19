let fetchdata = fetch("https://dummyjson.com/products").then((res) => res.json())
fetchdata.then((data) => {
    console.log(data.products);
    product = data.products
    str = ``
    product.map((el) => {
        str += `
         <div class="product-card" onclick="newPage(${el})">
                <div class="product-img">
                    <img src="${el.thumbnail}" alt="">
                </div>
                <div class="product-data">
                    <h3>${el.title}</h3>
                    <p  style="font-weight: bold;">${el.brand}</p>
                    <p style="background-color:green; display:inline;border-radius:5px; padding:3px;">
            <i style="color: gold; background-color: transparent;" class="bi bi-star-fill"></i>
                    ${el.rating}</p>
                    <p style="color: green;">${el.discountPercentage}% Discount</p>
                    <button>view</button>
                </div>
            </div>
        `
    })
    document.querySelector(".products").innerHTML = str



})
function newPage(el) {
    console.log(el.id);
    
    fetch(`https://dummyjson.com/products/${el.id}/`).then((res) => res.json()).then((data) => {
        // console.log(data);
        let datas = []
        datas.push(data)
        console.log(datas);



        //             let total=(el.price/1-el.discountPercentage)
        //             str1+=`
        //             <div class="main">
        // <div class="sub-main1">
        //     <div class="img-sub-main">

        //     <div class="img-list">
        //     <div><img src="${el.thumbnail}" alt=""></div>
        //     <div><img src="${el.thumbnail}" alt=""></div>
        //     <div><img src="${el.thumbnail}" alt=""></div>
        //     <div><img src="${el.thumbnail}" alt=""></div>
        //     <div><img src="${el.thumbnail}" alt=""></div>
        //             <div><img src="${el.thumbnail}" alt=""></div>
        //         </div>
        //         <div class="main-img">
        //         <img src="${el.thumbnail}" alt="">
        //         </div>
        //         </div>
        //         <div class="buttons">
        //         <button>ADD TO CART</button>
        //         <button>BUY NOW</button>
        //         </div>
        //         </div>
        //         <div class="sub-main2">
        //         <h2>${el.title}</h2>
        //         <div ><p class="rating"><span>${el.rating}</span> Ratings</p></div>
        //         <span><b style="font-size:35px; padding: 0 17px 0 0;">${el.price}</b></span> <span style="font-size: 22px; text-decoration: line-through; color: grey; padding: 0 10px 0 0;">${total}</span><span style="color: green;">  ${el.discountPercentage}% off</span><span><div class="flipassured"><img src="/images/flipassured.png" alt=""></div></span>
        //         <p style="font-size: 18px;"><b>Available offers</b></p>
        //         <p style="font-size: 14px;">Bank Offer <span> 5%</span> Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>
        //         <p style="font-size: 14px;">Bank Offer <span> 5%</span> Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>
        //         <p style="font-size: 14px;">Bank Offer <span> 5%</span> Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>
        //         <p style="font-size: 14px;">Bank Offer <span> 5%</span> Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>
        //         <p style="font-size: 14px;">Bank Offer <span> 5%</span> Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>
        //         <div class="exchange">
        //         <div class="ex1" style="border: 1px solid black;">
        //         <div class="left-ex">
        //         <input type="radio" name="" id="">
        //         </div>
        //         <div class="mid-ex">Buy without Exchange</div>
        //         <div class="right-ex">${el.price}</div>
        //         </div>
        //         <div class="ex2" style="border: 1px solid black;">
        //         <div class="left-ex">
        //         <input type="radio" name="" id="">
        //         </div>
        //         <div class="mid-ex">Buy with Exchange</div>
        //         <div class="right-ex">upto ${el.discountPercentage+10}% off</div>
        //         </div>
        //         </div>
        //         </div>
        //         </div>
        //         `
    })

    // document.querySelector(".main-body").innerHTML=str1    
