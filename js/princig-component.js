const toggle = document.querySelector('.checked')

toggle.addEventListener('click', function() {
    if(toggle.classList.contains('active')){
     toggle.classList.remove('active')
    }else {
      toggle.classList.add('active')
    }
})

const slider = document.getElementById("range");
  slider.oninput = function() {
  let value = (this.value - this.min) / (this.max - this.min) * 100;
  this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 
  0%, hsl(174, 77%, 80%) ${value}%, #d3d3d3 ${value}%, #d3d3d3 100%)`;
  const Vl = parseFloat(document.querySelectorAll("input")[0].value);

  let valorX = 0 ;
  var valorY = 0 ;
  var price = 0 ;

  
  switch (Vl) {
    case 0:
    valorX = 10
    price = 8 
    break;
    case 1:
      valorX = 50
      price = 12 
    break;
    case 2:
      valorX = 100
      price =  16
    break;
    case 3:
      valorX = 500
      price = 24
    break;
    case 4:
      valorX = 1000
      price = 36
    break;
    default: 
    valorX = 100
    price = 16
    break;
   }

   let i = price * 0.25

   valorY = price 

    !toggle.classList.contains('active') ? valorY :  valorY -=  i




  

  setTimeout(()=> {
    document.querySelectorAll('.price1')[0].innerText = `$ ${valorY.toFixed(2)}`;
    document.querySelectorAll('.price2')[0].innerText = `$ ${valorY.toFixed(2)}`;
    document.querySelectorAll('span')[0].innerText = `${valorX}K`;
  }, 100)

}









