document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const arrow = button.querySelector('.arrow');
  
      // Toggle the answer's visibility
      answer.classList.toggle('open');
      answer.style.display = answer.classList.contains('open') ? 'block' : 'none';
  
      // Rotate the arrow
      if (answer.classList.contains('open')) {
        arrow.style.transform = 'rotate(180deg)';
      } else {
        arrow.style.transform = 'rotate(0deg)';
      }
    });
  });


  document.getElementById('navbar-toggle').addEventListener('click', function () {
    const links = document.getElementById('navbar-links');
    links.classList.toggle('open');
  });
  

  document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    try {
      const response = await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        message,
      });
  
      document.getElementById("response-message").innerText = response.data.success;
    } catch (error) {
      document.getElementById("response-message").innerText = "Failed to send message.";
    }
  });
  