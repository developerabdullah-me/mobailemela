const lodeButton= ()=>{
   const inputSearch=document.getElementById('input-search')
  
    const searchText=inputSearch.value;
    
    inputSearch.value='';


    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch (url)
    .then(res=> res.json())
    .then(data=>displayResults(data.data))
}

const displayResults = phones =>{
  const searchYourPhone = document.getElementById("search-your-phone")
  searchYourPhone.textContent="";
  for(const phone of phones) {
    // console.log(phone)
      const div = document.createElement("div")
      div.classList.add("col")
      div.innerHTML =`
      <div class="col">
      <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title">BRand:${phone.brand}</h4>
          <h5 class="card-text">Model:${phone.phone_name}</h5>
          <p class="card-text">ID:${phone.slug}</p>
          
          <button onClick="showDtails('${phone.slug}')" class="btn btn-primary px-5 ">Show Details</button>
        </div>
      </div>
    </div>
      `
      searchYourPhone.appendChild(div)
  }
// console.log(phone)
}

const showDtails= id=>{
    // console.log(id)
    const url=`
    https://openapi.programming-hero.com/api/phone/${id}
    `;
    fetch(url)
    .then(res=> res.json())
    .then(data=>showDisplay(data.data))
}

const showDisplay=showPhone=>{
    
    const showDtailPhone=document.getElementById('showdtail')
     
    const div=document.createElement('div')

    // for (const showPhones of showPhone)
    div.classList.add('card')
   div.innerHTML =`
    <div class="card" style="width: 18rem;">
    <img src="${showPhone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>

    `;
 showDtailPhone.appendChild(div)
}
