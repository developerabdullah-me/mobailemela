// spinners
const toggolSpinner= displayStyle=>{
  document.getElementById('spinners').style.display=displayStyle;
}
// lodeButton
  const lodeButton=()=>{
   const inputSearch=document.getElementById('input-search');
    const searchText=inputSearch.value; 
    // toggolSpinner display block
    toggolSpinner('block');
  // cleaer fild
  inputSearch.value='';
  // api
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch (url)
    .then(res=> res.json())
    .then(data=>{
      // eror handeling
        if(data.data.length==0){
         document.getElementById('notfound').style.display="block"
        }
        else {
          displayResults((data.data.slice(0,20)));
          document.getElementById('notfound').style.display="none"
        };
    });
};

// displayResults
const displayResults=(phones)=> {
  const searchYourPhone = document.getElementById("search-your-phone");
  // uiresult cleaer 
  searchYourPhone.textContent = "";
  // for loop
  for(const phone of phones) {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="col)">
      <div class="card  text-center shadow-lg p-3">
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
 // toggolSpinner display none
  toggolSpinner('none')
}

  const showDtails= id=>{
    // console.log(id)
    const url=`
    https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>showDisplayPhoneDetails(data.data))
};
    // showDisplayPhoneDetails
    const showDisplayPhoneDetails=showPhoneDetails=>{
    // console.log(showPhoneDetails)
    // detail
    const showDtailPhone=document.getElementById('showdtail')
    // clear ui dtails
    showDtailPhone.textContent="";
    // createElement
    const div=document.createElement('div')
  //  innerHTML
   div.innerHTML =`
    <div class="card shadow-lg p-3 text-center mx-auto m-5" style="width: 18rem">
    <img src="${showPhoneDetails.image}" class="card-img-top w-25 mx-auto" alt="...">
    <div class="card-body">
    <h4 class="card-title">BRand:${showPhoneDetails.brand}</h4> 
    <p class="card-text">releaseDate: ${showPhoneDetails.releaseDate ? showPhoneDetails.releaseDate:"not found"}</p>
    <h5>mainFeatures:</h5>
     <p class="card-title">chipSet:${showPhoneDetails.mainFeatures.chipSet}</p>
      <p class="card-text">displaySize: ${showPhoneDetails.mainFeatures.displaySize}</p>
      <p class="card-text">displaySize: ${showPhoneDetails.mainFeatures.displaySize}</p>
      <p class="card-text">memory:${showPhoneDetails.mainFeatures.memory}</p>
      <h5>sensors:</h5>
      <p class="card-text">sensors:${showPhoneDetails.mainFeatures.sensors}</p>
      <h5>others:</h5>
      <p class="card-text">Bluetooth:${showPhoneDetails.others ? showPhoneDetails.others.Bluetooth:"not found"}</p>
      <p class="card-text">GPS:${showPhoneDetails.others ? showPhoneDetails.others.GPS:"not found"}</p>
      <p class="card-text">NFC:${showPhoneDetails.others ? showPhoneDetails.others.NFC:"not found"}</p>
      <p class="card-text">Radio:${showPhoneDetails.others ? showPhoneDetails.others.Radio:"not found"}</p>
      <p class="card-text">USB:${showPhoneDetails.others ? showPhoneDetails.others.USB:"not found"}</p>
      <p class="card-text">WLAN:${showPhoneDetails.others ? showPhoneDetails.others.WLAN:"not found"}</p>
     
    </div>
  </div>
   `;
 showDtailPhone.appendChild(div);
};

