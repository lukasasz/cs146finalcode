function F11() {
    alert("364 Calories")
  }

  function F12() {
    alert("564 Calories")
  }

  function F13() {
    alert("400 Calories")
  }

  function F21() {
    alert("239 Calories")
  }

  function F22() {
    alert("439 Calories")
  }

  function F23() {
    alert("275 Calories")
  }

  function F31() {
    alert("555 Calories")
  }

  function F32() {
    alert("755 Calories")
  }

  function F33() {
    alert("591 Calories")
  }

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

var BFChoice = ""
var LHChoice = ""
var DNChoice = ""

  var dict = {
    "Eggs" : 100,
    "Hash Browns" : 470,
    "Cereal" : 300,
    "Sandwich" : 340,
    "Pasta" : 80,
    "Fruit" : 100,
    "Steak" : 680,
    "Burrito" : 450,
    "Pizza" : 300,
  }

var calories = 0

  function addCalories() {
    if(document.getElementById("choices").value != null){
    BFChoice = document.getElementById("choices").value
    }

    if(document.getElementById("lunchchoices").value != null){
    LHChoice = document.getElementById("lunchchoices").value
    }

    if(document.getElementById("lunchchoices").value != null){
    DNChoice = document.getElementById("dinnerchoices").value
    }

    if (BFChoice in dict) {
      calories += dict[BFChoice]
    }
    if (LHChoice in dict) {
      calories += dict[LHChoice]
    }
    if (DNChoice in dict) {
      calories += dict[DNChoice]
    }
    localStorage.setItem("calories", calories)
    return calories
  }

  function subCaloriesBall() {
    var t = localStorage.getItem("calories") - 300
    alert(t)
  }

  function subCaloriesRun() {
    var r = localStorage.getItem("calories") - 100
    alert(r)
  }

  function subCaloriesCycle() {
    var v = localStorage.getItem("calories") - 264
    alert(v)
  }
