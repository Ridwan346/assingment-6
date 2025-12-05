/**right side api */
fetch("https://openapi.programming-hero.com/api/categories")
.then(x => x.json())
.then(x => category_nam(x.categories))
let category_nam =(categorise)=>{
    let div_right =document.getElementById("div_right")
    div_right.innerText =""
    for(let category of categorise ){
        let nw = document.createElement("div")
        nw.innerHTML=`<div class="p-3"><button>${category.category_name}</button></div>`
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