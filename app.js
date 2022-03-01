const lodeButton=()=>{
   const inputSearch=document.getElementById('input-search');
    const searchText=inputSearch.value; 
    
    // inputSearch.value='';
    // if(searchText==''  || searchText < 0) {
    //   // console.log('mtstring')
    //   console.log(searchText, "gfdkjvm");
    // }
  //  else  {
  //     return searchText;
  //   }
  
  
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch (url)
    .then(res=> res.json())
    .then(data=>displayResults(data.data.slice(0,20)))
};

 lodeButton();

function displayResults(phones) {
  const searchYourPhone = document.getElementById("search-your-phone");
  searchYourPhone.textContent = "";
  
  
  for (const phone of phones) {
    // console.log(phone)
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="col)
      ">
      <div class="card text-center shadow-lg p-3">
        <img src="${phone.image}" class="card-img-top w-25 mx-auto" alt="...">
        <div class="card-body">
          <h4 class="card-title">BRand:${phone.brand}</h4>
           <p class="card-text">Model:${phone.phone_name}</p>
           <p class="card-text">ID:${phone.slug}</p>
           <button onClick="showDtails('${phone.slug}')" class="btn btn-primary px-5 ">Show Details</button>
         </div>
      </div>
    </div>
      `;
    searchYourPhone.appendChild(div);
  }
  // console.log(phone)
}

const showDtails= id=>{
    // console.log(id)
    const url=`
    https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>showDisplay(data.data))
};

    const showDisplay=showPhone=>{
    console.log(showPhone)
    const showDtailPhone=document.getElementById('showdtail')
    showDtailPhone.textContent="";
    const div=document.createElement('div')
    
    // for (const showPhones of showPhone)
    div.classList.add('card')
   div.innerHTML =`
    <div class="card shadow-lg p-3 text-center mx-auto m-5" style="width: 18rem;">
    <img src="${showPhone.image}" class="card-img-top w-25 mx-auto" alt="...">
    <div class="card-body">
    <h4 class="card-title">BRand:${showPhone.brand}</h4>
    <p id="rlesaseDate" class="card-text">releaseDate: ${showPhone.releaseDate}</p>

    <p class="card-title">chipSet:${showPhone.mainFeatures.chipSet}</p>
      <p class="card-text">displaySize: ${showPhone.mainFeatures.displaySize}</p>
      <p class="card-text">memory:${showPhone.mainFeatures.memory}</p>
      <p class="card-text">sensors:${showPhone.mainFeatures.sensors}</p>
     
    </div>
  </div>
    `;
 showDtailPhone.appendChild(div)


// else (rlesaseDae === false){
//       return false;
//   } 
};
