function changeColor() {
        var hexcode = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
      var color = "#";  
      for (var i = 0; i < 6; i++) {
        var randomIndex = Math.floor(Math.random() * hexcode.length);
        color = color + hexcode[randomIndex];
      }
       console.log("hexcolor===>",color )
      document.body.style.backgroundColor = color;   
       document.getElementById("colorCode").innerText = "Hex Code: " + color;
    }