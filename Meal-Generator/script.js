const btnValue=document.getElementById("search-btn");
const searchForm=document.querySelector(".search-form")
searchForm.addEventListener("submit",formSubmit)


function formSubmit(e){
    e.preventDefault();
    console.log("anas");
    fetch("")
    .then(res=>res.json())
    .then(data)
}