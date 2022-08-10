function getChar(event) {
    if (event.which == null) { 
      if (event.keyCode < 32) return null;
      return String.fromCharCode(event.keyCode)
    }
  
    if (event.which != 0 && event.charCode != 0) { 
      if (event.which < 32) return null; 
      return String.fromCharCode(event.which); 
    }
  
    return null; 
  }
  
  var counterLetters = 0;
  var levelText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere tellus et leo mollis, vel"; 
  text.innerHTML=levelText;
  let mistakesCounter = 0; 
  mistakes.innerHTML = ("Кол-во ошибок: " + mistakesCounter);
  function checkKeyEvent() {
        var keyName = getChar(event);
        if(levelText[counterLetters] == keyName){
            console.log("Введен символ"); 
            text.innerHTML = levelText;
  
        } else if (keyName == null) {
            
             console.log("Нажата спец. клавиша");
             alertText.innerHTML =("Нажата спец. клавиша");
             
        } else {
            console.log("Введен неверный символ");
            
            mistakesCounter++;
            mistakes.innerHTML = ("Кол-во ошибок: " + mistakesCounter);
        }
  
  }
  document.addEventListener("keypress", checkKeyEvent);