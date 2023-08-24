console.log("hello")
let btn = document.getElementById("btn")
let laugh = document.getElementById("jok")
const apikey ="D0vr3IBoe8jWGUuMvTf5LA==jMvSKGfhuZ4zvbPg"
let options = {
    method : 'GET',
    headers: { 
        'X-Api-Key': apikey,
    },
}
 const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
 async function getjoke(){ 
  try{ 
    btn.disable = true 
    btn.innerText="Loading..."
    laugh.innerText="Updating..."
    const response = await fetch(apiurl,options);
    const data = await response.json();
    btn.disable= false
    btn.innerText ="Tell me a joke"  
    laugh.innerText = data[0].joke;
  }
  catch(error){
    laugh.innerText="Network Problem"
    btn.disable= false
  btn.innerText ="Tell me a joke"
  }
}
btn.addEventListener('click',getjoke)