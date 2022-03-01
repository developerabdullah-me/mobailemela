const toggolSpinner= displayStyle=>{
  document.getElementById('spinners').style.display=displayStyle;
}


  const lodeButton=()=>{
   const inputSearch=document.getElementById('input-search');
    const searchText=inputSearch.value; 
    toggolSpinner('block')
   
    if (searchText == '') {
      document.getElementById('eror').style.display = 'block'
  }
  else {
      document.getElementById('eror').style.display = 'none'
  }

  inputSearch.value='';
  // toggolSpinner('block')
  // toggolSpinner('block')
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch (url)
    .then(res=> res.json())
    .then(data=>displayResults(data.data.slice(0,20)))

    // toggolSpinner('block')
};

//  lodeButton();

const displayResults=(phones)=> {
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
           <a href="#"  onClick="showDtails('${phone.slug}')" class="btn btn-primary px-5 ">Show Details</a>
          
         </div>
      </div>
    </div>
      `;
    searchYourPhone.appendChild(div);
  }
  // console.log(phone)

  toggolSpinner('none')
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
    // console.log(showPhone.releaseDate);
    // for (const showPhones of showPhone)
    div.classList.add('card')
   div.innerHTML =`
    <div class="card shadow-lg p-3 text-center mx-auto m-5" style="width: 18rem;">
    <img src="${showPhone.image}" class="card-img-top w-25 mx-auto" alt="...">
    <div class="card-body">
    <h4 class="card-title">BRand:${showPhone.brand}</h4> 
    <p class="card-text">releaseDate: ${showPhone.releaseDate ? showPhone.releaseDate:"not found"}</p>

     <p class="card-title">chipSet:${showPhone.mainFeatures.chipSet}</p>
      <p class="card-text">displaySize: ${showPhone.mainFeatures.displaySize}</p>
      <p class="card-text">memory:${showPhone.mainFeatures.memory}</p>
      <p class="card-text">sensors:${showPhone.mainFeatures.sensors}</p>

      <p class="card-text">Bluetooth:${showPhone.others ? showPhone.others.Bluetooth:"not found"}</p>
      <p class="card-text">GPS:${showPhone.others ? showPhone.others.GPS:"not found"}</p>
      <p class="card-text">NFC:${showPhone.others ? showPhone.others.NFC:"not found"}</p>
      <p class="card-text">Radio:${showPhone.others ? showPhone.others.Radio:"not found"}</p>
      <p class="card-text">USB:${showPhone.others ? showPhone.others.USB:"not found"}</p>
      <p class="card-text">WLAN:${showPhone.others ? showPhone.others.WLAN:"not found"}</p>
     
    </div>
  </div>
   `;
 showDtailPhone.appendChild(div)



};

