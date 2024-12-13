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

  /*navbar slideshow at 768px*/

  const collapsibles = document.querySelectorAll('.collapsible');

    // Loop through each button and add a click event listener
    collapsibles.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;

            if (content.style.maxHeight) {
                // Collapse the content
                content.style.maxHeight = null;
                content.classList.remove('open');
            } else {
                // Expand the content
                content.style.maxHeight = content.scrollHeight + 'px';
                content.classList.add('open');
            }
          
        });
    });
/*form submission*/
    document.querySelector('form').addEventListener('submit', function (event) {
      let isValid = true;
  
      // Check if required fields are filled
      const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
      requiredFields.forEach(function(field) {
          if (!field.value) {
              isValid = false;
              field.style.borderColor = 'red'; // Highlight empty fields
          } else {
              field.style.borderColor = ''; // Remove highlight if filled
          }
      });
  
      if (!isValid) {
          event.preventDefault(); // Prevent form submission if validation fails
          alert('Please fill in all required fields.');
      }
  });
  