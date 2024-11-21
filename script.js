function typeGreeting(text, elementId, speed) {
    const element = document.getElementById(elementId);
    let index = 0;

    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);  // Delay between each character
      }
    }
    
    type();
  }
  window.onload = function() {
    typeGreeting("All resources and tool's for learning and building!", "greeting", 30);
  };