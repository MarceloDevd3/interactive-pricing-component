 <!--
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./css/style.css" rel="stylesheet" >
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  
  <title>Frontend Mentor | Interactive pricing component</title>
</head>
<body>


  <input type="range" min="0" max="100" value="50" class="slider" id="myRange">

</body>
<script> 

   const slider = document.getElementById("myRange");
  slider.oninput = function() {
  let value = (this.value - this.min) / (this.max - this.min) * 100;
  this.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 
  0%, hsl(174, 77%, 80%) ${value}%, #d3d3d3 ${value}%, #d3d3d3 100%)`;
};

  

</script>
</html>

  -->



    
  <label class="ranger" for="rg">
    <input type="range" id="rg" max="1000" steps="10"  onchange="showPrice()">
    <span></span>
  </label>

  <label class="toggle-btn">
    <input type="checkbox">
  </label>

  <p class="views">500K pageviews</p>

  <p class="price"></p>