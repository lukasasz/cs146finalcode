  function F11() {
    alert("364 Calories");
  }

  function F12() {
    alert("564 Calories");
  }

  function F13() {
    alert("400 Calories");
  }

  function F21() {
    alert("239 Calories");
  }

  function F22() {
    alert("439 Calories");
  }

  function F23() {
    alert("275 Calories");
  }

  function F31() {
    alert("555 Calories");
  }

  function F32() {
    alert("755 Calories");
  }

  function F33() {
    alert("591 Calories");
  }

  function ynCheck1() {
    if (document.getElementById('mealSelectYes1').checked) {
        document.getElementById('mealChoices1').style.display = 'block';
    }
    else if (document.getElementById('mealSelectNo1').checked) {
        document.getElementById('mealChoices1').style.display = 'none';
    }
  }
  function ynCheck2() {
    if (document.getElementById('mealSelectYes2').checked) {
        document.getElementById('mealChoices2').style.display = 'block';
    }
    else if (document.getElementById('mealSelectNo2').checked) {
        document.getElementById('mealChoices2').style.display = 'none';
    }
  }
  function ynCheck3() {
    if (document.getElementById('mealSelectYes3').checked) {
        document.getElementById('mealChoices3').style.display = 'block';
    }
    else if (document.getElementById('mealSelectNo3').checked) {
        document.getElementById('mealChoices3').style.display = 'none';
    }
  }
  function clearAll() {
    document.getElementById('mealChoices1').style.display = 'none';
    document.getElementById('mealChoices2').style.display = 'none';
    document.getElementById('mealChoices3').style.display = 'none';
  }
