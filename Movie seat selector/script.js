let movieId= + document.getElementById('movie').value;
const seats=document.querySelectorAll('.theater-seat .seat');
const count=document.getElementById('count');
const price=document.getElementById('price');
const container=document.querySelector('.container');
const selectMovie= document.getElementById('movie');
localStorage.setItem('movieIndex',selectMovie.selectedIndex);
 maintainui();
console.log(movieId);
function updateCount(){
    const selectedSeat=document.querySelectorAll('.theater-seat .seat.selected');
    count.innerText=selectedSeat.length;
    price.innerText=movieId*selectedSeat.length;
    const movieSeats=[... selectedSeat].map(index=>{
        return [... seats].indexOf(index)
    });
    console.log(movieSeats);
    localStorage.setItem('movieSeats',JSON.stringify(movieSeats));
    localStorage.setItem('count',selectedSeat.length);
    localStorage.setItem('price',movieId*selectedSeat.length);
    
}


container.addEventListener('click',(e)=>{
    if((e.target.classList.contains('seat')) && !(e.target.classList.contains('occupied'))){
        
        e.target.classList.toggle('selected');
        updateCount();
    }
})
selectMovie.addEventListener('change',e=>{
    movieId= + e.target.value;
    localStorage.setItem('movieIndex',e.target.selectedIndex);
    updateCount();

})
function maintainui(){
    let getSeats=localStorage.getItem(('movieSeats'));
    let getprice=localStorage.getItem(('price'))
    let getCount=localStorage.getItem(('count'))
    let movieIndex=localStorage.getItem(('movieIndex'))
    getSeats = JSON.parse(getSeats);
    if(getSeats!==null){
    seats.forEach((seat, index) => {
        if(getSeats.indexOf(index)>-1){
            
            seat.classList.add('selected');
            price.innerText=getprice;
            count.innerText=getCount;
            selectMovie.selectedIndex=movieIndex;
        }
        
    });
}
}