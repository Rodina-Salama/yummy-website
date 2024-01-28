//  var data =[]
// var myHttp =new XMLHttpRequest()

// myHttp.open("GET","https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
// myHttp.send()
// myHttp.addEventListener('readystatechange',function(){
//   if(myHttp.readyState==4){
//     // console.log( JSON.parse(myHttp.response).meals)
//     data=JSON.parse(myHttp.response).meals
//     // data= myHttp.response
//     console.log(data);
//     displayData()
//   }
// })

// function displayData(){
// var cols=``;
// for( var i=0; i < data.length ; i++){
//   cols +=`      <div class="col-md-3">
//   <img src="${data[i].strMealThumb}" class="w-100" alt="">

//     </div>`
// }
// document.getElementById('rowData').innerHTML=cols;
// console.log(cols);
// }


////////////////////////////////contact us///////////////////////



function contactPage(){
  var cols=``;
  cols=`  <div class="contact  d-flex justify-content-center align-items-center">
  <div class="container w-75 text-center ">
    <div class="row mt-2  g-4">
      <div class="col-md-6">
        <input onkeyup="validateName()" id="nameInput" type="text" class="form-control" placeholder="Enter Your Name">
        <p id="messageName" class="alert alert-danger w-100 mt-2 d-none">Special characters and numbers not allowed </p>
      </div>
      
      <div class="col-md-6">
        <input onkeyup="validateEmail()" id="emailInput" type="email"  class="form-control" placeholder="Enter Your Email">
        <p   id="messageEmail"  class="alert alert-danger w-100 mt-2 d-none">Email not valid *exemple@yyy.zzz </p>
      </div>
      <div class="col-md-6">
        <input onkeyup="validatePhone()"  id="phoneInput" type="number" class="form-control" placeholder="Enter Your Phone">
        <p   id="messagePhone" class="alert alert-danger w-100 mt-2 d-none">Enter valid Phone Number like (01)[0125]xxxxxxxx </p>
      </div>
      <div class="col-md-6">
        <input onkeyup="validateAge()"  id="ageInput" type="number" class="form-control" placeholder="Enter Your Age">
        <p  id="messageAge" class="alert alert-danger w-100 mt-2 d-none">Enter valid age</p>
      </div>
      <div class="col-md-6">
        <input  onkeyup="validatePass()" id="passInput"  type="password" class="form-control" placeholder="Enter Your Password">
        <p   id="messagePass" class="alert alert-danger w-100 mt-2 d-none">Enter valid password *Minimum eight characters, 
        at least one letter and one number:*</p>
      </div>
      <div class="col-md-6">
        <input onkeyup="validateRepass()" id="repassInput" type="password" class="form-control" placeholder="Repassword">
        <p id="messageRepass" class="alert alert-danger w-100 mt-2 d-none">Enter valid password</p>
      </div>

    </div>
    <button onclick="submit()"   class="btn btn-outline-danger mt-3" id="btnID" >Submit</button>
    <div id="sucessMessage" class="alert alert-success mt-2 d-none">Submit Successfully
    <i class="fa-solid fa-check"></i>
    </div>
  </div>
</div>`

  document.getElementById('searchID').innerHTML='';
  document.getElementById('viewData').innerHTML=cols;
  
}

var nameregex=/^[a-zA-Z ]+$/;
var emailregex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var phoneregex=/^01[0125][0-9]{8}$/;
var ageregex=/^\S[0-9]{0,3}$/;
var passregex=/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;




function submit(){



if( validateName()&&validateEmail()&& validatePhone()&&validateAge()&&validatePass()&&validateRepass()){
  console.log('truee');
  // document.getElementById('btnID').removeAttribute("disabled")
  document.getElementById('sucessMessage').classList.remove('d-none')
}
else{
 // document.getElementById('btnID').setAttribute("disabled",true)
 document.getElementById('sucessMessage').classList.add('d-none')
}


 }




function validateName(){

  if(nameregex.test(document.getElementById('nameInput').value)){
        document.getElementById('messageName').classList.replace('d-block','d-none');
       
        return (nameregex.test(document.getElementById('nameInput').value));
      }
      else{
        document.getElementById('messageName').classList.replace('d-none','d-block')
      }
      



}




function validateEmail(){

  if(emailregex.test(document.getElementById('emailInput').value)){
        document.getElementById('messageEmail').classList.replace('d-block','d-none');
        return(emailregex.test(document.getElementById('emailInput').value));
      }
      else{
        document.getElementById('messageEmail').classList.replace('d-none','d-block')
      }
 
  }






 function validatePhone(){

  if(phoneregex.test(document.getElementById('phoneInput').value)){
    document.getElementById('messagePhone').classList.replace('d-block','d-none');
    return(phoneregex.test(document.getElementById('phoneInput').value))
  }
  else{
    document.getElementById('messagePhone').classList.replace('d-none','d-block')
  }

 
 }
 function validateAge(){

  if(ageregex.test(document.getElementById('ageInput').value)){
        document.getElementById('messageAge').classList.replace('d-block','d-none');
        return(ageregex.test(document.getElementById('ageInput').value)) 
      }
      else{
        document.getElementById('messageAge').classList.replace('d-none','d-block')
      }
 
 }

 function validatePass(){

  if(passregex.test(document.getElementById('passInput').value)){
        document.getElementById('messagePass').classList.replace('d-block','d-none');
        return(passregex.test(document.getElementById('passInput').value)) 
      }
      else{
        document.getElementById('messagePass').classList.replace('d-none','d-block')
      }
 
 }

 function validateRepass(){

    if(document.getElementById('passInput').value==document.getElementById('repassInput').value){
    document.getElementById('messageRepass').classList.replace('d-block','d-none');
    return(document.getElementById('passInput').value==document.getElementById('repassInput').value) 
  }
  else{
    document.getElementById('messageRepass').classList.replace('d-none','d-block')
  }
 
 }





////////////////////////search///////////////////////////
function searchPage(){
  var search=``;
  search=`   <div class="row mt-3">
   <div class="col-md-6 ">
  <input  onkeyup="searchName(this.value)" type="text" class="form-control  text-center " placeholder="Search By Name">
</div>
<div class="col-md-6 ">
  <input  onkeyup="searchLetter(this.value)" type="text" class="form-control text-center  " placeholder="Search By First Letter">
</div> </div> `
  document.getElementById('searchID').innerHTML=search;
  document.getElementById('viewData').innerHTML='';
  
}

async function searchName(name){
let response= await fetch(` https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
response= await response.json()
console.log(response);

if(response.meals!=null){
displayData(response.meals)
}

}
searchName("");

async function searchLetter(letter){
  let response= await fetch(` https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
  response= await response.json()
  console.log(response);
   
  if(response.meals!=null){
  displayData(response.meals)
  }
  }
 
  searchLetter("");

// //////////////////////////display data///////////////////////
var data =[]



function displayData(data){
var cols=``;
for( var i=0; i < data.length ; i++){
  cols +=`   <div class="col-md-3">

  <div onclick="getDetails(${data[i].idMeal})" class="imgs position-relative overflow-hidden rounded-2">
    <img src="${data[i].strMealThumb}"  class="w-100"   alt="food">
    
  <div class="layer position-absolute  ">
    <h3>${data[i].strMeal} </h3>
  </div>
  </div>


</div>`
}

document.getElementById('viewData').innerHTML=cols;
// console.log(cols);
}

// getMeals("");
//////////////////////////////////////jquery/////////////////////////////////////////////////


///close sidebar function
function closeSideBar(){
  let width= $('.menu').outerWidth()
  $('.menu').animate({left: -(width-90)},500)
  $(' #items li').animate({top:200},500)
  $('.fa-bars').removeClass('d-none')
  $('.fa-xmark').addClass('d-none')
}
// invoking close sidebar function 
closeSideBar()

$('.menu-icon').on('click',function(){

if($('.menu').css("left")== '0px'){

  closeSideBar()
}
else{
  //open sidebar function
  $('.menu').animate({left: 0},500)
  $('.fa-xmark').removeClass('d-none')
  $('.fa-bars').addClass('d-none')
  $(' #items li').animate({top:0},500)
}
})





////////////////////////////////categories///////////////////////////

var categData=[];
async function getCategories(){
  let response = await fetch( 'https://www.themealdb.com/api/json/v1/1/categories.php')
  response= await response.json()
  console.log(response.categories );
  categData=response.categories ;
  viewCategories();
}


function viewCategories(){
  var cols=``;
  for( var i=0; i < categData.length ; i++){
    cols +=`    <div class="col-md-3">
  
    <div onclick="getCategfood('${categData[i].strCategory}')" class="imgs position-relative overflow-hidden rounded-2">
      <img src="${categData[i].strCategoryThumb}"  class="w-100"   alt="food">
      
    <div class="layer position-absolute  ">
      <div class="text ">
      <h3 >${categData[i].strCategory}</h3>
      <p>${categData[i].strCategoryDescription}</p>
    </div>
    </div>
    </div>
  
  
  </div>`
  }
  document.getElementById('searchID').innerHTML='';
  document.getElementById('viewData').innerHTML=cols;
  // console.log(cols);
  }


  ////////////categories food////////////////////////////////
 var categfood=[]
  async function getCategfood(category){
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  response= await response.json()
  // console.log(response);
  categfood=response.meals;
  console.log(categfood);
  viewCategFood()
 }

 function viewCategFood(){

  var cols=``;
  for( var i=0; i < categfood.length ; i++){
    cols +=`    <div class="col-md-3">
  
    <div onclick="getDetails(${categfood[i].idMeal})"  class="imgs position-relative overflow-hidden rounded-2">
      <img src="${categfood[i].strMealThumb}"   class="w-100"   alt="food">
      
    <div class="layer position-absolute  ">
      <div class="text ">
      <h3 >${categfood[i].strMeal}</h3>
    
    </div>
    </div>
    </div>
  
  
  </div>`
  }
  document.getElementById('viewData').innerHTML=cols;
 }



  // //////////////////////////////////////Area///////////////////////
  var AreaData=[];
async function getArea(){
  let response = await fetch( 'https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  response= await response.json()
  console.log(response.meals);
  AreaData=response.meals ;
  viewArea();
}


function viewArea(){
  var cols=``;
  for( var i=0; i < AreaData.length ; i++){
    cols +=`    <div class="col-lg-3 col-md-4 text-center">
  
    <div onclick="getAreafood('${AreaData[i].strArea}')" class="imgs position-relative overflow-hidden rounded-2 text-white">
    <i class="fa-solid fa-house-laptop fs-1 "></i>
    <h2>${AreaData[i].strArea}</h2>
      
    </div>
  
  
  </div>`
  }
  document.getElementById('searchID').innerHTML='';
  document.getElementById('viewData').innerHTML=cols;
  // console.log(cols);
  }

////////////////////////Area food/////////////////////////////
var AreaFood=[]
async function getAreafood(area){
let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
response= await response.json()
// console.log(response);
AreaFood=response.meals;
console.log(AreaFood);
viewAreaFood()
}

function viewAreaFood(){

var cols=``;
for( var i=0; i < AreaFood.length ; i++){
  cols +=`    <div class="col-md-3">

  <div onclick="getDetails(${AreaFood[i].idMeal})" class="imgs position-relative overflow-hidden rounded-2">
    <img src="${AreaFood[i].strMealThumb}"  class="w-100"   alt="food">
    
  <div class="layer position-absolute  ">
    <div class="text ">
    <h3 >${AreaFood[i].strMeal}</h3>
  
  </div>
  </div>
  </div>


</div>`
}
document.getElementById('viewData').innerHTML=cols;
}



  ///////////////////////ingredients/////////////////////////

  var ingredData=[];
async function getIngredient(){
  let response = await fetch( 'https://www.themealdb.com/api/json/v1/1/list.php?i=list')
  response= await response.json()
  console.log(response);
  ingredData=response.meals.slice(0,24) ;
  viewIngredient();
}


function viewIngredient(){
  var cols=``;
  for( var i=0; i < ingredData.length ; i++){
    cols +=`    <div class="col-lg-3 col-md-4   text-center">
  
    <div onclick="getIngredientFood('${ingredData[i].strIngredient}')" class="imgs position-relative overflow-hidden rounded-2 text-white ">
    <i class="fa-solid fa-drumstick-bite fs-1"></i>
    <h2>${ingredData[i].strIngredient}</h2>
    <p>${ingredData[i].strDescription.slice(0,149)}</p>
      
    </div>
  
  
  </div>`
  }
  document.getElementById('searchID').innerHTML='';
  document.getElementById('viewData').innerHTML=cols;
  // console.log(cols);
  }
  ////////////////////////ingredient food/////////////////////////////
var IngredientFood=[]
async function getIngredientFood(ingredient){
let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
response= await response.json()
// console.log(response);
IngredientFood=response.meals;
console.log(IngredientFood);
viewIngredientFood()
}

function viewIngredientFood(){

var cols=``;
for( var i=0; i < IngredientFood.length ; i++){
  cols +=`    <div class="col-md-3">

  <div   onclick="getDetails(${IngredientFood[i].idMeal})" class="imgs position-relative overflow-hidden rounded-2">
    <img src="${IngredientFood[i].strMealThumb}"  class="w-100"   alt="food">
    
  <div class="layer position-absolute  ">
    <div class="text ">
    <h3 >${IngredientFood[i].strMeal}</h3>
  
  </div>
  </div>
  </div>


</div>`
}
document.getElementById('viewData').innerHTML=cols;
}

///////////////////////////////////food details//////////////////////////////////
var mealDetails=[]


async function getDetails(foodID){
  let response= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodID}`)
  response= await response.json()
  mealDetails=response.meals;
  console.log(mealDetails);
  viewDetails( )
}
 var strIngredient=[]


function viewDetails(){
  let recipes=``;
  var cols=``;
  let Tags=``;
 

for( var i=0; i < mealDetails.length ; i++){
  

recipes  +=`  <li class="text-black mt-1">${mealDetails[i].strIngredient1} </li> 
<li class="text-black mt-1">${mealDetails[i].strIngredient2} </li> 
<li class="text-black mt-1">${mealDetails[i].strIngredient3} </li> 
<li class="text-black mt-1">${mealDetails[i].strIngredient4} </li> 

`
 
 
console.log(recipes);

if(mealDetails[i].strTags !=null){
Tags+=`
<li class="text-black">${mealDetails[i].strTags} </li> 

`
}
else{
  Tags+=`
<li class="text-black bg-black"> </li> 

`
}



  cols +=`   <div class="col-md-6">
  <div class="imagedetail ms-3 ">
  <img src="${mealDetails[i].strMealThumb}"  class="w-100 rounded-3" alt="">
  <h2 class="text-white">${mealDetails[i].strMeal}</h2>
   </div>
   </div>
  <div class="col-md-6">
  <div class="texts text-white  ms-4">
  <h2>Instruction</h2>
  <p>${mealDetails[i].strInstructions}</p>
     <h3>Area : <span>${mealDetails[i].strArea}</span></h3>
     <h3>Category : <span>${mealDetails[i].strCategory}</span></h3>
     <h3 >Recipes :</h3>
     <ul class="list-unstyled text-black recipe ">
      ${recipes}
      
     </ul>
     <h3>Tags :</h3>
     <ul class="list-unstyled text-black tag">
     ${Tags}
     </ul>
   <a target="_blank" href="${mealDetails[i].strSource}"  >  <button class="btn btn-primary">Source</button></a>
    <a target="_blank"  href="${mealDetails[i].strYoutube}" > <button class="btn btn-danger">Youtube</button></a>
</div>
</div>`
} 
document.getElementById('viewData').innerHTML=cols;
}



 