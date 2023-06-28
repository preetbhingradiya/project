let store = JSON.parse(localStorage.getItem("cart-add")) || [];
console.log(store);

const product = (data) => {
  data.map((ele) => {
    let div = document.createElement("div");
    div.setAttribute("class", "page");

    let imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "pro-img");
    let img = document.createElement("img");
    img.src = ele.thumbnail;
    imgdiv.append(img);

    let title = document.createElement("h4");
    title.innerHTML = ele.title;

    let span = document.createElement("span");
    span.innerHTML = ele.description;

    let pridiv = document.createElement("div");
    pridiv.setAttribute("class", "price");
    let span2 = document.createElement("span");
    span2.innerHTML = `₹ ${ele.price * ele.qty}`;
    span2.setAttribute("class", "sec-pri");
    pridiv.append(span2);

    let prdiv = document.createElement("div");
    prdiv.setAttribute("class", "price-2");
    let span4 = document.createElement("strike");
    span4.innerHTML = `₹ ${ele.discountPercentage * ele.qty}`;
    span4.setAttribute("class", "sec-pri-2");
    prdiv.append(span4);

    
    let totaldis=document.createElement("h3")
    totaldis.setAttribute("class","wrapper")
    totaldis.innerHTML= `Discount rate: ${ele.discountPercentage*ele.qty - ele.price*ele.qty}`

    let rightdiv = document.createElement("div");
    rightdiv.append(title, span, pridiv,totaldis, prdiv);

    let del = document.createElement("i");
    del.setAttribute("class", "fa-solid fa-trash");

    let qty = document.createElement("h1");
    qty.setAttribute("class", "quantity");
    qty.innerHTML = `QTY :${ele.qty}`;


    let set = document.createElement("div");
    set.setAttribute("class", "set");
    set.append(imgdiv, rightdiv, del, qty,);

    div.append(set);
    document.querySelector(".main").append(div);

  });
};
product(store);
