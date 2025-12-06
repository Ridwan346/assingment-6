/**right side api */
fetch("https://openapi.programming-hero.com/api/categories")
.then(x => x.json())
.then(x => category_nam(x.categories))
let category_nam =(categorise)=>{
    let div_right =document.getElementById("div_right")
    div_right.innerText =""
    for(let category of categorise ){
        let nw = document.createElement("div")
        nw.innerHTML=`<div class="p-3"><button onclick= "catagory_name(${category.id})">${category.category_name}</button></div>`
        div_right.appendChild(nw)
    }
}

/**middle card */
fetch("https://openapi.programming-hero.com/api/plants")
.then(x => x.json())
.then(x => middle_card(x.plants))
let middle_card = (v) =>{
  let middle_div = document.getElementById("div_middle")
  middle_div.innerHTML =""
  for(let card of v){
    let nw = document.createElement("div")
    nw.innerHTML =`<div class="flex flex-col bg-white p-3 gap-2.5 h-full">
        <img class="w-full h-48 object-cover" src="${card.image}" alt="">
        <h1 class="font-bold">${card.name}</h1>
        <p>${card.description}</p>
        <div class="flex justify-between">
          <button class="px-3 bg-green-500 rounded-2xl">${card.category}</button>
          <h1>$ <span>${card.price}</span></h1>
        </div>
        <button class="bg-green-700 rounded-2xl"> add to card</button>
      </div>`
      middle_div.appendChild(nw)
  }
}
/**middle card by catagory name */
let catagory_name = (id)=>{
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then(x => x.json())
    .then(x => middle(x.plants))
}
let middle = (v) =>{
  let middle_div = document.getElementById("div_middle")
  middle_div.innerHTML =""
  for(let card of v){
    let nw = document.createElement("div")
    nw.innerHTML =`<div class="flex flex-col bg-white p-3 gap-2.5 h-full">
        <img class="w-full h-48 object-cover" src="${card.image}" alt="">
        <h1 class="font-bold">${card.name}</h1>
        <p>${card.description}</p>
        <div class="flex justify-between">
          <button class="px-3 bg-green-500 rounded-2xl">${card.category}</button>
          <h1>$ <span>${card.price}</span></h1>
        </div>
        <button class="bg-green-700 rounded-2xl"> add to card</button>
      </div>`
      middle_div.appendChild(nw)
  }
}
/**history section */
let history =[]
document.getElementById("div_middle").addEventListener("click",function(e){
   if(e.target.innerText === "add to card"){
    cardhistory(e)
   }
})

let cardhistory = (e) => {

  let title = e.target.parentNode.children[1].innerText
  console.log(title)
  let price = e.target.parentNode
  let spanprice = price.querySelector("span").innerText
  let p1 = parseInt(spanprice)
  let pri = document.getElementById("price2").innerText
  let p2 = parseInt(pri)
  let total = p1 + p2
  document.getElementById("price2").innerText = total;

  console.log(total)
  history.push({
    Title: title,
    price: spanprice
  })

  historyshow(history) 
}
let historyshow = (hs) => {
  let d2 = document.getElementById("history_div")
  d2.innerHTML = ""

  hs.forEach(element => {
    let nw = document.createElement("div")
    nw.innerHTML = `
      <div class="flex justify-between border p-2 mb-2">
        <div>
          <h1>${element.Title}</h1>
          <p>${element.price}</p>
        </div>
        <button onclick="delet('${element.Title}')">❌</button>
      </div>`
    d2.appendChild(nw)
  });
}
let delet = (bt) => {
  let filtered = history.filter(element => element.Title !== bt)
  let total = 0;
  history.forEach(item => {
    total += parseInt (item.price);
  })
  document.getElementById("price2").innerText = total;
  history = filtered
  historyshow(filtered) 
}